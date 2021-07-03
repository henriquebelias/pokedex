import styled from 'styled-components';

const HeaderContainer = styled.header` text-align: center;

  div {
    background: red;
    box-shadow: 2px 5px 5px gray;
    color: white;
    height: 70px;
    margin-bottom: 15px;
    padding: 15px;
    text-align: center;
  }

  h1 {
    text-shadow: 2px 5px 5px gray;
  }

  nav {
    margin: 1em;
  }

  a {
    margin: 0 1em;
    opacity: 0.7;
    text-decoration: none;

    &:link , &:visited , &:hover , &:active {
      color: black;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default HeaderContainer;
