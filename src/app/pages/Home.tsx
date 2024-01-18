import React, { useState, useEffect } from 'react';
import { Flex, Heading, Container } from "@dynatrace/strato-components-preview";
import { functions } from "@dynatrace-sdk/app-utils";
import { Sankey } from "../components/Sankey";
import { ProgressCircle } from '@dynatrace/strato-components-preview/core';
import {
  FormField,
  TextInput,
} from '@dynatrace/strato-components-preview/forms';

export const Home = () => {
  // state variable to store smartscape data returned from function
  interface SankeyData {
    nodes: {name: string; category: string;}[],
    links: {source: string, target: string, value: number}[]
  }
  const initialStateObject: SankeyData = {nodes:[
      {"name":"no data", "category": "no category"},
      {"name": "nothing", "category": "nothing"}
    ],links:[
      {"source": "no data", "target": "nothing", value: 1}
    ]}
  const [smartscapeData, setSmartscapeData] = useState(
    initialStateObject
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filterString, setFilterString] = useState("");
  const [isNoData, setIsNoData] = useState(false);
  const [sankeyData, setSankeyData] = useState(initialStateObject);

  const fetchSmartscapeData = async (f: string) => {
    const result = await functions.call('fetch-smartscape-data', {data: f})
      .then((response) => response.json())
      .then(response => {
        if (response.length > 2) {
          setIsNoData(false);
          setIsLoading(false);
          return response;
        } else {
          setIsNoData(true);
        }
      })
      .catch(() => {fetchSmartscapeData(f)});
    return result.length > 2 ? result : null;
  };

  useEffect(() => {
    fetchSmartscapeData(filterString).then((res) => {
      if (res && !res.hasOwnProperty("error")) {
        const nodes:{"name": string; "category": string;}[] = [];
        const links:{
          "source": string, "target": string, "value": number
        }[] = [];
        
        // build node list
        res.map(i => {
          if (i.process_group_instance) {
            for (const k in i) {
              if (nodes.findIndex(x => x === i[k]) < 0) {
                i[k] != null && nodes.push({
                  "name": i[k],
                  "category": i.service_name ? i.service_name : "none",
                });
              }
            }
          }
        });

        // handle links
        res.map(i => {
          if (i != undefined && i.process_group_instance != null && i.host_name != null) {
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

        setSankeyData({ "nodes": nodes, "links": links});
        nodes.length > 2 && setIsLoading(false);
        setSmartscapeData(sankeyData);
      }
    }).catch(e => {console.log(e);});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterString, fetchSmartscapeData]);
  
  console.log(smartscapeData);

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <Heading>🧬SankeyScape</Heading>
      <Flex gap={48} paddingTop={64} flexFlow="wrap" width="100%">
        <Container width="100%" style={{"textAlign": "center"}}>
          <FormField label="🔎Filter Service Name">
            <TextInput value={filterString} onChange={setFilterString} />
          </FormField>
          {isLoading && <ProgressCircle />}
          {isNoData && <h4>😒 Oh No! No Data!</h4>}
          {!isLoading && !isNoData && <Sankey data={smartscapeData} width={1600} height={720} />}
        </Container>
      </Flex>
    </Flex>
  );
};
