import { createTheme } from "@material-ui/core";

// enumにしておく
export enum DefaultThemeemeColor {
  inherit = "inherit",
  primary = "primary",
  secondary = "secondary",
  default = "default",
}

export enum ThemeColor {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

const breakpoint = "@media (max-width:1023.95px)";
export const DefaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 980,
      md: 1024,
      lg: 1280,
      xl: 1580,
    },
  },
  palette: {
    primary: {
      main: "#F97026",
      light: "#F9A578",
      contrastText: "#fff",
    },
    error: {
      main: "#FF4B4B",
      contrastText: "#000000",
    },
    warning: {
      main: "#FF4B4B",
      light: "#FFDBDB",
      contrastText: "#000000",
    },
    info: {
      main: "#5EAFF2",
      light: "#DFEFFC",
      contrastText: "#FF4B4B",
    },
    success: {
      main: "#47D0BD",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#8A8A8D",
      disabled: "#C4C4C6",
      hint: "#FF4B4B",
    },
    divider: "#CFCFCF",
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily:
      '"Noto Sans JP","游ゴシック","ヒラギノ角ゴ Pro W3","メイリオ", "sans-serif" ,"Helvetica", "Arial"',
    h1: {
      fontSize: 40,
      lineHeight: 1.4,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 24,
      },
    },
    h2: {
      fontSize: 40,
      lineHeight: 1.4,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.4,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 20,
      },
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 18,
      },
    },
    h5: {
      fontSize: 16,
      lineHeight: 1.8,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 14,
      },
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.8,
      fontWeight: "normal",
      [breakpoint]: {
        fontSize: 14,
      },
    },
    body2: {
      fontSize: 13,
      lineHeight: 1.4,
      fontWeight: "normal",
      [breakpoint]: {
        fontSize: 12,
      },
    },
    h6: {
      fontSize: 11,
      lineHeight: 1.4,
      fontWeight: "normal",
      [breakpoint]: {
        fontSize: 10,
      },
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.2,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 12,
      },
    },
    button: {
      fontSize: 16,
      lineHeight: 1.2,
      fontWeight: 500,
      textTransform: "none",
      [breakpoint]: {
        fontSize: 15,
      },
    },
    subtitle2: {
      fontSize: 20,
      lineHeight: 1.2,
      fontWeight: "bold",
      [breakpoint]: {
        fontSize: 18,
      },
    },
    caption: {
      fontSize: 12,
      lineHeight: 1,
      fontWeight: "normal",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        backgroundColor: "#f9f9f9",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      outlined: {
        backgroundColor: "transparent",
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
  },
});
