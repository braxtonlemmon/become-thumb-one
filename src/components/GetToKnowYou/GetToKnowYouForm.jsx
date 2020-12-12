import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import { Context } from '../../context/GlobalContext';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../shared/Button';

const hop = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;
  h2 {
    text-align: center;
    font-size: ${props => props.theme.fontSizes.three};
    margin-bottom: 20px;
    color: ${props => props.theme.colors.rawr};
    text-shadow: 0 0 5px ${props => props.theme.colors.hey};
  }
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
  gap: 9px;
  border-radius: 8px;
  margin: 15px 5px;
  background: ${props => props.theme.colors.hey};
  color: ${props => props.theme.colors.yo};
  padding: 10px;
  box-shadow: 0 0 3px ${props => props.theme.colors.sup};
  input {
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Thumbs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 10px 0;
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
    outline: 2px dashed ${props => props.theme.colors.sup};
  }

`;

const Image = styled.div`
  width: 100px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  .thumb {
    width: 100%;
  }

`;

const Error = styled.p`
  font-size: 13px;
  animation: ${hop} 750ms ease infinite;
  color: ${props => props.theme.colors.sup};
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
    /* setThumbatar(data.thumbatar) */
    setThumbatar(images[data.thumbatar - 1])
    navigate("/")
  }

  const getMaxAge = () => {
    let date = new Date();
    return date.getFullYear() - 1973;
  }

  return (
    <Wrapper>
      <h2>First, we need to get to know you...</h2>
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
          {errors.sofa && <Error>{errors.sofa.message}</Error>}
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
                max: { value: getMaxAge(), message: 'Too old!'},
              })
            }
          ></input>
          {errors.age && <Error>{errors.age.message}</Error>}
        </Block>


        <Block>
          <h3>Are you lying about your age?</h3>
          <Row>
            <label>
              <input 
                type="radio"
                name="trueAge"
                value="Yes"
                ref={register({
                  required: 'You have to tell us!'
                })}
                />
              Yes
            </label>
            <label>
              <input 
                type="radio"
                name="trueAge"
                value="No"
                ref={register({
                  required: 'You have to tell us!'
                })}
                />
              No
            </label>
          </Row>
          {errors.trueAge && <Error>{errors.trueAge.message}</Error>}
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
                minLength: {value: 5, message: 'Too short!'},
                maxLength: {value: 7, message: 'Too long!'}
              })
            }
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Block>

        <Block>
          <h3>Do you enjoy the occasional deep-fried Twinkie or pickle?</h3>
          <Row>
            <label>
              <input
                type="radio"
                name="enjoyFried"
                value="Yes"
                ref={register({
                  required: 'We really want to know.'
                })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="enjoyFried"
                value="No"
                ref={register({
                  required: 'We really want to know.'
                })}
              />
              No
            </label>
          </Row>
          {errors.enjoyFried && <Error>{errors.enjoyFried.message}</Error>}
        </Block>

        <Block>
          <h3>Choose a thumbatar.</h3>
          <Thumbs>
            <label>
              <input
                type="radio"
                name="thumbatar"
                value={1}
                ref={register({
                  required: 'Please choose a thumbatar.'
                })}
              />
              <Image className="thumbz">
                <Img 
                  className="thumb" 
                  fluid={images[0].node.childImageSharp.fluid}  
                />
              </Image>
            </label>
            <label>
              <input
                type="radio"
                name="thumbatar"
                value={2}
                ref={register({
                  required: 'Please choose a thumbatar.'
                })}
              />
              <Image className="thumbz">
                <Img 
                  className="thumb" 
                  fluid={images[1].node.childImageSharp.fluid}  
                />
              </Image>
  
            </label>
            <label>
              <input
                type="radio"
                name="thumbatar"
                value={3}
                ref={register({
                  required: 'Please choose a thumbatar.'
                })}
              />
              <Image className="thumbz">
                <Img 
                  className="thumb" 
                  fluid={images[2].node.childImageSharp.fluid}  
                />
              </Image>
  
            </label>
            <label>
              <input
                type="radio"
                name="thumbatar"
                value={4}
                ref={register({
                  required: 'Please choose a thumbatar.'
                })}
              />
              <Image className="thumbz">
                <Img 
                  className="thumb" 
                  fluid={images[3].node.childImageSharp.fluid}  
                  />
              </Image>
  
            </label>
          </Thumbs>
          {errors.thumbatar && <Error>{errors.thumbatar.message}</Error>}
        </Block>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

export default GetToKnowYouForm;