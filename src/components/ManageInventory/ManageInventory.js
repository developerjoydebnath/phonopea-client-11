import { Link, useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Audio } from 'react-loader-spinner';
import { HiOutlinePlusSm } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import './ManageInventory.css';
import { Alert, Tooltip } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PageTitle from '../Shared/PageTitle';
import usePhones from '../../hooks/usePhones';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const ManageInventory = () => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const { phones, setPhones, loading } = usePhones({ page, size });
    const [deleted, setDeleted] = useState(false);
    let i = 1;


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

    const handleDeleteItem = async (id) => {
        const agree = window.confirm('are you sure , you want to delete this item ?')
        if (agree) {
            console.log('done')
            const { data } = await axios.delete(`https://warehouse-manager-258000.herokuapp.com/deleteItem?id=${id}`);
            if (data?.deletedCount === 1) {
                const rest = phones.filter(phone => phone._id !== id)
                setPhones(rest);
                setDeleted(true)
                setTimeout(() => {
                    setDeleted(false)
                }, 3000);
            }
        }
    }

    return (
        <div className='container'>
            <PageTitle title='ManageInventory' />
            {deleted && <Alert className='mt-1' severity="success">Item successfully deleted!</Alert>}
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
                    <div className="mt-3 mb-5">
                        <div className='d-flex justify-content-between'>
                            <Link to="/addPhone" className='btn btn-success mb-3'>Add New Item <HiOutlinePlusSm /> </Link>
                            <Link to="/myInventory" className='btn btn-success mb-3'>My Inventory <FaArrowRight /> </Link>
                        </div>
                        <ListGroup>
                            {
                                phones.map(phone =>
                                    <ListGroup.Item key={phone._id}>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                {i++}.  <Link className='text-black text-decoration-none' to={`/phoneDetails/${phone?._id}`}>{phone?.name}</Link>
                                            </div>
                                            <div>
                                                <div className='icon-container'>
                                                    <Tooltip onClick={() => navigate(`/phoneDetails/${phone?._id}`)} title="Show Detail" placement="bottom">
                                                        <button title='' className='see-more-btn'>
                                                            <CgDetailsMore className='see-more-icon' />
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Delete" placement="bottom">
                                                        <button onClick={() => handleDeleteItem(phone._id)} className='delete-btn'>
                                                            <ImBin className='delete-icon' />
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Edit" placement="bottom">
                                                        <button className='edit-btn'>
                                                            <FiEdit className='edit-icon' />
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                        <div className='container my-5'>
                            <button onClick={handlePreviousBtn} className='next-btn'><FaAngleDoubleLeft className='mb-1' /></button>
                            {
                                [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={page === number ? 'selected-page' : 'page-btn'}>{number + 1}</button>)
                            }
                            <button onClick={handleNextBtn} className='next-btn'><FaAngleDoubleRight className='mb-1' /></button>

                            {
                                <select className='ms-3 page-size bg-white' onChange={e => setSize(e.target.value)}>
                                    <option value="15" selected>15</option>
                                    <option value="20">20</option>
                                </select>
                            }
                            <span className='products-per-page'> - products per page</span>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ManageInventory;
