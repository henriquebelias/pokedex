import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPokemonTypes, getPokemonById } from '../services/api';

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const types = await getPokemonTypes();
      setPokemonTypes(types);
    };
    fetchData();
  }, []);

  async function fetchPokemon(url) {
    const pokemonObj = await getPokemonById(url);
    setPokemon(pokemonObj);
  }

  const contextValue = {
    pokemonTypes,
    pokemon,
    fetchPokemon,
  };

  return (
    <PokemonContext.Provider value={ contextValue }>
      { children }
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  PokemonContext,
  PokemonProvider as Provider,
};
