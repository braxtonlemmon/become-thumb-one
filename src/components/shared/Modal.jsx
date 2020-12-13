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
  box-shadow: 0 0 9px rgba(0,0,0,0.3);
  margin-top: 105px;
  padding: 35px 15px;
  background: ${props => props.theme.colors.rawr};
  color: ${props => props.theme.colors.tada};
  width: 90%;
  max-width: 700px;
  height: 70%;
  max-height: 900px;
  position: relative;
  overflow: auto;
  p {
    margin-bottom: 30px;
    text-align: center;
    line-height: ${props => props.theme.fontSizes.two};
  }
`;