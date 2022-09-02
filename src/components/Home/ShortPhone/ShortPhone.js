import React from 'react';
import { useNavigate } from 'react-router-dom';
import useShortPhone from '../../../hooks/useShortPhone';
import Phone from '../../AllPhones/Phone/Phone';
import './ShortPhone.css';


const ShortPhone = () => {
    const { shortPhone, loading } = useShortPhone();
    const navigate = useNavigate();
    return (
        <>
            <div className="row gy-4 mx-auto container">
                {
                    shortPhone.map(phone => <Phone
                        key={phone._id}
                        phone={phone}
                    ></Phone>)
                }
            </div>
            <div>
                <button onClick={()=> {navigate('/manageInventory')}}>Show all phones</button>
            </div>
        </>
    );
};

export default ShortPhone;