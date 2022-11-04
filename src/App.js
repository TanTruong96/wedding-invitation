// import WeddingPage from './pages/Wedding';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import "swiper/css/bundle";
import routes from './routes';
import GlobalStyle from './styles/global';
import { theme } from './styles/themes';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <route.component
                    {...props}
                    {...route.props}
                    name={route.name}
                  />
                </ThemeProvider>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
