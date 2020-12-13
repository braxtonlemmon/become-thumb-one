import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(6deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 4px ${props => props.theme.colors.sup};
  height: 48px;
  color: ${props => props.theme.colors.sup};
  background: ${props => props.theme.colors.tada};
  font-family: ${props => props.theme.fonts.galindo};
  font-size: ${props => props.theme.fontSizes.two};
  cursor: pointer;

  &:hover {
    animation: ${wobble} 300ms linear;
  }
`;

export default Button;