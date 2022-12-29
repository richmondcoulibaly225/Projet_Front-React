import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carrou(props: { image1: any; image2: any; image3: any; }) {
  var image1 = props.image1
  var image2 = props.image2
  var image3 = props.image3
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 Carrou_img"
          src= {image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Prestige</h3>
          <p>Cette sélection vous propose une vaste gamme de voitures de luse fabriquées avec passion par les marques les plus emblématiques du monde.Vous bénéficierez d'une superbe expérience de conduite en mettant la main sur un véhicule de prestige ainsi qu'un service de première classe dès lors vous sélectionnez votre voiture jusqu'au moment ou vous atteignez votre destination.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carrou_img"
          src= {image2}
          alt="Second slide"
        />

      <Carousel.Caption>
          <h3>Utilitaires</h3>
          <p>Nous mettons à disposition de nos clients des utilitaires à tout moment de la journée pour différents bésoins que ce soit aussi bien pour des déménagements que pour des transports de marchandises et ce à long comme court terme.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 Carrou_img"
          src= {image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Citadines</h3>
          <p>
          Vous recherchez de petits véhicules, économiques que ce soit électriques, hybrides ou autres pour vos différents trajets, sélectionnez cette gamme de véhicules .
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  );
}
