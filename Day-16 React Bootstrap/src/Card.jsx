import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardCompenent(props) {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={props.Img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text style={{ textAlign: "left" }}>{props.text}</Card.Text>
              <Button variant="primary">Click Me</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardCompenent;
