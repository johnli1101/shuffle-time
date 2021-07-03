import React, { useState, useEffect } from 'react';
import ShuffleTimeList from './ShuffleTimeList';
import ShuffleTimeDropdown from './ShuffleTimeDropdown';
import ShuffleTimeCardContainer from './ShuffleTimeCardContainer';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/ShuffleTimeContainer.css';
import {db} from '../firebase/fbConfig.js';

const ShuffleTimeContainer = (props) => {

    const [japaneseNumber, setJapaneseNumber] = useState(0);
    const [foreignerNumber, setForeignerNumber] = useState(0);
    const [tableNumber, setTableNumber] = useState(0);
    const [tableMapping, setTableMapping] = useState(0);
    const [tableSeating, setTableSeating] = useState(0);
    // const [finalList, setFinalList] = useState([]);
    // const [editMode, setEditMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    //hello

    useEffect(() => {
        db.collection("shuffle").doc("shuffle-time-table")
        .get()
        .then((doc) => {
            let newJson = doc.data().json;
            console.log(newJson);
            if(newJson === "") {

            }
            else {
                console.log("HELLO");
                let newTableSeatings = JSON.parse(newJson);
                setTableSeating(newTableSeatings);
            }
        });
    }, []);

    //check if errorMessage is not empty
    function checkErrorMessage () {
        return errorMessage ? true : false;
    }

    function handleTableGeneration (e) {
        e.preventDefault();

        let tempForeignerList = [];
        tempForeignerList.length = foreignerNumber;

        let tempJapaneseList = [];
        tempJapaneseList.length = japaneseNumber;

        let tempTableList = [];
        tempTableList.length = 0;

        let finalList = [];
        finalList.length = tempTableList.length;

        let listMapping = [];

        let foreignerPerTable = Math.floor(foreignerNumber / tableNumber);
        let foreignerLeftOver = foreignerNumber % tableNumber;

        let japanesePerTable = Math.floor(japaneseNumber / tableNumber);
        let japaneseLeftOver = japaneseNumber % tableNumber;

        console.log(foreignerPerTable + " " + foreignerLeftOver);
        console.log(japanesePerTable + " " + japaneseLeftOver);
        console.log(tableNumber);

        for (let i = 0; i < tableNumber; ++i) {
            let newObject = {foreigner: 0, japanese: 0};
            if(foreignerNumber >= 1) {
                newObject["foreigner"] = foreignerPerTable;
            }
            if(japaneseNumber >= 1) {
                newObject["japanese"] = japanesePerTable;
            }
            if(foreignerLeftOver >= 1) {
                newObject["foreigner"] += 1;
                foreignerLeftOver -= 1;
            }
            if(japaneseLeftOver >= 1) {
                newObject["japanese"] += 1;
                japaneseLeftOver -= 1;
            }

            listMapping.push(newObject);
        }
        console.log(listMapping);
        setTableMapping(listMapping);

        //create the tabel seating
        let newTableSeating = JSON.stringify(createTableSlots(listMapping));

        //create json object to store into firebase
        db.collection("shuffle").doc("shuffle-time-table").update({
            json: newTableSeating
        });
    }

    function createTableSlots(listMapping) {
        let rows = [];
        let innerRow = [];
        let tableMapLength = listMapping.length;
        let foreignerList = Array.from({length: foreignerNumber}, (v, k) => k+1); 
        let japaneseList = Array.from({length: japaneseNumber}, (v, k) => k+1); 
        let colNumber = Math.floor(tableMapLength / 5);
        let japaneseArray = [];
        let foreignerArray = [];
        let randomNumber = 0;
        let tableSeating = {};

        const tableNames = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"
        ]
        let tableIterator = 0; 
        console.log(listMapping);
        for (let i = 0; i < tableMapLength; ++i) {
            tableSeating[tableNames[tableIterator]] = [];

            for (let j = 0; j < listMapping[i].japanese; ++j) {
                randomNumber = Math.floor(Math.random() * (japaneseList.length - 1 + 1)) + 0;
                console.log(randomNumber);
                
                let newJapaneseEntry = japaneseList[randomNumber];
                japaneseArray.push(newJapaneseEntry);
                japaneseList.splice(randomNumber, 1);
                
                tableSeating[tableNames[tableIterator]].push(newJapaneseEntry + "J");
            }
            for (let j = 0; j < listMapping[i].foreigner; ++j) {
                randomNumber = Math.floor(Math.random() * (foreignerList.length - 1 + 1)) + 0;
                console.log(randomNumber);

                let newForeignerEntry = foreignerList[randomNumber];
                foreignerArray.push(foreignerList[randomNumber]);
                foreignerList.splice(randomNumber, 1);

                tableSeating[tableNames[tableIterator]].push(newForeignerEntry + "F");
            }

            japaneseArray = [];
            foreignerArray = [];
            tableIterator++;  
        }

        console.log(tableSeating);
        setTableSeating(tableSeating);

        return tableSeating;
    }

    function handleClear() {
        console.log("Hello");
        setTableSeating({});

        db.collection("shuffle").doc("shuffle-time-table").update({
            json: ""
        });
    }

    return (
        <div>
            <div className="student-container">
                <h1>List of Attendees</h1>
                <Form onSubmit={handleTableGeneration} onReset={handleClear}>
                    <Container>
                        <Row>
                            <Col>
                                <ShuffleTimeList setShuffleList={setJapaneseNumber} participant="japanese"/>
                            </Col>
                            <Col>
                                <ShuffleTimeList  setShuffleList={setForeignerNumber} participant="foreigner"/>
                            </Col>
                            <Col>
                                <ShuffleTimeDropdown setTableNumber={setTableNumber} />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="primary" type="reset" onclick={handleClear}>
                                    Clear
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <ShuffleTimeCardContainer tableSeating={tableSeating} />
                        </Row>
                    </Container>
                </Form>
            </div>
        </div>
    )
};

export default ShuffleTimeContainer;
