import React from 'react';
import styled from 'styled-components';
import '../css/modelos.css';


function Proyects() {
  
  // ComexApp Web
  const ComexAppDeploy = ()=>{
    window.open('https://comexapp-251c2.web.app');
  }

  const ComexAppWebRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/ComexApp-web');
  }


  // Lista de gastos
  const ListaGastosDeploy = ()=>{
    window.open('');
  }

  const ListaGastosRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/app_lista_gastos');
  }
  

  // Lista de tareas
  const ListaTareasRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/Lista-de-tareas');
  }
  

  // ComexApp
  const ComexAppRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/ComexApp');
  }

  
  // TP codo a codo
  const TPCACDeploy = ()=>{
    window.open('https://codoacodo40-tp-front.netlify.app/');
  }

  const TPCACRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/TP-CAC4.0-Front');
  }


   // DarcoDevs
   const DarcoDevsDeploy = ()=>{
    window.open('https://darcodevs.netlify.app/');
  }

  const DarcoDevsRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/Darco');
  }
  

  // Tienda productos PHP
   const TiendaProductosRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/TiendaProductos');
  }

  // Tienda gamer Java
  const TiendaGamerRepo = ()=>{
    window.open('https://github.com/Daniela2-1998/GestionVideojuegos');
  }




  return (
    <ContenedorProyects>
      <TituloProyects>Proyectos freelance</TituloProyects>



      <FreelanceProyects>
        <FreelanceComponentesProyects>3 proyectos creados</FreelanceComponentesProyects>
        <FreelanceComponentesProyects>clientes satisfechos</FreelanceComponentesProyects>
        <FreelanceComponentesProyects>proyectos mixtos</FreelanceComponentesProyects>
      </FreelanceProyects>

      <TituloProyects>Proyectos propios</TituloProyects>

      <ContenedorCardsProyects>

        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto comexappweb'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>ComexApp web</TituloCardProyects>
            <TextoCardProyects>
              ComexAppWeb es un sistema web de gestión para empresas dedicadas al comercio nacional e internacional, de forma que puedan 
              centralizar y facilitar algunas de sus funciones básicas y principales, como: agenda de contactos (exportadores, importadores, 
              despachantes, agentes de carga, transporte nacional e internacional, compradores, vendedores, proveedores) o gestión de operaciones 
              nacionales e internacionales.
            </TextoCardProyects>

            <ContenedorBotonesCardProyects>
              <BotonesCardProyects onClick={ComexAppDeploy}>Deploy</BotonesCardProyects>
              <BotonesCardProyects onClick={ComexAppWebRepo}>Repositorio</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Firebase</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>


        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto listagastos'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>Lista de gastos</TituloCardProyects>
            <TextoCardProyects>
               Se trata de un proyecto con inicio de sesión con mail y contraseña para que cada usuario pueda ingresar sus gastos 
               específicando la categoría correcta y acceder a un listado de los gastos pudiendo separarlo por meses para una 
               mejor visualización y un mayor control de los mismos.
            </TextoCardProyects>

            <ContenedorBotonesCardProyects>
              <BotonesCardProyects>Deploy</BotonesCardProyects>
              <BotonesCardProyects onClick={ListaGastosRepo}>Repositorio</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Firebase</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>


        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto listatareas'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>Lista de tareas</TituloCardProyects>
            <TextoCardProyects>
              Permite crear una lista de tareas para llevar su control y progreso. Se puede ingresar tareas, modificarlas 
              y eliminarlas; así como también es posible marcarlas como completas y utilizar un filtro para ocultar
              aquellas tareas que ya fueron completadas.
            </TextoCardProyects>
            
            <ContenedorBotonesCardProyects>
              <BotonesCardProyects onClick={ListaTareasRepo}>Repositorio</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>

        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto2 darcodev'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>Darco Devs</TituloCardProyects>
            <TextoCardProyects>
              Sitio web de Darco Devs para ofrecer servicios de desarrollo web y de softwares, creación de bases de datos junto con sus copias de seguridad 
              y mantenimiento, diseño de prototipos y marquetados web junto a banners, flyers o imágenes, y resolución de problemas informáticos de
              computadoras o laptops.
            </TextoCardProyects>
            
            <ContenedorBotonesCardProyects>
              <BotonesCardProyects onClick={DarcoDevsRepo}>Repositorio</BotonesCardProyects>
              <BotonesCardProyects onClick={DarcoDevsDeploy}>Deploy</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>

        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto2 tpfront'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>TP Codo a Codo - Frontend</TituloCardProyects>
            <TextoCardProyects>
              Proyecto creado en el marco del bootcamp Codo a Codo 4.0 para el trayecto de desarrollador fullstack con Java durante la primer parte 
              en donde se abarcó HTML, CSS y Javascript.
            </TextoCardProyects>
            
            <ContenedorBotonesCardProyects>
            <BotonesCardProyects onClick={TPCACRepo}>Repositorio</BotonesCardProyects>
              <BotonesCardProyects onClick={TPCACDeploy}>Deploy</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>

        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto tiendaproductos'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>Tienda videojuegos</TituloCardProyects>
            <TextoCardProyects>
              Proyecto final del bootcamp de Codo a Codo 4.0, trayecto desarrollador fullstack con java.
            </TextoCardProyects>
            
            <ContenedorBotonesCardProyects>
            <BotonesCardProyects onClick={TiendaProductosRepo}>Repositorio</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Java</p>
              <p>MySQL</p>
              <p>Maven</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>

        <ContenedorCardProyects>
          <InformacionCompletaCardProyects>
          <figure className='imagen-proyecto tiendaproductos'></figure>

          <InformacionCardProyects>
            <TituloCardProyects>Tienda productos</TituloCardProyects>
            <TextoCardProyects>
              Tienda de productos desarrollada con PHP para un comercio pequeño dedicado a la venta de productos. El modelo diseñado 
              representa a una tienda dedicada a la venta de videojuegos y tecnología. 
            </TextoCardProyects>
            
            <ContenedorBotonesCardProyects>
            <BotonesCardProyects onClick={TiendaProductosRepo}>Repositorio</BotonesCardProyects>
            </ContenedorBotonesCardProyects>

            <ContenedorLenguajesCardProyects>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>PHP</p>
            </ContenedorLenguajesCardProyects>
          </InformacionCardProyects>
          </InformacionCompletaCardProyects>

        </ContenedorCardProyects>

      </ContenedorCardsProyects>

    </ContenedorProyects >
  )
}

const ContenedorProyects = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
  font-family: monospace; 
`;

const TituloProyects = styled.h1`
  padding-top: 5%;
  font-size: 25px;
`;

const FreelanceProyects = styled.div`
  height: 200px;
  width: 80%;
  margin-left: 12%;
  display: flex;
`;

const FreelanceComponentesProyects = styled.div`
  height: 100px;
  width: 30%;
  margin-top: 5%;
  padding: 3%;
  border-right: 5px solid rgb(39, 39, 39);
  font-size: 18px;
  font-weight: bolder;
  text-transform: uppercase;


  @media (max-width: 550px) {
    padding: 5%;
    font-size: 14px;
  }
`;


const ContenedorCardsProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContenedorCardProyects = styled.div`
  height: 500px;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  padding-top: 2%;
  border-radius: 20px;
  border: 2px solid #fff;
  background-color: rgb(30, 95, 199);
  color: #fff;
  box-shadow: rgb(39, 39, 39) 0px 8px 24px;

  
  &:hover{
    background-color: rgb(23, 73, 153);
    font-weight: bolder;
  }



  @media (max-width: 1200px) {
    height: 650px;
  }

  @media (max-width: 750px) {
    height: 700px;
    margin-top: 7%;
    margin-left: 5%;
    margin-bottom: 10%;
  }


  @media (max-width: 550px) {
    height: auto;
  }
`;

const InformacionCompletaCardProyects = styled.div`
  height: 500px;
  width: 100%;
  display: flex;




  @media (max-width: 750px) {
    height: 700px;
    flex-direction: column;
  }


  @media (max-width: 550px) {
    height: 600px;
  }
`;

const InformacionCardProyects = styled.div`
  width: 40%;
  margin-left: 0%;
  flex-direction: column;



  @media (max-width: 750px) {
    width: 85%;
    margin-left: 7%;
  }

  
  @media (max-width: 600px) {
    height: 500px;
  }

`;

const TituloCardProyects = styled.h2`
  margin-top: 2%;
  text-align: left;
  font-size: 25px;
`;

const TextoCardProyects = styled.p`
  margin-top: 5%;
  margin-right: 7%;
  text-align: left;
  font-size: 15px;
`;

const ContenedorBotonesCardProyects = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 5%;
  margin-left: -6%;
  text-align: center;
  font-size: 15px;
  font-weight: bolder;
  display: flex;
  justify-content: space-evenly;
`;

const BotonesCardProyects = styled.button`
  height: 50px;
  width: 40%;
  border-radius: 20px;
  border: none;
  background-color: rgb(39, 39, 39);
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ContenedorLenguajesCardProyects = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 5%;
  margin-left: -8%;
  padding: 6%;
  text-align: left;
  font-size: 17px;
  font-weight: bolder;
  display: flex;
  justify-content: space-evenly;
  border-radius: 20px;
  border: 2px solid #fff;
  background-color: rgb(39, 39, 39);


  &:hover{
    background-color: rgb(26, 26, 26);
  }

  p{
    text-transform: uppercase;
  }


  
  @media (max-width: 1200px) {
    width: 150%;
    margin-top: 35%;
    margin-left: -60%;
  }


  @media (max-width: 750px) {
    width: 100%;
    margin-left: -2%;
    margin-bottom: 10%;
  }

  @media (max-width: 600px) {
    margin-top: 0%;
    margin-left: 0%;
  }

`;


export default Proyects;
