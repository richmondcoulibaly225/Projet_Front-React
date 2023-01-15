import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { MyForm }  from './form'

export function MyCard() {
  return (
    <CardGroup className='espace'>

      <Card>
    
        <Card.Title>Services</Card.Title>
        <Card.Text>
          
        </Card.Text>
      <Card.Img variant="top" src="https://d11o8pt3cttu38.cloudfront.net/wp-content/uploads/2016/10/.service-client-du-fournisseur-historique-edf.jpg" />
      <Card.Body>
      </Card.Body>
    </Card><Card>
         <Card.Title><h2>Contacts</h2></Card.Title>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1129113667/fr/photo/vous-avez-un-probl%C3%A8me-nous-contacter.jpg?s=612x612&w=0&k=20&c=RQQg0hpc5RW76E_SBbSQkzqzFnsFHoAG-RIr7GV4QEw=" />
      <div>
        <p>N'hésitez pas à nous contacter pour d'éventuelles questions ou précisions</p>
        </div>

        <Card.Text>
          <MyForm/>
          </Card.Text>
        <Card.Body>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}


