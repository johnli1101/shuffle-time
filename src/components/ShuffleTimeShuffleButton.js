import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';    
import FormControl from 'react-bootstrap/FormControl';    
import '../styles/ShuffleTimeList.css';

const ShuffleTimeShuffleButton = (props) => { 
    const { japaneseList, foreignerList, setFinalList } = props;

    function handleShuffleTime() {
        
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShuffleTime}>Shuffle</Button>
        </div>
    )
}

export default ShuffleTimeShuffleButton;
