import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Contact2 from "../contact/Contact2";
import emailjs from 'emailjs-com';

const Container = styled.div`
  font-family: 'League Gothic', sans-serif;
  background-color: #111;
  display: flex;
  flex-direction: column;
  color: #d3d3d3;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 480px) {
    padding-top: 0%;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  height: 100vh;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  width: 30%;
  align-items: center;
  padding-top: 5vh;
  justify-content: center;
  @media (max-width: 480px) {
    width: 100%;
    padding-top: 8vh;
  }

  h1 {
    font-size: 9em;
    animation: slideInUp 1s ease-out forwards;
    @media (max-width: 480px) {
      font-size: 3em;
    }
  }

  h4 {
    margin-top: 5vh;
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 1.5vw;
    animation: slideInUp 1s ease-out forwards;
    @media (max-width: 480px) {
      font-size: 1em;
      margin-top: 2vh;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
 
  @media (max-width: 480px) {
    width: 100%;
  }

  form {
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: center;
    font-weight: bold;
    gap: 2vh;
    @media (max-width: 480px) {
      padding-top: 2.5em;
    }
    button {
      width: 6em;
      padding: 1em;
      text-align: center;
      border-radius: 40px;
      background-color: #111;
      border: 1px solid #d3d3d3;
      color: #d3d3d3;
      font-weight: bold;
      font-size: 1em;
      @media (max-width: 480px) {
        margin-top: 0.5em;
        padding: 0.8em;
      }
      &:hover {
        background-color: #d3d3d3;
        color: #111;
      }
    }
  }
`;

const Input = styled.div`
  text-align: left;
  font-size: 2em;
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
  input {
    margin-top: 1em;
    font-size: 0.5em;
    padding: 1.5vh;
    width: 15em;
    background: transparent;
    border: 1px solid #d3d3d3;
    color: #d3d3d3;
    @media (max-width: 480px) {
      font-size: 0.5em;
      padding: 1em;
      width: 11em;
      margin-top: 2vw;
    }
  }
`;

const Message = styled.div`
  padding-top: 0.5em;
  text-align: left;
  font-size: 2vw;
  @media (max-width: 480px) {
    font-size: 1.5em;
    padding-top: 1em;
  }
  textarea {
    margin-top: 1em;
    padding: 1em;
    letter-spacing: -0.05em;
    font-size: 0.6em;
    height: 8em;
    width: 29em;
    background: transparent;
    border: 1px solid #d3d3d3;
    font-weight: bold;
    color: #d3d3d3;
    @media (max-width: 480px) {
      padding: 2em;
      font-size: 0.5em;
      width: 30em;
      height: 7em;
    }
  }
`;

const Top1 = styled.div`
  display: flex;
  gap: 2vw;
  @media (max-width: 480px) {
    gap: 4vw;
  }
`;

const Contact1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g4edn1z', 'template_8gweyax', form.current, {
      publicKey: 'n2NkwYXfp5-zsJruu',
    }).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <>
      <Container>
        <Top>
          <Left>
            <h1>Let's get in touch</h1>
            <h4>* AVAILABLE FOR NEW PROJECTS FROM MARCH 2025</h4>
          </Left>
          <Right>
            <form ref={form} onSubmit={sendEmail}>
              <Top1>
                <Input>
                  <label htmlFor="fullName">FULL NAME</label><br />
                  <input
                    type="text"
                    id="fullName"
                    name="from_name"
                    placeholder="Enter Your Name"
                    required
                  />
                </Input>
                <Input>
                  <label htmlFor="email">Email</label><br />
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="Enter Your Email"
                    required
                  />
                </Input>
              </Top1>
              <Message>
                <label htmlFor="message">Message</label><br />
                <textarea
                  id="message"
                  name="message" 
                  placeholder="Enter Your Message Here...."
                  required
                ></textarea>
              </Message>
              <button type="submit">SEND</button>
            </form>
          </Right>
        </Top>
      </Container>
      <Contact2 />
    </>
  );
}

export default Contact1;
