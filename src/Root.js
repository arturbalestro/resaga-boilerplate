import React from "react";
import { hot } from "react-hot-loader/root";
import { StyledRoot } from "./styles/StyledRoot";
import { StyledHeader } from "./styles/StyledHeader";
import { StyledFooter } from "./styles/StyledFooter";

//TODO: Import components. Not resolving for some reason
//import Header from "./components/Header";
//import Footer from "./components/Footer";

function Root() {
  return (
    <StyledRoot>
      <StyledHeader>
        <h1>Resaga</h1>
        <h3>A simple boilerplate that contains:</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Webpack</li>
          <li>Styled Components</li>
        </ul>
        <p>Use it to fit your application needs!</p>
      </StyledHeader>
      <StyledFooter>
        <p>
          <span>Powered by </span>
          <a href="github.com/arturbalestro" target="_blank">
            arturbalestro
          </a>
        </p>
      </StyledFooter>
    </StyledRoot>
  );
}

export default hot(Root);
