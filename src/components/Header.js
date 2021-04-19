import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './HeaderElements';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1> Pokédex </h1>
      </div>
      <nav>
        <Link to="/pokedex">Home</Link>
        <Link to="/pokedex/about">About</Link>
        {/* <Link to="/favorites">Favorites</Link> */}
      </nav>
    </HeaderContainer>
  )
}

export default Header;
