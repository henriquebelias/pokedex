import React from 'react';
import PropTypes from 'prop-types';
import GenericButton from './ButtonElements';

const Button = ({ children, onClick, url, gridless }) => (
  <GenericButton
    onClick={ () => onClick(url) }
    gridless={ gridless }
  >
    {children}
  </GenericButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  gridless: PropTypes.bool.isRequired,
};

export default Button;
