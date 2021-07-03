import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonsContainer, PokemonBox } from './PokedexElements';
import Button from './Button';

function Pokedex({ pokemons: { pokemon } }) {
  const { fetchPokemon } = useContext(PokemonContext);

  if (!pokemon) return <p>Selecione o Tipo</p>;
  return (
    <>
      <p>Pokémons</p>
      <PokemonsContainer>
        {pokemon.map(({ pokemon: { name, url } }) => (
          <PokemonBox key={ name }>
            <p>{name}</p>
            <Link to="/pokedex/pokemon/details">
              <Button url={ url } onClick={ fetchPokemon }>Detalhes</Button>
            </Link>
          </PokemonBox>
        ))}
      </PokemonsContainer>
    </>
  );
}

Pokedex.propTypes = {
  pokemons: PropTypes.shape({
    pokemon: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Pokedex;
