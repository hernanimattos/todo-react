import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Control from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';

import Item from '../../components/Item';
import Button from 'react-bootstrap/Button';

import './style.css';

const MainTodo = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  const addItemToDo = (e) => {
    e.preventDefault();

    setItems((items) => [...items, { title: item, checked: false }]);
    setItem('');
  };

  const updateValue = (e) => {
    setItem(e.target.value);
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);

    setItems([...newItems]);
  };

  const checkItem = (index) => {
    const updatedItem = items.map((item, i) => {
      if (index === i) {
        item.checked = !item.checked;
      }

      return item;
    });
    setItems([...updatedItem]);
  };

  return (
    <Container>
      <Form onSubmit={(e) => addItemToDo(e)}>
        <Row className="add-todo">
          <Col>
            <Control
              type="text"
              value={item}
              onChange={(e) => updateValue(e)}
            ></Control>
          </Col>
          <Col xs={1}>
            <Button type="submit"> Add</Button>
          </Col>
        </Row>

        {items &&
          items.map((item, i) => (
            <Item
              title={item.title}
              checked={item.checked}
              key={`${i}+${item.title}`}
              remove={() => removeItem(i)}
              check={() => checkItem(i)}
            />
          ))}
      </Form>
    </Container>
  );
};

export default MainTodo;
