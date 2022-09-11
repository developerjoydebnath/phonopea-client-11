import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

const Phone = ({phone}) => {
    const { name, brand, description, email, img, price, quantity, supplierName, _id } = phone;
    const navigate = useNavigate();
    return (
        <div className='col-lg-2 col-md-4 col-6'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-white'>
                        <button className='btn btn-primary' onClick={()=> navigate(`/phoneDetails/${_id}`)}>Details</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Phone;