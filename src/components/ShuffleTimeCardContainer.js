import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Card from 'react-bootstrap/Card';
import ShuffleTimeCards from './ShuffleTimeCards';

const ShuffleTimeCardContainer = (props) => {
    
    const { tableSeating } = props;

    // function createTableSlots() {
    //     let rows = [];
    //     let innerRow = [];
    //     let tableMapLength = tableMapping.length;
    //     let foreignerList = Array.from({length: foreignerNumber}, (v, k) => k+1); 
    //     let japaneseList = Array.from({length: japaneseNumber}, (v, k) => k+1); 
    //     let colNumber = Math.floor(tableMapLength / 5);
    //     let japaneseArray = [];
    //     let foreignerArray = [];
    //     let randomNumber = 0;

    //     const tableNames = [
    //         "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"
    //     ]
    //     let tableIterator = 0; 
    //     console.log()
    //     for (let i = 0; i < tableMapLength; ++i) {
    //         for (let j = 0; j < tableMapping[i].japanese; ++j) {
    //             randomNumber = Math.floor(Math.random() * (japaneseList.length - 1 + 1)) + 0;
    //             console.log(randomNumber);
    //             japaneseArray.push(japaneseList[randomNumber]);
    //             japaneseList.splice(randomNumber, 1);
    //         }
    //         for (let j = 0; j < tableMapping[i].foreigner; ++j) {
    //             randomNumber = Math.floor(Math.random() * (foreignerList.length - 1 + 1)) + 0;
    //             console.log(randomNumber);
    //             foreignerArray.push(foreignerList[randomNumber]);
    //             foreignerList.splice(randomNumber, 1);
    //         }

    //         innerRow.push(
    //             <Col xs={3}>
    //                 <ShuffleTimeCards japaneseArray={japaneseArray} foreignerArray={foreignerArray} tableName={tableNames[tableIterator]} /> 
    //             </Col>        
    //         );

    //         japaneseArray = [];
    //         foreignerArray = [];
    //         tableIterator++;  

    //     }

    //     rows.push(<Row> {innerRow} + </Row>);

    //     return rows;
    // }

    function createTableSeating() {
        let innerRow = [];
        let rows = [];

        for(const tableID in tableSeating) {
            innerRow.push(
                <Col xs={3}>
                    <ShuffleTimeCards tableEntries={tableSeating[tableID]} tableName={tableID} /> 
                </Col>        
            );
        }

        rows.push(<Row> {innerRow} + </Row>)

        return rows;
    }

    return (
        <div>
            { createTableSeating() }
        </div>
    )
};

export default ShuffleTimeCardContainer;
