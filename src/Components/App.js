import React from "react";
import { gql} from "apollo-boost";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles"
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer"


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

return (
  <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Routes isLoggedIn={isLoggedIn} />
        </Router>
        <Footer />

      </>
  </ThemeProvider>
  );
}