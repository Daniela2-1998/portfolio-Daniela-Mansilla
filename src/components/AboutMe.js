import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';


function AboutMe() {
  return (
    <ContenedorAboutMe>
      <TituloAboutMe>Información personal</TituloAboutMe>
      <TextoAboutMe>
        Soy una licenciada en comercio internacional con nivel avanzado en inglés y portugués apasionada por la tecnología.
        Desde 2022 que me dedico a estudiar y practicar diariamente con proyectos de programación para aprender nuevas tecnologías,
        obtener nuevos conocimientos y encontrar soluciones a problemas.
      </TextoAboutMe>
      <TextoAboutMe>Desde 2022, me dedico a estudiar programación por medio de bootcamps y cursos:</TextoAboutMe>

      <ContenedorEstudiosAboutMe>

        <ContenedorBootcampsAboutMe>

          <ListadoCompletoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Trayecto de desarrollador Java - UTN</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Desarrollador Fullstack con Java y Spring - Codo a codo 4.0</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Desarrollador web con HTML, CSS, Javascript, Figma y PHP - Potrero digital</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Desarrollo web con React y Firebase - Udemy</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Soporte IT - Google Careers y Coursera</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Reparación de laptops - Udemy</ListadoBootcampsAboutMe>
            <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Java y Spring avanzado - Bootcamp CODEKI/IT Patagonia</ListadoBootcampsAboutMe>
          </ListadoCompletoBootcampsAboutMe>
        </ContenedorBootcampsAboutMe>

        <ContenedorBootcampsAboutMe>

          <ContenedorRow>
            <ListadoCompletoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>HTML</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>CSS</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Javascript</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Node</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>React</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Java</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Spring</ListadoBootcampsAboutMe>
            </ListadoCompletoBootcampsAboutMe>

            <ListadoCompletoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>GIT/GITHUB</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Figma</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>PHP</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>Firebase</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>MySQL</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>PostgreSQL</ListadoBootcampsAboutMe>
              <ListadoBootcampsAboutMe><figure class="icono-flecha"></figure>MongoDB</ListadoBootcampsAboutMe>
            </ListadoCompletoBootcampsAboutMe>
          </ContenedorRow>

        </ContenedorBootcampsAboutMe>

      </ContenedorEstudiosAboutMe>

    </ContenedorAboutMe >
  )
}

const ContenedorAboutMe = styled.div`
  height: 650px;
  width: 100%;
  text-align: center;
  font-family: monospace; 



  @media (max-width: 850px) {
    height: 850px;
  }

  @media (max-width: 650px) {
    height: 1450px;
    width: 100%;
  }
`;

const TituloAboutMe = styled.h2`
  padding-top: 2%;
  font-size: 25px;
`;

const TextoAboutMe = styled.p`
  width: 85%;
  margin-left: 7%;
  padding-top: 2%;
  font-size: 20px;


  @media (max-width: 850px) {
    margin-top: 3%;
    margin-bottom: 7%;

  }

  @media (max-width: 650px) {
    width: 75%;
    height: auto;
    margin-top: 5%;
    margin-left: 15%;
    margin-bottom: 10%;
    text-align: left;
  }
`;

const ContenedorEstudiosAboutMe = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;

  @media (max-width: 850px) {
    margin-top: 3%;
  }


  @media (max-width: 650px) {
    width: 80%;
    margin-left: 6%;
    flex-direction: column;
  }
`;

const ContenedorBootcampsAboutMe = styled.div`
  width: 42%;
  height: 400px;
  margin-left: 5%;
  padding-left: 7%;
  background-color: rgb(39, 39, 39);
  border-radius: 20px;
  box-shadow: rgb(39, 39, 39) 0px 8px 24px;
  text-align: left;
  text-size: 25px;

  &:hover{
    background-color: rgb(26, 26, 26);
    font-weight: bolder;
  }


  @media (max-width: 650px) {
    width: 100%;
    padding-left: 11%;
    margin-bottom: 10%;
  }
`;

const ListadoCompletoBootcampsAboutMe = styled.ul`
  width: 90%;
  margin-top: 5%;
  list-style-type: none;
`;

const ListadoBootcampsAboutMe = styled.li`
  width: 100%;
  margin-top: 2%;
  display: flex;
`;

const ContenedorRow = styled.div`
  display: flex;
`;


export default AboutMe;