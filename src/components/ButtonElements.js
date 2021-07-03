import styled from 'styled-components';

const GenericButton = styled.button` background-color: orange;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.8;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  width: ${({ gridless }) => (gridless ? '30%' : '100%')};

  &:hover {
    opacity: 1;
  }
`;

export default GenericButton;
