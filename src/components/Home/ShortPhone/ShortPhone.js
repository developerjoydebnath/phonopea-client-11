import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Audio } from  'react-loader-spinner';
import useShortPhone from '../../../hooks/useShortPhone';
import Phone from '../../AllPhones/Phone/Phone';
import './ShortPhone.css';


const ShortPhone = () => {
    const { shortPhone, loading } = useShortPhone();
    const navigate = useNavigate();
    return (
        <>
            {
                loading ?
                    <div className='container' style={{ position: 'relative', height: '100vh' }}>
                        <div style={{ position: 'absolute', top: '30%', left: '40%' }}>
                            <Audio className='audio'
                                height="100"
                                width="100"
                                color='red'
                                ariaLabel='loading'
                            />
                        </div>
                    </div> :
                    <div className="row gy-4 mx-auto container">
                        {
                            shortPhone.map(phone => <Phone
                                key={phone._id}
                                phone={phone}
                            ></Phone>)
                        }
                    </div>
            }
            <div>
                <button onClick={() => { navigate('/manageInventory') }}>Show all phones</button>
            </div>
        </>
    );
};

export default ShortPhone;