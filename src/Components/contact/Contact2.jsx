import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  height: 40em;
  width: 100%;
  padding-top: 5em;
  background-color: #d3d3d3;
  color: #111;
  @media (max-width: 480px) {
    padding-top: 5em;
    }
`;

const BTop = styled.div`
  display: flex;
  gap: 27em;
  @media (max-width: 480px) {
      flex-direction: column;
      gap: 0em;
    }
`;

const BLeft = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.5em;
  h1 {
    font-size:8em;
    text-align: left;
    letter-spacing: -0.01vw;
    line-height: 100%;
    margin-top: 1%;
    @media (max-width: 480px) {
      font-size: 5em;
      margin-top: 3%;
       }
  }
  h2 {
    text-align: left;
    font-size: 2em;
    margin-bottom: 0%;
  }
`;

const BRight = styled.div`
  text-align: right;
  h3 {
    font-weight: normal;
    font-size: 2em;
    @media (max-width: 480px) {
      text-align: left;
      font-size: 1.5em;
    }
  }
`;

const Part = styled.div`
  height:0.1em;
  width: 80%;
  background-color: #111;
  @media (max-width: 480px) {
    width: 92%;
    }
`;

const BBottom = styled.div`
  display: flex;
  gap: 51.5em;
  @media (max-width: 480px) {
    flex-direction: column;
    gap:1em;
    }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5em;
  @media (max-width: 480px) {
    flex-direction: row;
    padding-top: 2em;
    }
  h2{
    font-size: 2em;
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
  button {
    padding: 1em;
    border-radius: 50px;
    text-transform: uppercase;
    background: transparent;
    font-weight: bold;
    font-size: 1em;
    background-color: #d3d3d3;
    color: #111;
    cursor: pointer;
    @media (max-width: 480px) {
    padding: 0.5em;
    font-size: 0.7em;
    }
    &:hover {
      background-color: #111;
      color: #d3d3d3;
    }
  }
 

`;

const BBRight = styled.div`
  display: flex;
  gap: 3.8em;
  @media (max-width: 480px) {
    gap: 9em;
    }
`;

const Sitemap = styled.div`
  padding-top: 0.5em;
  display: flex;
  flex-direction: column;
  line-height: 0.2em;
  font-size: 1.5em;
  @media (max-width: 480px) {
    font-size: 1em;
    line-height: 0em;
    }
  a {
    text-align: left;
    font-weight: normal;
    text-decoration: none;
    color: #111;
  }
`;

const Social = styled.div`
  padding-top: 0.5em;
  display: flex;
  flex-direction: column;
  line-height: 0.2em;
  font-size: 1.5em;
  @media (max-width: 480px) {
    font-size: 1em;
    line-height: 0em;
    }
  a {
    text-align: left;
    font-weight: normal;
    text-decoration: none;
    color: #111;
  }
`;

const Contact2 = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes (path changes)
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container id="contact-container">
      <BTop>
        <BLeft>
          <h2>READY TO WORK TOGETHER ?</h2>
          <h1>DROP ME A LINE</h1>
        </BLeft>
        <BRight>
          <h3>AVAILABLE FOR<br />
            NEW PROJECTS<br />
            FROM MARCH 2025
          </h3>
        </BRight>
      </BTop>
      <Part></Part>
      <BBottom>
        <Btn>
          <h2>PRITI AWARE</h2>
          <button onClick={scrollToTop}>Back to top</button>
        </Btn>
        <BBRight>
          <Sitemap>
            <h3>SITEMAP</h3>
            <CustomLink to="/Hero">HOME</CustomLink>
            <CustomLink to="/About">ABOUT</CustomLink>
            <CustomLink to="/Projects">Projects</CustomLink>
            <CustomLink to="/Contact1">CONTACT</CustomLink>
          </Sitemap>
          <Social>
            <h3>SOCIAL</h3>
            <h3><a href="https://github.com/Priti-Aware/" target='_blank'>GITHUB</a></h3>
            <h3><a href="https://linkedin.com/in/priti-aware/" target='_blank'>LINKEDIN</a></h3>
            <h3><a href="https://www.instagram.com/priti._aware/" target='_blank'>INSTAGRAM</a></h3>
            <h3><a href="https://app.daily.dev/priti_aware/" target='_blank'>Daily.dev</a></h3>
          </Social>
        </BBRight>
      </BBottom>
      <Part></Part>
    </Container>
  );
};

function CustomLink({ to, children, ...props }) {
  const path = useLocation().pathname;
  return (
    <h3 className={path === to ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </h3>
  );
}

export default Contact2;
