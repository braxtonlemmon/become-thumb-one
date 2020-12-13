import styled from 'styled-components';

const CloseButton = styled.button`
  background: none;
  border: none;
  
  cursor: pointer;
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.three};
  font-weight: bolder;
  text-shadow: 0 0 4px ${props => props.theme.colors.sup};
  display: flex;
  align-items: flex-start;
  &:hover {
    color: ${props => props.theme.colors.hey};
  }
`;

export default CloseButton;