import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: auto;
    font-size: 14px;
    color: ${props => props.theme.colors.black565};

    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  img {
    border-style: none;
  }

  button,
  select {
    text-transform: none;
  }

// Correct the inability to style clickable types in iOS and Safari.

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  // Remove the inner border and padding in Firefox.

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
`;
export default GlobalStyle;