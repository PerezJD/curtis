import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import getJson from "./server/readJsonFile";
import {ThemeOptions} from "@mui/material/styles/createTheme";

const themeOptions = getJson<ThemeOptions>('./data/theme.json');

// Create a theme instance.
const theme = createTheme(themeOptions);

export default theme;
