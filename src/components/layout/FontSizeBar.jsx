import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  left: 10px;
  bottom: 10px;
  #one {
    font-size: ${props => props.theme.fontSizes.one};
  }
  #two {
    font-size: ${props => props.theme.fontSizes.two};
  }
  #three {
    font-size: ${props => props.theme.fontSizes.three};
  }
  #four {
    font-size: ${props => props.theme.fontSizes.four};
  }
  #five {
    font-size: ${props => props.theme.fontSizes.five};
  }
  #six {
    font-size: ${props => props.theme.fontSizes.six};
  }
  #seven {
    font-size: ${props => props.theme.fontSizes.seven};
  }
`;

function FontSizeBar() {
  return (
    <Wrapper>
      <p id="one">One</p>
      <p id="twoe">Two</p>
      <p id="three">Three</p>
      <p id="four">Four</p>
      <p id="five">Five</p>
      <p id="six">Six</p>
      <p id="seven">Seven</p>
    </Wrapper>
  )
}

export default FontSizeBar;