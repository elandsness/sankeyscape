import { queryExecutionClient } from "@dynatrace-sdk/client-query";

export default async function (searchTerm: string) {
  console.log(searchTerm);
  const filterStatement = searchTerm === undefined ? `// no filter passed
    ` 
    : `| filter contains(entity.detected_name, "${searchTerm}", caseSensitive:false)
    `;
  const query = `fetch dt.entity.service, from: now()-1h
    ${filterStatement}
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

  const getThatData = async () => {
    const result = await queryExecutionClient.queryExecute({
      body: {
        query: query,
      },
    })/*.then(async (q) => {
      console.log (q.state) // RUNNING
      while (!checkDone(q)) {
        setTimeout(() => null, 500);
      }
      return await queryExecutionClient.queryPoll({
        "requestToken": q.requestToken,
      })
    })
    .then(i => i.result.records)
    .catch((e) => {console.log(e);});*/
    return result;
  }

  /*const checkDone = async (job) => {
    console.log(job);
    return await job.state === "RUNNING" ? false : true;
  }*/
  
  return getThatData();
}
