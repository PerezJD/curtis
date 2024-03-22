import {readFileSync} from "fs";

function getJson<T>(filepath: string): T {
  const data = readFileSync(filepath);
  const json = JSON.parse(data.toString());
  return json as T;
}

export default getJson;
