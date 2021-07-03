import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const ShuffleTimeCards = (props) => {

    
    const { tableName, tableEntries } = props;

    // function loadTableList() {
    //     let listRow = [];
    //     let japaneseRows = japaneseArray.map((attendee) => {
    //         return (
    //             <ListGroup.Item> {attendee} J </ListGroup.Item>
    //         )
    //     });
    //     let foreignerRows = foreignerArray.map((attendee) => {
    //         return (
    //             <ListGroup.Item> {attendee} F </ListGroup.Item>
    //         )
    //     });
    //     listRow.push(japaneseRows);
    //     listRow.push(foreignerRows);

    //     return listRow;
    // }

    function printTableList() {
        let listRow = [];
        let tableRows = tableEntries.map((attendee) => {
            return (
                <ListGroup.Item> {attendee} </ListGroup.Item>
            )
        });
        listRow.push(tableRows);
        return listRow;
    }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{ tableName }</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            {printTableList()}
        </ListGroup>
        </Card>
    )
};

export default ShuffleTimeCards;
