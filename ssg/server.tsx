import {PageData} from "../src/components/models";
import readJsonFile from "./readJsonFile";
import PageRenderer from "./solid/PageRenderer";

const DATA_PATH = './data';
const PAGES_PATH = `${DATA_PATH}/pages`;

const req = async (props: any) => {
  let pageName = props.url.split('/')[1];
  if (!pageName) {
    pageName = 'index';
  }

  const pageData = readJsonFile<PageData>(`${PAGES_PATH}/${pageName}.json`);
  const theme = readJsonFile(`${DATA_PATH}/theme.json`);
  return await PageRenderer.render(pageData, theme);
};

export default req;
