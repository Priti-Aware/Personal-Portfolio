import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
  font-family: 'League Gothic', sans-serif;
  display: flex;
  text-transform: uppercase;
  width: 100%;
  height: 40em;
  background-color: #111;
  color: #d3d3d3;
  padding-top: 0em;
  @media (max-width: 480px) {
    padding-top: 2em;
    height: 55em;
  }
`;

const Content=styled.div`
  display: flex;
  gap: 15%;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2%;
  }
`;

const Part1=styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 7em;
    font-weight: 500;
    letter-spacing: -0.03vw;
    text-align: left;
    line-height: 100%;
    padding-left:1.4em;
    @media (max-width: 480px) {
      font-size: 4em;
      padding-left:0.4em;
    }
    span {
      padding-left:0.5em;
      opacity: 0.18;
      font-size: 3em;
      @media (max-width: 480px) {
        font-size: 3em;
        padding-left:0.5em;
      }
    }
  }
`;

const Training=styled.div`
  width: 50em;
  padding-top: 5em;
  @media (max-width: 480px) {
    font-size: 1em;
    padding-top: 0em;
    width: 100%;
  }
  .listItems {
    display: flex;
    flex-direction: column; /* Change to column for better stacking on mobile */
    gap: 1em; /* Adjust gap for mobile */
    @media (max-width: 480px) {
      padding-left: 2em;
    }
  }
  h3 {
    font-size: 1.8em;
    text-align: left;
    text-transform: none;
    font-weight: 500;
    @media (max-width: 480px) {
      font-size: 1.8em; /* Reduce font size for mobile */
      text-align: center;
    }
  }
  .listItem {
    display: flex;
    gap: 11em;
    @media (max-width: 480px) {
      gap: 0.5em; 
    }
  }
`;

const Part=styled.div`
  background-color: #d3d3d3;
  transform-origin: 0% 50%;
  width: 85%;
  height: 1px;
  @media (max-width: 480px) {
    width: 100%;
    }
`;

const Certificates = () => {
  return (
    <Container>
      <Content>
        <Part1>
          <h1>Trainings <br /> And <br />Certifications<br/><span> 5</span></h1>
        </Part1>
        <Training>      
          <div className="listItems">
            <div className="ListItemContent">
              <div className="listItem">
                <h3>Web Design and Web Development</h3>
                <h3>2021</h3>
              </div>
              <Part />
              <div className="listItem">
                <h3>Android Application Development</h3>
                <h3>2022</h3>
              </div>
              <Part />
              <div className="listItem">
                <h3>Front End Web Development</h3>
                <h3>2024</h3>
              </div>
              <Part />
              <div className="listItem">
                <h3>Amazon Web Services Training</h3>
                <h3>2024</h3>
              </div>
              <Part />
              <div className="listItem">
                <h3>Fundamentals of Digital Marketing</h3>
                <h3>2024</h3>
              </div>        
            </div>
          </div>
        </Training>
      </Content>
    </Container>
  );
}

export default Certificates;
