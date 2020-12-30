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
  padding-bottom: 30px;
  h1 {
    text-align: center;
    font-size: ${props => props.theme.fontSizes.three};
    margin-bottom: 20px;
    color: ${props => props.theme.colors.sup};
    /* text-shadow: 0 0 5px ${props => props.theme.colors.hey}; */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  align-items: flex-start;
  margin-bottom: 50px;
  margin: 0 auto 50px auto;
  /* border: 1px solid black; */
  width: min-content;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9px;
  border-radius: 8px;
  margin: 15px 0 20px 0;
  background: ${props => props.theme.colors.hey};
  background: none;
  color: ${props => props.theme.colors.rawr};
  padding: 10px;
  input {
    text-align: center;
  }
  max-width: 950px;
  width: 100%;
  @media (min-width: 450px) {
    align-items: flex-start;
  }
`;

const BlockRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .question-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    input {
      text-align: center;
    }
    label {
      margin-bottom: 20px;
    }
    @media (min-width: 450px) {
      align-items: flex-start;
    }
  }
  @media (min-width: 450px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid black;
  width: 45px;
  height: 45px;
  font-size: ${props => props.theme.fontSizes.three};
  margin-right: 20px;
  margin-bottom: 15px;
`;

const RadioSection = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 450px) {
    align-items: flex-start;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
  & > * {
    margin-right: 20px;
  }
`;

const Thumbs = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /* [type=radio] {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  } */
  [type=radio] + .thumbz {
    cursor: pointer;
  }
  [type=radio]:checked + .thumbz {
    outline: 2px dashed ${props => props.theme.colors.sup};
  }
  @media (min-width: 760px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
  }
  .thumb-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 100px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  .thumb {
    width: 100%;
  }

`;

const Error = styled.p`
  font-size: 13px;
  animation: ${hop} 750ms ease infinite;
  color: ${props => props.theme.colors.sup};
`;

const SubmitButton = styled(Button)`
  margin: 0 auto;
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
      thumbatar: 1,
      trueAge: 'Yes',
      enjoyFried: 'Yes'
    }
  })

  const capitalize = (text) => {
    return `${text[0].toUpperCase()}${text.substr(1, text.length)}`;
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    setStarted(true);
    setName(capitalize(data.name));
    /* setThumbatar(data.thumbatar) */
    setThumbatar(images[data.thumbatar - 1])
    navigate("/")
  }

  return (
    <Wrapper>
      <h1>First, we need to get to know you...</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <BlockRow>
            <Num>1</Num>
            <div className="question-content">
              <label htmlFor="sofa">
                Of the following, which is your favorite sofa type?
              </label>
              <select
                name="sofa"
                id="sofa"
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
            </div>
          </BlockRow>
        </Block>


        <Block>
          <BlockRow>
            <Num>2</Num>
            <div className="question-content">
              <label htmlFor="age">How old are you? (Age can be even or odd)</label>
              <input
                type="number"
                name="age"
                id="age"
                ref={
                  register({
                    required: 'Age is required',
                    pattern: { value: /[0-9]+/, message: 'Must be a number!'},
                  })
                }
              ></input>
              {errors.age && <Error>{errors.age.message}</Error>}
            </div>
          </BlockRow>
        </Block>


        <Block>
          <BlockRow>
            <Num>3</Num>
            <div className="question-content">
              <RadioSection>
                <legend>Are you lying about your age?</legend>
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
              </RadioSection>
              {errors.trueAge && <Error>{errors.trueAge.message}</Error>}
            </div>
          </BlockRow>
        </Block>

        <Block>
          <BlockRow>
            <Num>4</Num>
            <div className="question-content">
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
            </div>
          </BlockRow>
        </Block>

        <Block>
          <BlockRow>
            <Num>5</Num>
            <div className="question-content">
              <RadioSection>
              <legend>Do you enjoy the occasional deep-fried Twinkie or pickle?</legend>
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
              </RadioSection>
              {errors.enjoyFried && <Error>{errors.enjoyFried.message}</Error>}
            </div>
          </BlockRow>
        </Block>

        <Block>
          <BlockRow>
            <Num>6</Num>
            <div className="question-content">
              <RadioSection>
                <legend>Choose your thumbatar!</legend>
                <Thumbs>
                  <label className="thumb-label">
                    <Image 
                      className="thumbz" 
                    >
                      <Img 
                        className="thumb" 
                        fluid={images[0].node.childImageSharp.fluid} 
                        alt="Thumb with long hair and big lips drawn on." 
                      />
                    </Image>
                    <input
                      type="radio"
                      name="thumbatar"
                      value={1}
                      ref={register({
                        required: 'Please choose a thumbatar.'
                      })}
                    />
                  </label>
                  <label className="thumb-label">
                    <Image 
                      className="thumbz"
                    >
                      <Img 
                        className="thumb" 
                        fluid={images[1].node.childImageSharp.fluid} 
                        alt="Thumb with bangs, beauty mark, and a smile drawn on." 
                      />
                    </Image>
                    <input
                      type="radio"
                      name="thumbatar"
                      value={2}
                      ref={register({
                        required: 'Please choose a thumbatar.'
                      })}
                    />
        
                  </label>
                  <label className="thumb-label">
                    <Image 
                      className="thumbz"
                    >
                      <Img 
                        className="thumb" 
                        fluid={images[2].node.childImageSharp.fluid}
                        alt="Thumb with glasses and surprised expression drawn on."  
                      />
                    </Image>
                    <input
                      type="radio"
                      name="thumbatar"
                      value={3}
                      ref={register({
                        required: 'Please choose a thumbatar.'
                      })}
                    />
        
                  </label>
                  <label className="thumb-label">
                    <Image 
                      className="thumbz"
                    >
                      <Img 
                        className="thumb" 
                        fluid={images[3].node.childImageSharp.fluid}  
                        alt="Thumb with unibrow and angry expression drawn on."
                        />
                    </Image>
                    <input
                      type="radio"
                      name="thumbatar"
                      value={4}
                      ref={register({
                        required: 'Please choose a thumbatar.'
                      })}
                    />
        
                  </label>
                </Thumbs>
              </RadioSection>
              {errors.thumbatar && <Error>{errors.thumbatar.message}</Error>}
            </div>
          </BlockRow>
        </Block>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default GetToKnowYouForm;