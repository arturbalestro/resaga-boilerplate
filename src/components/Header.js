import React from "react";
import { StyledHeader } from "./styles/StyledHeader";

const Header = () => (
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
);

export default Header;
