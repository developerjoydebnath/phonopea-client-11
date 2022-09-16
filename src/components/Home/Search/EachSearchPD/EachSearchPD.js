import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import './EachSearchPD.css';

const EachSearchPD = (props) => {
    const { name, brand, description, email, img, price, quantity, supplierName, _id } = props.pd;
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate(`/phoneDetails/${_id}`);
        props.onHide();
    }

    return (
        <Col xs={6} md={4}>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        {/* <Card.Title>{name}</Card.Title> */}
                        <Card.Text>
                            {name}
                        </Card.Text>
                        {/* <Button onClick={handleOnclick} variant="primary">Details</Button> */}
                        <button onClick={handleOnclick} className='details-btn'>Details</button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default EachSearchPD;