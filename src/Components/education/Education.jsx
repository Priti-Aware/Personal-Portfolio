import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 48em;
  background-color: #111;
  color: #d3d3d3;
  padding: 2em 0em;
  overflow-x: hidden; /* Prevent horizontal overflow */
  @media (max-width: 480px) {
    height: 90em;
    padding: 0;
  }
  h1 {
    font-size: 7em;
    font-weight: 500;
    letter-spacing: -0.03vw;
    @media (max-width: 480px) {
      font-size: 5em;
    }
  }
`;

const Cardwrapper = styled.div`
  cursor: auto;
  width: 100%;
  max-width: 1200px; /* Set a maximum width */
  padding: 0em 2em;
  @media (max-width: 480px) {
    max-width: 330px;
  }
`;

const Educationgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2em;
  width: 100%;
  @media (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 0;
    padding: 0;
  }
`;

const Educationcard = styled.div`
  overflow: hidden;
  min-height: 20em;
  padding: 0em 0.5em 0em 1.5em;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  background-color: #111;
  transition: transform 0.3s, background-color 0.3s;
  h3 {
    word-spacing: 0.8vw;
  }
  &:hover {
    background-color: ${props => props.hoverColor};
    transform: translateY(-2em);
    @media (max-width: 480px) {
      transform: none;
    }
  }
`;

const Cardheader = styled.div`
  h5 {
    font-size: 2em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.1vw;
    text-transform: uppercase;
    margin-bottom: 0;
    text-align: left;
  }
  h3 {
    margin-top: 0;
    font-size: 5em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.25vw;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 2%;
  }
  @media (max-width: 480px) {
    h5 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 4em;
    }
  }
`;

const Cardcontent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.1em;
  text-align: left;
  h1 {
    font-size: 2em;
    margin-bottom: 0%;
    margin-top: 0;
  }
  h2 {
    font-size: 2em;
    margin-top: 0%;
  }
  h4 {
    font-size: 2em;
    margin-top: 0;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 2em;
    }
    h2, h4 {
      font-size: 1.5em;
    }
  }
`;

const Education = () => {
  return (
    <Container>
      <h1>My Education</h1>
      <Cardwrapper>
        <Educationgrid>
          <Educationcard hoverColor="#4d9f78">
            <Cardheader>
              <h5>01.</h5>
              <h3>High School</h3>
            </Cardheader>
            <Cardcontent>
              <h1>New English School, Kherwadi, Nashik</h1>
              <h1>Completed, May 2019</h1>
              <h2>SSC 88%</h2>
            </Cardcontent>
          </Educationcard>
          <Educationcard hoverColor="#5595a3">
            <Cardheader>
              <h5>02.</h5>
              <h3>Diploma</h3>
            </Cardheader>
            <Cardcontent>
              <h1>K K Wagh Polytechnic, Nashik</h1>
              <h1>Computer Technology</h1>
              <h1>Completed, July 2022</h1>
              <h2>MSBTE 92.63%</h2>
            </Cardcontent>
          </Educationcard>
          <Educationcard hoverColor="#bca13e">
            <Cardheader>
              <h5>03.</h5>
              <h3>Engineering</h3>
            </Cardheader>
            <Cardcontent>
              <h1>K K Wagh Institute of Engineering Education and Research, Nashik</h1>
              <h1>Computer Engineering</h1>
              <h1>Pursuing</h1>
              <h2>SPPU</h2>
            </Cardcontent>
          </Educationcard>
        </Educationgrid>
      </Cardwrapper>
    </Container>
  );
}

export default Education;
