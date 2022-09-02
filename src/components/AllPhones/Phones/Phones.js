import React from 'react';
import { Audio } from  'react-loader-spinner';
import usePhones from '../../../hooks/usePhones';
import Phone from '../Phone/Phone';

const Phones = () => {
    const { phones, loading } = usePhones();
    return (
        <div>
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
                            phones.map(phone => <Phone
                                key={phone._id}
                                phone={phone}
                            />)
                        }
                    </div>
            }
        </div>
    );
};

export default Phones;