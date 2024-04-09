import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';

function Contact() {

  const irALinkedin = () => {
    window.open('https://www.linkedin.com/in/daniela-mansilla-javadev/');
  }

  const irAGitHub = () => {
    window.open('https://github.com/Daniela2-1998');
  }



  return (
    <ContenedorContact>
      <TituloContact>Contacto</TituloContact>

      <ContenedoresLinksContact>

        <BotonesContact onClick={irALinkedin}>
          <figure className='imagen-contact linkedin'></figure>
        </BotonesContact>

        <BotonesContact onClick={() => window.location = 'mailto:danimansilla27@gmail.com'}>
          <figure className='imagen-contact mail'></figure>
          <a href="mailto:danimansilla27@gmail.com?body="></a>
        </BotonesContact>

        <BotonesContact onClick={irAGitHub}>
          <figure className='imagen-contact github'></figure>
        </BotonesContact>

      </ContenedoresLinksContact>
    </ContenedorContact>
  )
}

const ContenedorContact = styled.div`
  height: 300px;
  width: 100%;
  text-align: center;
  font-family: monospace; 


  @media (max-width: 550px) {
    height: 550px;
  }
`;

const TituloContact = styled.h1`
  padding-top: 5%;
  font-size: 25px;
`;

const ContenedoresLinksContact = styled.div`
  width: 60%;
  height: 200px;
  margin-top: 3%;
  margin-left: 27%;
  display: flex;
  justify-content: space-evenly;


  @media (max-width: 700px) {
    width: 70%;
    margin-top: 5%;
    margin-left: 20%;
  }

  @media (max-width: 550px) {
    width: 60%;
    margin-left: 37%;
    flex-direction: column;
  }
`;

const BotonesContact = styled.button`
  width: 35%;
  height: 100px;
  background-color: transparent;
  border: none;

  &:hover{
    width: 40%;
    height: 120px;
    cursor: pointer;
  }


  @media (max-width: 550px) {
    margin-bottom: 15%;
  }
`;


export default Contact;