import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';    
import FormControl from 'react-bootstrap/FormControl';    
import '../styles/ShuffleTimeList.css';
import { Form } from 'react-bootstrap';

const ShuffleTimeList = (props) => { 
    const { setShuffleList, participant } = props;

    function updateValue(event) {
        setShuffleList(event.target.value);
    }

    return (
        <Form.Group controlId={`participant-${participant}`}>
            <Form.Label>Participant for {participant}s</Form.Label>
            <Form.Control type="integer" onChange={updateValue} placeholder="# of Participants" />
        </Form.Group>
    )
}

export default ShuffleTimeList;
