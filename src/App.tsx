import React, { useState } from 'react';

import Login from 'sections/Login';
import Profile from 'sections/Profile';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, -apple-system, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: rgb(24, 50, 73);
    background-color: rgb(242,  249, 251);
    height: 100%;
    padding: 25px 15px;
  }
`;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <GlobalStyle />
      {!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Profile setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default App;
