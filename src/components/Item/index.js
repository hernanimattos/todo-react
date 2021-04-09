import React from 'react';
import Control from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './style.css';

const Item = ({ title, checked, check, remove }) => {
  return (
    <Row className="mb-1rem">
      <Col xs={1}>
        <Control type="checkbox" name="todo" onChange={() => check()}></Control>
      </Col>

      <Col>{checked ? <del>{title}</del> : <div>{title}</div>}</Col>

      <Col xs={1}>
        <Button variant="danger" onClick={() => remove()}>
          {' '}
          Remove
        </Button>
      </Col>
    </Row>
  );
};

export default Item;
