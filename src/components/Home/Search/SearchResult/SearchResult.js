import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import EachSearchPD from '../EachSearchPD/EachSearchPD';


const SearchResult = (props) => {
    const { searchresult } = props;

    return (
        <div>
            <Modal scrollable {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Using Grid in Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            {
                                searchresult.length === 0 ? 'no result found' :  searchresult.map(pd => <EachSearchPD key={pd._id} onHide={props.onHide}  pd={pd}></EachSearchPD>)
                            }
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SearchResult;