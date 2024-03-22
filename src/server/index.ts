import path from 'path';
import express, { Request, Response } from 'express';
import readJsonFile from "./readJsonFile";
import {PageProps} from "../models";
import PageRenderer from "./PageRenderer";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/:pageName", async (request: Request, response: Response): Promise<void> => {
  const pageName = request.params['pageName'].replace('.html','');

  if (pageName === 'favicon.ico') {
    response.status(204);
    return;
  }

  const pageData = readJsonFile<PageProps>(`${__dirname}/../../../data/pages/${pageName}.json`);
  const renderedPage = await PageRenderer.render(pageData);
  response.send(renderedPage);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});
