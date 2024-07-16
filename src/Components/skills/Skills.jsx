import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  width: 100%;
  height: 50em;
  padding-top: 3vh;
  color: #d3d3d3;
  background-color: #111;
  @media (max-width: 480px) {
    height: 90em;
    }
  h1 {
    font-size: 7em;
    font-weight: 500;
    letter-spacing: -0.03vw;
    @media (max-width: 480px) {
      font-size: 4em;
    }
  }
`;

const Table = styled.div`
  display: grid;
  width: 80%;
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
  grid-template-rows: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1px 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-family: 'League Gothic', sans-serif;
    font-size: 2em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.01vw;
    text-transform: uppercase;
  }
`;

const Col = styled.div`
  grid-column-start: span 1;
  grid-row-start: span 1;
  grid-row-end: span 1;
  justify-self: stretch;
  margin-bottom: 1.75em;
  padding-top: 1.75em;
  @media (max-width: 480px) {
    margin-bottom: 0;
    padding-top: 0;
    }
`;

const RBorder = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d3d3d3a2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d3d3d3a2;
`;

const Skills = () => {
  return (
    <Container>
      <h1>SKILLS THAT I HAVE</h1>
      <Table>
        <Col>
          <h1>HTML <i className="ri-html5-fill"></i></h1>
          <BBorder></BBorder>
          <h1>CSS <i className="ri-css3-fill"></i></h1>
          <BBorder></BBorder>
          <h1>Bootstrap <i className="ri-bootstrap-fill"></i></h1>
          <BBorder></BBorder>
          <h1>Canva</h1>
        </Col>
        <RBorder></RBorder>
        <Col>
          <h1>Javascript <i className="ri-javascript-fill"></i></h1>
          <BBorder></BBorder>
          <h1>ReactJS <i className="ri-reactjs-line"></i></h1>
          <BBorder></BBorder>
          <h1>MediaQuery</h1>
          <BBorder></BBorder>
          <h1>Node JS <i className="fa-brands fa-node-js"></i></h1>
        </Col>
        <RBorder></RBorder>
        <Col>
          <h1>Core Java <i className="ri-java-line"></i></h1>
          <BBorder></BBorder>
          <h1>Tailwind CSS <i className="ri-tailwind-css-fill"></i></h1>
          <BBorder></BBorder>
          <h1>MongoDB <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg></h1>
          <BBorder></BBorder>
          <h1>Express JS</h1>
        </Col>
        <RBorder></RBorder>
        <Col>
          <h1>Figma <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg></h1>
          <BBorder></BBorder>
          <h1>GIT <i className="ri-git-merge-fill"></i></h1>
          <BBorder></BBorder>
          <h1>GitHub <i className="ri-github-fill"></i></h1>
          <BBorder></BBorder>
          <h1>Styled Components <i className="fa-brands fa-php"></i></h1>
        </Col>
      </Table>
    </Container>
  );
}

export default Skills;
