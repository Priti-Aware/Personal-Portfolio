import React from "react";
import styled from "styled-components";
import Photo from "../Assets/photo.png";
import Skills from '../skills/Skills';
import Certficates from '../certificates/Certificates';
import Education from "../education/Education";
import Contact2 from "../contact/Contact2";

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3d3d3;
  background-color: #111;
  padding:20vh 0em 0em 0em;
  @media (max-width: 480px) {
    padding-top: 13vh;
    height: 120vh;
    }
`;

const Photoshop = styled.div`
img {
    z-index: 2;
    height: 500px;
    width: 300px;
    @media (max-width: 480px) {
      height: 220px;
      width: 150px;
    }
  }
`;

const Part2 = styled.div`
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0em 10em 0em 14em;
  @media (max-width: 480px) {
    padding:0.5em 1em 0em 1em;
    text-align: center;
    flex-direction: column;
    }

  h1 {
    font-size: 6em;
    text-align: left;
    padding-left: 11.5vw;
    margin-bottom:0%;
    @media (max-width: 480px) {
      font-size: 3em;
      text-align: center;
      line-height: 100%;
      padding-left:5vw;
    }
  }
  h2 {
    font-size:1.8em;
    font-weight: normal;
    padding-left: 11.5vw;
    line-height: 100%;
    @media (max-width: 480px) {
      font-size: 1.6em;
      padding-left: 9.5vw;
    }
  }
  input{
  padding: 15px;
  border-radius: 30px;
  text-transform:uppercase;
  background:transparent;
  font-weight:bold;
  font-size:1em;
  border:1px solid #d3d3d3 ;
  color:#d3d3d3;
  margin-left: 11.5vw;
  margin-top: 4vh;
  text-align: none;
  cursor: pointer;
  &:hover{
  border:1px solid #d3d3d3 ;
  color:#111;
  background-color: #d3d3d3;
  }
  @media (max-width: 480px) {
    text-align: justify;
    margin-left: 9vw;
    font-size:0.7em;
    }
}
`;

const About1 = styled.div`
margin-bottom: 7%;
text-align: left;
@media (max-width: 480px) {
  text-align: center;
    }
h2{
  text-align: justify;
  @media (max-width: 480px) {
    margin-right: 5vw;
    }
}
`;



const handleResumeDownload = () => {
  window.open('/Priti_Aware_Resume.pdf', '_blank');
};

const About = () => {
  return (
    <>
    <Container>
    
      <Part2>
      <Photoshop><img src={Photo} alt="" /></Photoshop>
        <About1>
          <h1>A LITTLE BIT ABOUT ME</h1>
          <h2>
          I'm an aspiring web developer skilled in HTML, CSS, JavaScript, React-JS. I create intuitive and visually appealing websites, following industry best practices. I'm eager to use my technical skills and collaborate with experienced teams to deliver outstanding digital solutions. Committed to continuous learning and staying updated on new technologies, I'm ready to make valuable contributions to web development.
          </h2>
          <input type="button" value="Get Resume" onClick={handleResumeDownload}></input>
        </About1>
      </Part2>
    </Container>
    <Skills></Skills>
    <Certficates></Certficates>
    <Education></Education>
    <Contact2></Contact2>
    </>
  );
};

export default About;
