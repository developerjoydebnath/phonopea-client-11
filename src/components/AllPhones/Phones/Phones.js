import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Audio } from 'react-loader-spinner';
import usePhones from '../../../hooks/usePhones';
import PageTitle from '../../Shared/PageTitle';
import Phone from '../Phone/Phone';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import './Phones.css';

const Phones = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const { phones, loading } = usePhones({ page, size });

    console.log(typeof page)
    console.log(typeof pageCount)
    console.log(page)


    useEffect(() => {
        if (page + 1 > pageCount && page !== 0) {
            const newPageCount = pageCount - 1;
            setPage(newPageCount)
        }
    }, [page, pageCount])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://warehouse-manager-258000.herokuapp.com/productCount')
            const productCount = data?.count;
            const page = Math.ceil(productCount / size);
            setPageCount(page);
        }
        fetchData()
    }, [size])

    const handlePreviousBtn = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleNextBtn = () => {
        if (page + 1 < pageCount) {
            setPage(page + 1)
        }
    }


    return (
        <div>
            <PageTitle title='Phones' />
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
            <div className='container my-5'>
                <button onClick={handlePreviousBtn} className='next-btn'><FaAngleDoubleLeft className='mb-1' /></button>
                {
                    [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={page === number ? 'selected-page' : 'page-btn'}>{number + 1}</button>)
                }
                <button onClick={handleNextBtn} className='next-btn'><FaAngleDoubleRight className='mb-1' /></button>

                {
                    <select className='ms-3 page-size' onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                }
                <span className='products-per-page'> - products per page</span>
            </div>

        </div>
    );
};

export default Phones;