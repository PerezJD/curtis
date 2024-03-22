import Typography from "@mui/material/Typography";

const markdownOptions = {
  wrapper: null,
  forceBlock: true,
  overrides: {
    p: {
      component: Typography,
      props: {
        paragraph: true
      }
    },
    h1: {
      component: Typography,
      props: {
        variant: "h1"
      }
    },
    h2: {
      component: Typography,
      props: {
        variant: "h2"
      }
    },
    h3: {
      component: Typography,
      props: {
        variant: "h3"
      }
    },
    h4: {
      component: Typography,
      props: {
        variant: "h4"
      }
    }
  }
};

export default markdownOptions;
