import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SVN-Wallows';
    src: url('../../assets/fonts/SVN-Wallows.woff2') format('woff2'),
        url('../../assets/fonts/SVN-Wallows.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url('../../assets/fonts/PlayfairDisplay-Regular.woff2') format('woff2'),
        url('../../assets/fonts/PlayfairDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url('../../assets/fonts/PlayfairDisplay-Medium.woff2') format('woff2'),
        url('../../assets/fonts/PlayfairDisplay-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

  @font-face {
    font-family: 'Playfair Display';
    src: url('../../assets/fonts/PlayfairDisplay-Bold.woff2') format('woff2'),
        url('../../assets/fonts/PlayfairDisplay-Bold.woff') format('woff');
    font-weight: bold;
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
    font-family: 'Playfair Display';
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