import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F4F6F8',
  200: '#E0E0E0',
  300: '#BDBDBD',
  400: '#9E9E9E',
  500: '#757575',
  600: '#616161',
  700: '#424242',
  800: '#212121',
  900: '#121212',
};

const PRIMARY = {
  lighter: '#B2DFDB',  // light teal
  light: '#4DB6AC',
  main: '#00695C',     // strong teal (main brand color)
  dark: '#004D40',
  darker: '#002D26',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#FFF9C4',  // pale yellow
  light: '#FFF176',
  main: '#FFEB3B',     // bright yellow (highlight)
  dark: '#FBC02D',
  darker: '#F57F17',
  contrastText: GREY[900],
};

const INFO = {
  lighter: '#B3E5FC',
  light: '#4FC3F7',
  main: '#0288D1',     // accent blue
  dark: '#01579B',
  darker: '#003c6c',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#C8E6C9',
  light: '#81C784',
  main: '#388E3C',
  dark: '#2E7D32',
  darker: '#1B5E20',
  contrastText: GREY[900],
};

const WARNING = {
  lighter: '#FFF8E1',
  light: '#FFE082',
  main: '#FFC107',     // amber for warnings
  dark: '#FF8F00',
  darker: '#E65100',
  contrastText: GREY[900],
};

const ERROR = {
  lighter: '#FFCDD2',
  light: '#EF9A9A',
  main: '#D32F2F',
  dark: '#B71C1C',
  darker: '#7F0000',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: '#F57F17',   // light gray text
    secondary: '#B0BEC5', // muted gray
    disabled: GREY[500],
  },
  background: {
    paper: '#1C2B2A',     // card background (dark teal-gray)
    default: '#102320',   // main background (deep teal)
    neutral: '#1E2F2D',
  },
  action: {
    active: GREY[300],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
