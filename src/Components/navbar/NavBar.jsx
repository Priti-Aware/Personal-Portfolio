import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  padding: 1em 0;
  background-color: ${({ isOpen }) => (isOpen ? "#d3d3d3" : "#111")};
  transition: background-color 0.8s ease-in-out;

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10vw;

    @media (max-width: 1200px) {
      margin: 0 5vw;
    }

    @media (max-width: 768px) {
      margin: 0 3vw;
    }

    @media (max-width: 480px) {
      margin: 0 2vw;
      gap:1vw;
    }
  }

  .nav-logo-wrapper {
    font-size: 2em;
    font-weight: bold;
    color: ${({ isOpen }) => (isOpen ? "#111" : "#d3d3d3")};
    text-decoration: none;
    transition: color 0.8s ease-in-out;
    letter-spacing: -0.05em;
    @media (max-width: 480px) {
      font-size: 1.3em;
      letter-spacing: -0.05em;
    }
  }

  .nav-burger-icon {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: transform 0.8s ease-in-out;
    padding-top: 0.5rem;

    @media (max-width: 480px) {
      width: 1.4rem;
      height: 1.4rem;
      gap: 0.5rem;
    }
  }

  .nav-burger-line {
    width: 100%;
    height: 3px;
    background-color: ${({ isOpen }) => (isOpen ? "#111" : "#d3d3d3")};
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out, background-color 0.8s ease-in-out;

    @media (max-width: 480px) {
      height: 2px;
    }
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: ${({ isOpen }) => (isOpen ? "#d3d3d3" : "#111")};
    transition: background-color 0.8s ease-in-out;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    @media (max-width: 480px) {
      height: 92vh;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        display: flex;
        animation: ${slideDown} 0.8s ease-in-out forwards;
      `}
  }

  .nav-link {
    font-family: "League Gothic", sans-serif;
    font-size: 1.5em;
    line-height: 100%;
    font-weight: 500;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    padding: 2rem 0;
    color: ${({ isOpen }) => (isOpen ? "#111" : "#d3d3d3")};
    text-decoration: none;
    transition: color 0.8s ease-in-out;
    width: 100%;
    text-align: center;
    cursor: pointer;

    @media (max-width: 1200px) {
      font-size: 1.3em;
    }

    @media (max-width: 768px) {
      font-size: 1.2em;
      padding: 1.5rem 0;
    }

    @media (max-width: 480px) {
      font-size: 1em;
      padding: 1rem 0;
    }
  }

  .nav-secondary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: 2rem auto;
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .nav-secondary-link {
    font-family: "League Gothic", sans-serif;
    font-size: 1.2em;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: ${({ isOpen }) => (isOpen ? "#111" : "#d3d3d3")};
    text-decoration: none;
    transition: color 0.8s ease-in-out;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 1em;
    }

    @media (max-width: 768px) {
      font-size: 0.9em;
    }

    @media (max-width: 480px) {
      font-size: 0.8em;
    }
  }

  .nav-burger-icon.open .line1 {
    transform: rotate(45deg) translate(5px, 3px);
  }

  .nav-burger-icon.open .line3 {
    transform: rotate(-42deg) translate(5px, -2px);
  }

  .nav-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top:10vh;
    @media (max-width: 768px) {
      padding-top:20vh;
      
    }

    @media (max-width: 480px) {
      padding-top:6vh;
      width: 100%;
    }
  }

  .part1,
  .part2 {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 7rem;
    font-size:7em;

    @media (max-width: 768px) {
      gap: 3rem;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap:0.2rem;
      font-size:4em;
    }
  }

  .part3 {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1px;
    background-color: #111;

    @media (max-width: 480px) {
      margin: 1rem 0;
    }
  }

  .part4 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    padding-top: 2rem;
    font-size:2.5em;
    @media (max-width: 768px) {
      gap: 7rem;
      font-size:5rem;
    }
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.6rem;
      font-size:2rem;
      padding-top: 1rem;
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isOpen, location.pathname]);

  return (
    <Nav isOpen={isOpen}>
      <div className="nav-wrapper">
        <Link className="nav-logo-wrapper" to="/">
          PRITI AWARE
        </Link>
        <div
          className={`nav-burger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="nav-burger-line line1"></div>
          <div className="nav-burger-line line3"></div>
        </div>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <div className="nav-grid">
          <div className="part1">
            <Link className="nav-link" to="/Hero" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="nav-link" to="/Projects" onClick={toggleMenu}>
              Projects
            </Link>
          </div>
          <div className="part2">
            <Link className="nav-link" to="/About" onClick={toggleMenu}>
              About
            </Link>
            <Link className="nav-link" to="/Contact1" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
          <div className="part3" />
          <div className="part4">
            <a
              className="nav-secondary-link"
              href="https://linkedin.com/in/priti-aware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="nav-secondary-link"
              href="https://github.com/Priti-Aware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="nav-secondary-link"
              href="https://www.instagram.com/priti._aware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="nav-secondary-link"
              href="https://app.daily.dev/priti_aware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daily.dev
            </a>
            
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
