import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';

function Hobbies() {
    return (
        <ContenedorHobbies>
            <TituloHobbies>Hobbies e intereses</TituloHobbies>

            <ContenedorCardsHobbies>
                <CardsProyects>
                    <figure className='imagen-hobby videojuegos'></figure>
                    <p>Videojuegos</p>
                </CardsProyects>

                <CardsProyects>
                    <figure className='imagen-hobby musica'></figure>
                    <p>Música</p>
                </CardsProyects>

                <CardsProyects>
                    <figure className='imagen-hobby libros'></figure>
                    <p>Libros</p>
                </CardsProyects>

                <CardsProyects>
                    <figure className='imagen-hobby dev'></figure>
                    <p>Programación</p>
                </CardsProyects>

                <CardsProyects>
                    <figure className='imagen-hobby dibujo'></figure>
                    <p>Dibujo</p>
                </CardsProyects>

                <CardsProyects>
                    <figure className='imagen-hobby tvshows'></figure>
                    <p>Series y peliculas</p>
                </CardsProyects>

            </ContenedorCardsHobbies>
        </ContenedorHobbies>
    )
}

const ContenedorHobbies = styled.div`
  height: 800px;
  width: 100%;
  text-align: center;
  font-family: monospace; 

  
  @media (max-width: 700px) {
    height: 1800px;
  }
`;

const TituloHobbies = styled.h1`
  padding-top: 5%;
  font-size: 25px;
`;

const ContenedorCardsHobbies = styled.div`
   width: 60%;
   margin-top: 3%;
   margin-left: 12%;
   justify-content: space-evenly;
   display: grid;
   grid-gap: 0%;
   grid-template-columns: 50% 50% 50%;
   grid-template-rows: fit-content;


   @media (max-width: 800px) {
    width: 80%;
    margin-left: 15%;
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
    margin-left: 20%;
    grid-template-columns: 50%;
  } 
  
  @media (max-width: 650px) {
    width: 80%;
    margin-left: 9%;
  }

  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const CardsProyects = styled.div`
  width: 50%;
  height: 250px;
  margin-top: 7%;
  border: 2px solid #fff;
  border-radius: 20px;
  background-color: rgb(39, 39, 39);
  color: #fff;

  &:hover{
    background-color: rgb(26, 26, 26);
  }

  p{
    margin-top: 5%;
  }


  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 970px) {
    width: 70%;
  }

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 650px) {
    width: 90%;
  }


`;



export default Hobbies;
