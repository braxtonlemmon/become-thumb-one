import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.dark};
  width: 100%;
  height: 100%;
  p {
    padding-bottom: 15px;
    text-align: center;
    line-height: ${props => props.theme.fontSizes.two};
  }
  button {
    margin-bottom: 15px;
  }
`;