import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';


function Services() {
    return (
        <ContenedorServices>
            <TituloServices>Servicios</TituloServices>
            <TextoServices>Ofrezco los siguientes servicios:</TextoServices>

            <ContenedorCardsService>
                <ContenedorCardServices>
                    <h2>Desarrollo web</h2>
                    <figure className='imagen programacion'></figure>
                    <TextoCardServices>
                        Diseño tu sitio web, sistema de gestión o de control, lading page, portfolio, página web de presentación de servicios, e-commerce
                        y/o cualquier otro tipo de desarrollo web que necesites para dar a conocer tu negocio, servicios y productos en Internet.
                    </TextoCardServices>
                </ContenedorCardServices>

                <ContenedorCardServices>
                    <h2>Creación de software</h2>
                    <figure className='imagen programacion'></figure>
                    <TextoCardServices>
                        Construyo softwares para tiendas, negocios y empresas pequeñas para que puedan simplificar y llevar a cabo sus tareas diarias como 
                        control de empleados, clientes, usuarios, productos, operaciones y control de altas y bajas en el stock.
                    </TextoCardServices>
                </ContenedorCardServices>

                <ContenedorCardServices>
                    <h2>Diseño</h2>
                    <figure className='imagen diseño'></figure>
                    <TextoCardServices>
                        Diseño maquetas y prototipos de sitios web, softwares y aplicaciones móbiles, los cuáles podrán ser utilizados para presentar un diseño 
                        de como se verá el sitio web y facilitar su implementación. También diseño logos y banners simples.
                    </TextoCardServices>
                </ContenedorCardServices>

                <ContenedorCardServices>
                    <h2>Soporte IT</h2>
                    <figure className='imagen soporteit'></figure>
                    <TextoCardServices>
                        Reparo, limpio y preparo laptops y notebook para mejorar su velocidad, rendimiento y llevar un mejor control de su funcionamiento.
                    </TextoCardServices>
                </ContenedorCardServices>

            </ContenedorCardsService>
        </ContenedorServices>
    )
}

const ContenedorServices = styled.div`
  height: 650px;
  width: 100%;
  text-align: center;
  font-family: monospace; 

  @media (max-width: 1000px) {
    height: 2500px;
  }

  @media (max-width: 750px) {
    height: 2300px;
  }
`;

const TituloServices = styled.h1`
  padding-top: 7%;
  font-size: 25px;
`;

const TextoServices = styled.p`
  padding-top: 2%;
  font-size: 20px;
`;

const ContenedorCardServices = styled.div`
  height: 400px;
  width: 20%;
  margin-top: 2%;
  padding-top: 2%;
  border-radius: 20px;
  border: 2px solid #fff;
  background-color: rgb(39, 39, 39);
  color: #fff;
  box-shadow: rgb(39, 39, 39) 0px 8px 24px;

  
  &:hover{
    background-color: rgb(26, 26, 26);
    font-weight: bolder;
  }

  
  @media (max-width: 1200px) {
    height: 480px;
  }


  @media (max-width: 1000px) {
    width: 40%;
    margin-top: 5%;
    margin-left: 30%;
    margin-bottom: 7%;
  }

  @media (max-width: 750px) {
    height: 420px;
    width: 60%;
    margin-top: 7%;
    margin-left: 20%;
    margin-bottom: 5%;
  }
`;

const TextoCardServices = styled.p`
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 7%;
  text-align: left;
  font-size: 15px;
`;

const ContenedorCardsService = styled.div`
  display: flex;
  justify-content: space-evenly;


  @media (max-width: 1000px) {
    flex-direction: column;
  }

`;

export default Services;
