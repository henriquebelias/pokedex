import React from 'react';
import PropTypes from 'prop-types';
import ButtonsPanelContainer from './ButtonsPanelElements';
import Button from './Button';

function ButtonsPanel({ pokemonTypes, fetchPokemons }) {
  return (
    <ButtonsPanelContainer>
      {pokemonTypes.map(({ name, url }) => (
        <Button
          key={ name }
          url={ url }
          onClick={ fetchPokemons }
        >
          { name }
        </Button>
      ))}
    </ButtonsPanelContainer>
  );
}

ButtonsPanel.propTypes = {
  pokemonTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchPokemons: PropTypes.func.isRequired,
};

export default ButtonsPanel;
