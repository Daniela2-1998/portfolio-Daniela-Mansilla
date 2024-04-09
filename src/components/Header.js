import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';
import pdf from '../CVPDF.pdf';

function Header() {
  return (
    <ContenedorHeader>
      <ContenedorTextoHeader>
        <NombreoHeader>¡Hola, soy Daniela Mansilla!</NombreoHeader>
        <TituloHeader>Desarrolladora web React-Node y Spring.<span>&#160;</span></TituloHeader>

        <BotonCVHeader>
          <a href={pdf} download={"cv - Daniela Mansilla - Desarrolladora web.pdf"}>
            Descargar CV
          </a>
        </BotonCVHeader>

      </ContenedorTextoHeader>
      <figure className='img'></figure>
    </ContenedorHeader>
  )
}

const ContenedorHeader = styled.div`
  height: 350px;
  width: 100%;
  padding-top: 5%;
  padding-left: 8%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(39, 39, 39);
  font-family: monospace; 
  font-size: 17px;
`;

const ContenedorTextoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NombreoHeader = styled.h1`
  margin-top: 3%;
  margin-bottom: 4%;
`;


const TituloHeader = styled.h1`
  width: 90%;
  position: relative; 
  float: left;
  color: #fff;
  font-size: 25px;

  span{
    position:absolute;
    right:0;
    width:0;
    border-left: 5px solid #fff;
    animation: escribir 5s steps(30) infinite alternate;
  }

  
  @keyframes escribir {
    from { width: 100% }
    to { width:0 }
  }
`;

const BotonCVHeader = styled.button`
  width: 30%;
  height: 50px;
  margin-top: 5%;
  border-radius: 20px;
  background-color: rgb(30, 95, 199);
  color: #fff;
  font-weight: bold;
  border: none;


  &:hover{
    background-color: rgb(23, 73, 153);
    font-weight: bolder;
  }

  a{
    color: #fff;
  }
`;

export default Header;
