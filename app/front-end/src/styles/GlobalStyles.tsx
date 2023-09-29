import { createGlobalStyle } from 'styled-components';

export const GlobalsStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  
  font-size: 16px;
  font-family: 'Poppins', sans-serif;

  text-decoration: none;

  box-sizing: border-box;
}

html {
  background-color: #F1EFEF;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
  display: block;
  align-self: center;
}
`;

