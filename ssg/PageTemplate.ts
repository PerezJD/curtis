import {PageData} from "../src/components/models";

export const render = (html: string, css: string, pageData: PageData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>${pageData.title}</title>
        ${css}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap"
        >
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
