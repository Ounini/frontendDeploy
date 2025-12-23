import { Col, Container, Row } from "react-bootstrap";
// 12 lines
function Grid() {
  return (
    <Container fluid>
      <Row>
        <Col>1</Col>
        <Col xs={6}>2</Col>
        <Col>3</Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
      </Row>
    </Container>
  );
}

export default Grid;
