import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function FormComponent() {
  return (
    <Wrapper>
      <Form>
        <label>
          Of the following, which is your favorite sofa type?
          <select>
            <option value="futon">Denim Futon</option>
            <option value="banana">White Leather Banana Chair</option>
            <option value="bench">Cast Iron Park Bench</option>
            <option value="sectional">Beige Sectional</option>
          </select>
        </label>

        <label>
          How old are you? (entered age must be between less than someone born in 1973)
          <input type="number" name="age" />
        </label>
        <p>Are you lying about your age?</p>
        <label>
          <input
            type="radio"
            name="trueAge"
            value="No"
            checked={true}
          />
          No
        </label>
        <label>
          <input
            type="radio"
            name="trueAge"
            value="Yes"
          />
          Yes
        </label>
        <p>
          Do you enjoy the occasional deep-fried Twinkie or pickle?
        </p>
        <label>
          <input 
            type="radio"
            name="enjoyFried"
            value="Yes"
            checked={true}
          />
          Yes
        </label>
        <label>
          <input 
            type="radio"
            name="enjoyFried"
            value="No"
          />
          No
        </label>
        <label>
          What is your name? (name must be between 5 and 7 characters)
          <input
            type="text"
            name="thumbName"
          />
        </label>
        

        
      </Form>
    </Wrapper>
  )
}

export default FormComponent;