import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function MyForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="nom" placeholder="Nom et prenom" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre adresse mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Entrez un message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Soumettre
      </Button>
    </Form>
  );
}
