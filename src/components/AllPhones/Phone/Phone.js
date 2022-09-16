import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import './Phone.css';

const Phone = ({phone}) => {
    const { name, brand, description, email, img, price, quantity, supplierName, _id } = phone;
    const navigate = useNavigate();
    return (
        <div className='col-lg-2 col-md-4 col-6'>
            <CardGroup>
                <Card className=''>
                    <Card.Img className='mt-2' variant="top" src={img} />
                    <Card.Body>
                        <Card.Text className='phone-name'>
                            {name}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-white'>
                        <button className='detail-btn' onClick={()=> navigate(`/phoneDetails/${_id}`)}>Details</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Phone;