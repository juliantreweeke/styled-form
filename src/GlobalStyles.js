import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/bg-intro-desktop.png";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.colors.red};
    font-family:'Poppins', sans-serif;
    background-image: url(${BackgroundImage});
  }
`;

export default GlobalStyle;
