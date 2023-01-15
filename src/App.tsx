import './App.css';
import { Button } from 'react-bootstrap';
import  {Mabarre} from './components/navbar';
import { Carrou } from './components/caroussel';
import { MyCard } from './components/card';
import  luxe from './img/luxe.jpg';
import utilitaire from './img/utilitaire.jpg';
import citadine from './img/citadine.jpg';
import React from "react";
import service from './img/service.jpg'
import contact from './img/contact.jpg'



function App() {
  return (
    <><div className="App">
      <Mabarre />
      <Carrou image1={luxe} image2={utilitaire} image3={citadine} />
    </div><div className="App">
        <MyCard />
      </div></>
  );
}

export default App;
