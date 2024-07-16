import React from 'react';
import styled from "styled-components";

const Main =styled.div`
width: 100%;
`;
const Loader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30vh;
  width: 100%;
  height: 100vh;
  background-color: #111;
  color: #d3d3d3;
  align-items: center;
  h1 {
    position: absolute;
    font-size: 4vw;
    line-height: 7%;
    font-weight: 500;
    top:45%;
    left: 50%;
    transform: translate(-50%,-50%);
    letter-spacing: -0.3vw;
    font-style: normal;
    text-align: start;
    span{
    background: linear-gradient(to right,red,blue);
    color: transparent;
    -webkit-background-clip:text;
    text-shadow: 0 0 150px red;
    animation: anime 1s infinite alternate;
    }
    @keyframes anime {
    100%{
      text-shadow: 0 0 150px blue;
    }
  }
  }
  `
 const TopHeading=styled.div`
 color:#d3d3d3;
 line-height:0%;
 position: absolute;
 top:5%;
 text-transform: uppercase;
 font-size: 11px;
 font-weight: 300;
 `;
  const SmallLoad =styled.div`
  position: absolute;
  top: 100%;
  height: 0vh;
  width: 100%;
  background: linear-gradient(to right,red,blue);
  `;

const Load = () => {
  return (
    <Main>
    <Loader>
        <TopHeading>
            <h5 className='reveal'>Design Portfolio</h5>
            <h5 className='reveal'>&copy; 2024</h5>
        </TopHeading>
          <h1 className="reveal"><span>Priti</span> Aware is a</h1>
    </Loader>
    <SmallLoad></SmallLoad>
    </Main>
    
  );
}

export default Load;
