# The JDP-1000 Website Builder and You

Hello and welcome to the JDP-1000 website builder!

_Uh, hi. What is the JDP-1000 Website Builder?_

This humble project uses server rendered React components to generate static HTML pages for use with Github or Gitlab Pages.

_What does that mean?_

Doesn't matter.

_How do I use it?_

Great question! The JDP-1000 Website Builder abstracts most of the implementation of managing a website from you. It handles layout and styling, all you have to do is take care of the page content.

_It does all that for me? Is it like some kind of AI thing?_

:| No.

_Ok, cool. How do I make some content?_

All ya gotta do, is modify the JSON files in the `/data` directory.

_What's a 'directory'?_

*Sigh, the `/data` folder.

_Oh, ok. Got it. So what do I do with the `/data` folder?_

The `/data` folder contains several files that dictate the content of your site. Let's look at them in detail:

- **/data**
  - **navigation.json** - A list of links that will appear in the navbar on every page of the website. For all links here or in other JSON files you can use relative paths to reference other pages on your site. Always begin relative links with `./`.
  - **theme.json** - Sets all the possible theme options for the site. JDP-1000 uses [Material UI](https://mui.com/material-ui/) as the basis for it's compnent styles and layout. See Material UI's [theming](https://mui.com/material-ui/customization/default-theme/) documentation to see what options are available.
    - **/pages** - Each json file in this direc-, uh, folder corresponds to a page on the site. `index.json` is the homepage. To create a new page just add a new file, it's that easy! These files have a specific structure that must be followed in order to generate pages correctly:
      - path: The url path the page will have. Usually you want this to be `/pageName`
      - title: The page title. This won't be visible on the page but will be the title in the browser tab.
      - hero: Optional. If this attribute is set to a component (see below) it will render the component in a nice page header experience.
      - components: This lists all the components that make up the body of the page. There are six (6) supported components at this time:
        - Text/Markdown
        ```
        {
          "component": "markdown",
          "content": "Text you want to render as a paragraph. Must be entered as one line. Markdown is supported"
        }
        ```
        - Multiline Markdown
        ```
        {
          "component": "multiline-markdown",
          "lines": [
            "_This_ component allows you",
            "to enter multiple lines",
            "of **markdown** at once,
            "for user convenience"
          ]
        }
        ```
        - Image. Note: Images must first be added to the `/public` folder before a component is added to the page.
        ```
        {
          "component": "image",
          "src": "url/path/to/image",
          "caption": "Optional. If defined will show a caption for this image.",
          "credit": "Optional. If defined will show a credit for this image"
        }
        ```
        - Video
        ```
        {
          "component": "video",
          "src": "url to a youtube video you want to embed. Only works with youtube currently",
          "title": "Optional. If defined will render a title for this video."
        }
        ```
        - Project Card
        ```
        {
          "component": "projectCard",
          "image": {
            "component": "image",
            "src": "url/path/to/image",
            "caption": "Optional. If defined will show a caption for this image.",
            "credit": "Optional. If defined will show a credit for this image"
          },
          "projectName": "Title for the card to display",
          "link": "Optional. Relative URL to the web page on this site that this project card should link to."
        }
        ```
        - Gallery - NOTE: the `options` attribute and the attributes it contains are optional. See [Material UI Image List](https://mui.com/material-ui/react-image-list/) for additional information.
        ```
          {
            "component": "gallery",
            "options": {
              "variant": "",
              "columns": 1,
              "gap": 1
            },
            "images": [] // A list of Image components that this gallery should contain. See Image definition above.
          }
        ```
_Whew, that was a lot._

Yeah, bit an info dump. Sorry about that. Any questions?

_Yeah, how do I deploy my changes?_

Oh easy, first make a new branch to work on your changes, then when that branch is ready merge it into `master` (or `main`) and a Github workflow will kick off to deploy your website.

_Neat._

Yeah, I thought so. Anything else?

_Is there any way to preview my changes without deploying the page?_

Actually, yes. To do that you'll need to run the dev server locally.

_Sounds difficult._

It's not as complicated as it sounds. Just follow these steps:

1. Download and install Git, Node, and NPM for your operating system. Reccomended versions 18.15.0 or 20.12.0
2. Use git to clone the project and create a new branch
```
$ git clone git@github.com:PerezJD/curtis.git
$ cd curtis
$ git checkout -b your_branch_name
$ npm install
$ npm run start
```
3. Navigate to http://localhost:8000 in your browser to view the website.
4. That's it. Now when you make any changes you can reload the page and view them immediately.

_Hey, that's not so bad!_

Told you.

_So what now?_

Now, it's all up to you! Your webpage hasn't been written yet! No one's has! You're webpage is whatever you make it, so make it a good one!

_Great scott!_

Yeah, this is heavy.
