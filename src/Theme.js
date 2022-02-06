import { ThemeProvider } from "styled-components";

export const theme = {
  radius: "8px",
  colors: {
    red: "hsl(0, 100%, 74%)",
    green: "hsl(154, 59%, 51%)",
    blue: "hsl(248, 32%, 49%)",
    darkBlue: "hsl(249, 10%, 26%)",
    greyBlue: "hsl(246, 25%, 77%)",
    white: "hsl(359, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
    grey: "hsl(98, 2%, 81%)",
    darkGrey: "hsl(98, 0%, 43%)",
    //TODO convert to hsl
    purple: "#7632B4",
  },
  fonts: ["Poppins", "Roboto"],
  // TODO create system of different font sizes from usage
  // were not provided in style-guide.md
  fontSizes: {
    body: "16px",
  },
  fontWeights: {
    medium: "400",
    semiBold: "500",
    Bold: "600",
    ExtraBold: "700",
  },
  breakpoints: {
    mobile: "375px",
    desktop: "1440px",
  },
  // TODO look closer at shadow vs designs
  shadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
