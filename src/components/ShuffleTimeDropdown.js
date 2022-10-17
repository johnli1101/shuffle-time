import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';    
import FormControl from 'react-bootstrap/FormControl';    
import '../styles/ShuffleTimeList.css';

const ShuffleTimeDropdown = (props) => { 
    const { setTableNumber } = props;

    function updateTableNumber(event) {
        console.log(event.target.value);
        setTableNumber(parseInt(event.target.value));
    }

    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label># of Tables</Form.Label>
            <Form.Control as="select" custom onChange={updateTableNumber}>
                <option value="1">111</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </Form.Control>
        </Form.Group>
    )
}

export default ShuffleTimeDropdown;
