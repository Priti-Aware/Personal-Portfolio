import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Port from "../Assets/portfolio.png";
import Swipe from "../Assets/Swipe.PNG";
import Medibridge from "../Assets/medibridge1.PNG";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ScrollContainer = styled.div`
  font-family: "League Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: auto;
`;

const ProjectsHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #d3d3d3;
  color: #111;
`;

const ProjectsTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 9.5em;
  padding-top: 6em;
  padding-bottom: 2em;
  text-align: left;
  @media (max-width: 480px) {
  padding-left: 1em;
  padding-top: 6em;
  padding-bottom: 3em;
    }
  span {
    display: inline-block;
    font-size: 10.5em;
    font-weight: 600;
    letter-spacing: -0.1vw;
    line-height: 100%;
    text-align: left;
    @media (max-width: 480px) {
      font-size: 5em;
    }
  }
`;

const LatestProjectCollection = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 0.5em;
  width: 100%;
  align-items: center;
  background-color: #111;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 0%;
    }
`;

const ProjectItem = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;
  overflow: hidden;
  height: 85vh;
  width: 100%;
  @media (max-width: 480px) {
    height: 30vh;
  }
  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectBgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(33, 34, 36, 0.6);
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 97%;
    height: 85vh;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
    @media (max-width: 480px) {
      width: 100%;
      height: 30vh;
    }
  }
`;

const ProjectInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  height: 85vh;
  width: 100%;

  gap: 2em;
  align-items: center;
  justify-content:center;
  background: rgba(0, 0, 0, 0.414);
  color: #e8e6e6;
  @media (max-width: 480px) {
    height: 30vh;
    gap:0.5em;
  }
  h1 {
    cursor: pointer;
    font-family: "League Gothic", sans-serif;
    font-size: 7em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.2vw;
    text-transform: uppercase;
    a{
      text-decoration: none;
      color: #e8e6e6;
      cursor: pointer;
    }
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
  h2 {
    font-size: 5em;
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
    a {
      text-decoration: none;
      color: #d3d3d3;
    }
  }
`;

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
  });

  const openModal = (title, imgSrc, description) => {
    setModalContent({ title, imgSrc, description });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ScrollContainer>
      <ProjectsHeroSection>
        <ProjectsTitle>
          <div className="div-hide">
            <span>RECENT</span>
            <br />
            <span>WORKS<br/>3</span>
          </div>
        </ProjectsTitle>
        <LatestProjectCollection>
          <ProjectItem>
            <ProjectBgWrapper>
              <img src={Port} alt="PortFolio" />
            </ProjectBgWrapper>
            <ProjectInfoWrapper>
              <h1><a
                  href="https://priti-aware-portfolio.vercel.app/"
                  target="_blank"
                >PortFolio</a>
              </h1>
              <h2>
                <a
                  href="https://github.com/Priti-Aware/Personal-Portfolio.git"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </h2>
            </ProjectInfoWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectBgWrapper>
              <img src={Swipe} alt="Swipe" />
            </ProjectBgWrapper>

            <ProjectInfoWrapper>
              <h1>Swipe</h1>
              <h2>
                <a
                  href="https://github.com/Priti-Aware/Swipe.git"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </h2>
            </ProjectInfoWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectBgWrapper>
              <img src={Medibridge} alt="MediBridge" />
            </ProjectBgWrapper>
            <ProjectInfoWrapper>
              <h1>MediBridge</h1>
              <h2>
                <a
                  href="https://github.com/Priti-Aware/MediBridge.git"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </h2>
            </ProjectInfoWrapper>
          </ProjectItem>
        </LatestProjectCollection>
      </ProjectsHeroSection>
    </ScrollContainer>
  );
};

export default Projects;
