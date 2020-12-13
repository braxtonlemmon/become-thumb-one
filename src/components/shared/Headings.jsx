import styled from 'styled-components';

export const PageTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.four};
  margin-bottom: 20px;
  color: ${props => props.theme.colors.yo};
  text-shadow: 0 0 5px ${props => props.theme.colors.hey};
`;