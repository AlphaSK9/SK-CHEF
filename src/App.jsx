import Card from "./components/Card.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";
import Card4 from "./components/Card4.jsx";
import Card5 from "./components/Card5.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/NavBar.jsx';
import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cauli from './components/assets/cauli.jpg';
import katsu from './components/assets/katsu.jpg';
import piri from './components/assets/piri.jpg';
import tortellini from './components/assets/tortellini.jpg';
import oxtail from './components/assets/oxtail.jpg';
import sushi from './components/assets/sushi.jpg';
import shortrib from './components/assets/shortrib.jpg';
import venison from './components/assets/venison.jpg';
import lamb from './components/assets/lamb.jpg';
import crab from './components/assets/crab.jpg';
import peasalmon from './components/assets/peasalmon.jpg';
import salmon from './components/assets/salmon.jpg';
import seabream from './components/assets/seabream.jpg';
import radish from './components/assets/radish.jpg';
import lango from './components/assets/lango.jpg';
import mmasalad from './components/assets/mmasalad.jpg';
import mma from './components/assets/mma.jpg';
import canape from './components/assets/kerrsalad.jpg';
import fondant from './components/assets/fondant.jpg';
import cheesecake from './components/assets/popcorncheesecake.jpg';
import steak from './components/assets/steak.jpg';
import risotto from './components/assets/risotto.jpg';
import app from './components/assets/app.jpg';
import benedict from './components/assets/benedict.jpg';
import buffet from './components/assets/buffet.jpg';
import cm from './components/assets/cm.jpg';
import lambchops from './components/assets/lambchops.jpg';
import omelette from './components/assets/omelette.jpg';
import meatballs from './components/assets/meatballs.jpg';
import misosalmon from './components/assets/misosalmon.jpg';

function App() {
  const [currentCard, setCurrentCard] = useState('Card2');

  const renderCard = () => {
    switch (currentCard) {
      case 'Card2':
        return <Card2 />;
      case 'Card3':
        return <Card3 />;
      case 'Card4':
        return <Card4 />;
      case 'Card5':
        return <Card5 />;
      default:
        return <Card2 />;
    }
  };
    return (
      <>
      <Navbar setCurrentCard={setCurrentCard} />        
      <Card />
       {renderCard()} 
      <AliceCarousel autoPlay autoPlayInterval="3000">
       <img src={cauli} className="sliderimg"/>
       <img src={katsu} className="sliderimg"/>
       <img src={piri} className="sliderimg"/>
       <img src={tortellini} className="sliderimg"/>
       <img src={oxtail} className="sliderimg"/>
       <img src={sushi} className="sliderimg"/>
       <img src={shortrib} className="sliderimg"/>
       <img src={venison} className="sliderimg"/>
       <img src={lamb} className="sliderimg"/>
       <img src={crab} className="sliderimg"/>
       <img src={peasalmon} className="sliderimg"/>
       <img src={salmon} className="sliderimg"/>
       <img src={seabream} className="sliderimg"/>
       <img src={radish} className="sliderimg"/>
       <img src={lango} className="sliderimg"/>
       <img src={mmasalad} className="sliderimg"/>
       <img src={mma} className="sliderimg"/>
       <img src={canape} className="sliderimg"/>
       <img src={fondant} className="sliderimg"/>
       <img src={cheesecake} className="sliderimg"/>
       <img src={steak} className="sliderimg"/>
       <img src={risotto} className="sliderimg"/>
       <img src={app} className="sliderimg"/>
       <img src={benedict} className="sliderimg"/>
       <img src={buffet} className="sliderimg"/>
       <img src={cm} className="sliderimg"/>
       <img src={lambchops} className="sliderimg"/>
       <img src={omelette} className="sliderimg"/>
       <img src={meatballs} className="sliderimg"/>
       <img src={misosalmon} className="sliderimg"/>
      </AliceCarousel>
      <Footer />
      </>
     );
};

export default App;
