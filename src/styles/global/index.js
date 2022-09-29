import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./assets/fonts/BeVietnamPro-Bold.woff2') format('woff2'),
        url('./assets/fonts/BeVietnamPro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./assets/fonts/BeVietnamPro-Light.woff2') format('woff2'),
        url('./assets/fonts/BeVietnamPro-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('./assets/fonts/BeVietnamPro-Regular.woff2') format('woff2'),
        url('./assets/fonts/BeVietnamPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Brittany';
    src: url('./assets/fonts/iCielBrittanySignature-Regular.woff2') format('woff2'),
        url('./assets/fonts/iCielBrittanySignature-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  } */

/* @font-face {
  font-family: 'Prata';
  src: url('./assets/fonts/Prata-Regular.woff2') format('woff2'),
      url('./assets/fonts/Prata-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lora';
  src: url('./assets/fonts/Lora-Bold.woff2') format('woff2'),
      url('./assets/fonts/Lora-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
} */

  @font-face {
    font-family: 'Viaoda Libre';
    src: url('./assets/fonts/ViaodaLibre-Regular.woff2') format('woff2'),
        url('./assets/fonts/ViaodaLibre-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    text-rendering: auto;
    box-sizing: border-box;
  }

  html, body {
    overflow: auto;
    font-size: 14px;
    color: ${props => props.theme.colors.black565};

    margin: 0;
    font-family: 'Viaoda Libre', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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