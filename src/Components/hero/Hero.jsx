import React, { useRef } from "react";
import styled from "styled-components";
import Projects from '../projects/Projects';
import Certificates from '../certificates/Certificates';
import Contacts2 from '../contact/Contact2';

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3d3d3;
`;

const Hero1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  height: calc(100vh - 10vh);
  background-color: #111;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3.5vw;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 6vw;
    }

    @media (max-width: 480px) {
      font-size: 8vw;
    }
  }

  h1 {
    margin-top: 0vw;
    margin-bottom: 0vw;
    font-size: 14em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.3vw;
    width: 100%;
    text-transform: uppercase;
    text-align: center;

    span {
      background: linear-gradient(to right, #ffc800, #d3d3d3);
      color: transparent;
      -webkit-background-clip: text;
      text-shadow: 0 0 160px #1520bd;
      width: 100%;
      animation: anime 1s infinite alternate;
    }

    &::after {
      content: "";
      position: absolute;
      left: 21%;
      bottom: 26%;
      height: 0.7vh;
      width: 0%;
      background-color: #d3d3d3;
      transition: all ease 1s;

      @media (max-width: 768px) {
        left: 15%;
        bottom: 20%;
      }

      @media (max-width: 480px) {
        display: none;
      }
    }

    &:hover::after {
      width: 60%;

      @media (max-width: 768px) {
        width: 50%;
      }

      @media (max-width: 480px) {
        width: 40%;
      }
    }

    @media (max-width: 768px) {
      font-size: 8em;
    }

    @media (max-width: 480px) {
      font-size: 6em;
    }
  }

  a {
    position: relative;
    font-size: 2em;
    letter-spacing: -0.06vw;
    text-transform: uppercase;
    padding-top: 5vh;
    padding-bottom: 1%;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1.5em;
      padding-top: 3vh;
    }

    @media (max-width: 480px) {
      font-size: 1.2em;
      padding-top: 2vh;
    }
  }

  @keyframes anime {
    100% {
      text-shadow: 0 0 150px blue;
    }
  }

  .vertical-line {
    height: 7vh;
    width: 0.3vw;
    background-color: #d3d3d3;

    @media (max-width: 768px) {
      height: 5vh;
      width: 0.4vw;
    }

    @media (max-width: 480px) {
      height: 4vh;
      width: 0.5vw;
    }
  }
`;

const Hero = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <Hero1>
          <Home>
            <h1>Hi! I'm Priti</h1>
            <h1><span>Web Developer</span></h1>
            <a onClick={scrollToProjects}>See my work</a>
            <div className="vertical-line"></div>
          </Home>
        </Hero1>
      </Container>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Certificates />
      <Contacts2 />
    </>
  );
};

export default Hero;
