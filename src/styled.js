import { createGlobalStyle } from "styled-components";
import Background from "./images/background_light.jpg";

export const GlobStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Jost', sans-serif;
  }
  body {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background-image:url(${Background});
    background-size:100%;
    background-repeat: no-repeat;
}
`;

export default GlobStyled;
