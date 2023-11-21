const path = require('path');
const { readdirSync } = require('fs');
const renderStatic = require('solid-ssr/static');

const cwd = process.cwd();

const pathToServer = path.resolve(cwd, "lib/server.js");
const pathToPublic = path.resolve(cwd, "public");

const PAGES_PATH = './data/pages';
const pages = readdirSync(PAGES_PATH);

renderStatic(
  pages.map((filename: string) => {
    const parts = filename.split('.');
    const pageName = parts[0];

    return {
      entry: pathToServer,
      output: path.join(pathToPublic, `${pageName}.html`),
      url: pageName === "index" ? `/` : `/${pageName}`
    };
  })
);
