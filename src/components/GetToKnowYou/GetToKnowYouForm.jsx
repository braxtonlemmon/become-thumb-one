import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Context } from '../../context/GlobalContext';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Wrapper = styled.div`

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 15px 5px;
  .thumbz {
    width: 100px;
  }
  [type=radio] {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  [type=radio] + .thumbz {
    cursor: pointer;
  }
  [type=radio]:checked + .thumbz {
    outline: 2px ridge goldenrod;
    /* box-shadow: 0 0 8px rgba(0,0,0,0.3); */
  }
`;

const Image = styled.div`
  width: 100px;
  max-height: 200px;
  /* position: relative; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  .thumb {
    /* height: 100%; */
    width: 100%;
    object-fit: contain;
  }

`;

function GetToKnowYouForm() {
  const data = useStaticQuery(graphql`
    query Thumbs {
      allFile(filter: {relativeDirectory: {eq: "thumbs" }}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges;
  console.log(images);
  const { setStarted, setName, setThumbatar } = useContext(Context);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: '',
      age: 5,
    }
  })

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    setStarted(true);
    setName(data.name)
    setThumbatar(data.thumbatar)
    navigate("/")
  }

  const getMaxAge = () => {
    let date = new Date();
    return date.getFullYear() - 1973;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <label htmlFor="sofa">
            Of the following, which is your favorite sofa type?
          </label>
          <select
            name="sofa"
            ref={register({
              required: "Select one option"
            })}>
              <option value=""></option>
              <option value="futon">Denim Futon</option>
              <option value="banana">White Leather Banana Chair</option>
              <option value="bench">Cast Iron Park Bench</option>
              <option value="sectional">Beige Sectional</option>
          </select>
        </Block>


        <Block>
          <label htmlFor="age">How old are you? (Age entered must be less than someone born in 1973.)</label>
          <input
            type="number"
            name="age"
            id="age"
            ref={
              register({
                required: 'Age is required',
                max: getMaxAge(),
              })
            }
          />
        </Block>


        <Block>
          <h3>Are you lying about your age?</h3>
          <label>
            <input 
              type="radio"
              name="trueAge"
              value="Yes"
              checked={true}
              ref={register}
            />
            Yes
          </label>
          <label>
            <input 
              type="radio"
              name="trueAge"
              value="No"
              ref={register}
            />
            No
          </label>
        </Block>

        <Block>
          <label htmlFor="name">What is your name? (Name entered must be between 5 and 7 characters.)</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={
              register({ 
                required: 'First name is required',
                minLength: 5,
                maxLength: 7
              })
            }
          />
        </Block>

        <Block>
          <h3>Do you enjoy the occasional deep-fried Twinkie or pickle?</h3>
          <label>
            <input
              type="radio"
              name="enjoyFried"
              value="Yes"
              checked={true}
              ref={register}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="enjoyFried"
              value="No"
              ref={register}
            />
            No
          </label>
        </Block>

        <Block>
          <h3>Choose a thumb avatar.</h3>
          <label>
            <input
              type="radio"
              name="thumbatar"
              value={1}
              ref={register}
            />
            <Img 
              className="thumbz" 
              fluid={images[0].node.childImageSharp.fluid}  
            />
          </label>
          <label>
            <input
              type="radio"
              name="thumbatar"
              value={2}
              ref={register}
            />
            <Img 
              className="thumbz" 
              fluid={images[1].node.childImageSharp.fluid}  
            />

          </label>
          <label>
            <input
              type="radio"
              name="thumbatar"
              value={3}
              ref={register}
            />
            <Img 
              className="thumbz" 
              fluid={images[2].node.childImageSharp.fluid}  
            />

          </label>
          <label>
            <input
              type="radio"
              name="thumbatar"
              value={4}
              ref={register}
            />
            <Img 
              className="thumbz" 
              fluid={images[3].node.childImageSharp.fluid}  
            />

          </label>
        </Block>
       
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  )
}

export default GetToKnowYouForm;