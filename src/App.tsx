import './App.css';
import { Button } from 'react-bootstrap';
import  {Mabarre} from './components/navbar';
import { Carrou } from './components/caroussel';
import  prestige from './img/prestige.jpg';
import utilitaire from './img/utilitaire.jpg'
import citadine from './img/citadine.jpg'


function App() {
  return (
    <div className="App">
      <Mabarre/>
      <Carrou image1 = {prestige} image2 = {utilitaire} image3 = {citadine}/>
    </div>
  );
}

export default App;
