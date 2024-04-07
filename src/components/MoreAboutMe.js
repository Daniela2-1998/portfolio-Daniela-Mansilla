import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';


function MoreAboutMe() {
  return (
    <ContenedorPersonality>
      <TituloPersonality>Personalidad y habilidades</TituloPersonality>

      <ContenedorTextoPersonality>
        <p>
            Soy muy creativa, me gusta buscar y analizar diferentes soluciones posibles para hacer 
            frente a un problema. Tengo capacidad analítica, resolutiva y de investigación para poder 
            llegar a cabo este objetivo. 
        </p>
        <p>
            Como profesional, me gusta mantener un estilo moderno, intuitivo y cómodo para el usuario, siguiendo 
            los diseños específicados por el cliente y adaptandolo a sus necesidades para cumplir con las expectativas 
            mientrás brindo un servicio de cálidad, confiable y atractivo.
        </p>
        <p>
            Me llevo muy bien con el trabajo en equipo. Lo mejor de formar parte de un equipo es la posibilidad de 
            aprender de personas con mayor experiencia, poder aportar mi opinión respecto al proyecto así como 
            también poder escuchar la opinión del equipo, la cuál podría proponerme otra perspectiva.
        </p>
        <p>
            No tengo problema en trabajar en otros idiomas ya que mi idioma nativo es el español, pero también 
            tengo un nivel avanzado en inglés y en portugués, por lo que podría trabajar en proyectos que requieran
            conocimientos y uso de los mismos.
        </p>
      </ContenedorTextoPersonality>

    </ContenedorPersonality>
  )
}

const ContenedorPersonality = styled.div`
  height: 500px;
  width: 100%;
  text-align: center;
  font-family: monospace; 


  @media (max-width: 700px) {
    height: 600px;
  }
`;

const TituloPersonality = styled.h1`
  padding-top: 5%;
  font-size: 25px;
`;

const ContenedorTextoPersonality = styled.div`
  width: 70%;
  height: 350px;
  margin-top: 3%;
  margin-left: 15%;
  padding: 2%;
  color: #fff;
  background-color: rgb(39, 39, 39);
  border-radius: 20px;
  text-align: left;
  box-shadow: rgb(39, 39, 39) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  p{
    margin-top: 3%;
  }

  @media (max-width: 900px) {
    height: 400px;
  }

  @media (max-width: 750px) {
    height: 430px;
  }

  @media (max-width: 550px) {
    height: 500px;
  }
`;


export default MoreAboutMe;
