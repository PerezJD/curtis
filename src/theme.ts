import { createTheme } from '@mui/material/styles';
import {ThemeOptions} from "@mui/material/styles/createTheme";
import themeOptions from '../data/theme.json';

// Create a theme instance.
const theme = createTheme(themeOptions as ThemeOptions);

export default theme;
