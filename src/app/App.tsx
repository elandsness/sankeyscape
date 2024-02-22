import React, { useEffect, useState } from 'react';
import {
  AppHeader,
  AppName,
  Page,
  Heading,
  Grid,
  Flex,
} from '@dynatrace/strato-components-preview';
import { useDqlQuery } from '@dynatrace-sdk/react-hooks';
import {
  FormField,
  TextInput,
} from '@dynatrace/strato-components-preview/forms';
import { Card } from './components/Card';

export const App = () => {
  interface SankeyData {
    nodes: {name: string; category: string;}[],
    links: {source: string; target: string; value: number;}[]
  }

  const initialStateObject: SankeyData = {nodes:[
    {"name":"no data", "category": "no category"},
    {"name": "nothing", "category": "nothing"}
  ],links:[
    {"source": "no data", "target": "nothing", value: 1}
  ]}

  const [smartscapeData, setSmartscapeData] = useState(initialStateObject);
  const [filterString, setFilterString] = useState("");
  const [isRendering, setIsRendering] = useState(false);

  const query = `fetch dt.entity.service, from: now()-1h
    ${filterString === "" ? '// no filter string' : '| filter contains(entity.detected_name, "' + filterString + '", caseSensitive:false)'}
    | fieldsAdd entity.detected_name
    | fieldsAdd tags
    | fieldsAdd tags_str = toString(tags)
    | fieldsRename service_name=entity.detected_name
    | fieldsRename service_tags=tags
    | expand service_pgi=runs_on[dt.entity.process_group_instance]
    | lookup [
        fetch dt.entity.process_group_instance
        | fieldsAdd belongs_to[dt.entity.host]
        | fieldsAdd entity.detected_name], sourceField:service_pgi, lookupField:id, prefix:"pgi."
    | fieldsRename process_group_instance=pgi.entity.detected_name
    | fieldsRename host_id=${"`"}pgi.belongs_to[dt.entity.host]${"`"}
    | lookup [
        fetch dt.entity.host
        | fieldsAdd belongs_to[dt.entity.vmware_datacenter]
        | fieldsAdd entity.detected_name], sourceField:host_id, lookupField:id, prefix:"hid."
    | fieldsRename host_name=hid.entity.detected_name
    | fields service_name, process_group_instance, host_name
    | limit 15`;

  const resultSmartscape = useDqlQuery({
    body: {
      query: query,
      requestTimeoutMilliseconds: 10000,
    },
  });

  useEffect(() => {
    setIsRendering(resultSmartscape.isLoading);
    if(!isRendering) {
      const nodes:{"name": any; "category": any;}[] = [];
      const links:{
        "source": any, "target": any, "value": any
      }[] = [];
      console.log("(👌)  ", resultSmartscape);
      // build node list
      resultSmartscape.data?.records.map(i => {
        if (i && i?.process_group_instance) {
          for (const k in i) {
            if (nodes && nodes.findIndex(x => x === i[k]) < 0) {
              i[k] != null && nodes.push({
                "name": i[k],
                "category": i.service_name ? i.service_name : "none",
              });
            }
          }
        }
      });

      // handle links
      resultSmartscape.data?.records.map(i => {
        if (i && i.process_group_instance && i.host_name) {
          console.log(links)
          try {
            links.push({
              "source": i.service_name,
              "target": i.process_group_instance,
              "value": 100,
            });
          } catch (e) { console.log(i, e)}
          try {
            links.push({
              "source": i.process_group_instance,
              "target": i.host_name,
              "value": 400,
            })
          } catch (e) { console.log(i, e)}
        }
      });

      setSmartscapeData({ "nodes": nodes, "links": links});
    } else {console.log('🧬 ',isRendering)}
  }, [isRendering, filterString, resultSmartscape.isLoading]);

  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppName />
        </AppHeader>
      </Page.Header>
      <Page.Main>
        <Flex gap={32} flexDirection="column" alignItems={'center'}>
          <Heading level={1}>📚Sankey Service Flow</Heading>
          <FormField label="🔎Filter Service Name">
            <TextInput value={filterString} onChange={setFilterString} />
          </FormField>
          <Grid gap={32} gridTemplateColumns={'1fr 1fr'}>
            <Card sankeyData={smartscapeData} isLoading={isRendering} />
          </Grid>
        </Flex>
      </Page.Main>
    </Page>
  );
};
