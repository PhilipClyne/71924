import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "a") {
      setA(parseFloat(value));
    } else if (name === "b") {
      setB(parseFloat(value));
    }
  };

  const handleButtonClick = (operator) => {
    let resultValue;

    switch (operator) {
      case "+":
        resultValue = a + b;
        break;
      case "-":
        resultValue = a - b;
        break;
      case "*":
        resultValue = a * b;
        break;
      case "/":
        resultValue = a / b;
        break;
      default:
        resultValue = "Error";
    }

    setResult(resultValue);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col
          md={6}
          className="d-flex flex-column align-items-center border p-4"
        >
          <Form.Group className="mb-3">
            <Form.Label>First Number</Form.Label>
            <Form.Control
              type="number"
              name="a"
              value={a}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Second Number</Form.Label>
            <Form.Control
              type="number"
              name="b"
              value={b}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-around w-100 mb-3">
            <Button variant="primary" onClick={() => handleButtonClick("+")}>
              +
            </Button>
            <Button variant="primary" onClick={() => handleButtonClick("-")}>
              -
            </Button>
            <Button variant="primary" onClick={() => handleButtonClick("*")}>
              *
            </Button>
            <Button variant="primary" onClick={() => handleButtonClick("/")}>
              /
            </Button>
          </div>
          <h3>Result: {result}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
