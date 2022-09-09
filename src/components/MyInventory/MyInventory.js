import { Alert, Button, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlinePlusSm } from "react-icons/hi";
import ListGroup from 'react-bootstrap/ListGroup';
import { signOut } from 'firebase/auth';
import PageTitle from '../Shared/PageTitle';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyitems] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const url = `https://warehouse-manager-258000.herokuapp.com/myInventory?email=${user?.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyitems(data);
            }
            catch (err) {
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        fetchData()
    }, [user?.email])

    const handleDeleteItem = async (id) => {
        const agree = window.confirm('are you sure , you want to delete this item ?')
        if (agree) {
            console.log('done')
            const { data } = await axios.delete(`https://warehouse-manager-258000.herokuapp.com/deleteItem?id=${id}`);
            if (data?.deletedCount === 1) {
                const rest = myItems.filter(phone => phone._id !== id)
                setMyitems(rest);
                setDeleted(true)
                setTimeout(() => {
                    setDeleted(false)
                }, 3000);
            }
        }
    }

    let i = 1;


    return (
        <div className='container'>
            <PageTitle title='MyInventory' />
            <h3 className='text-center mt-3 bg-warning py-3'>My Inventory</h3>
            {deleted && <Alert className='mt-1' severity="success">Item successfully deleted!</Alert>}
            {
                myItems.length === 0 ?
                    <div><h3>You add any item till now. Want to add a item .</h3> <Button onClick={() => navigate('/addPhone')} variant="contained">Add item <HiOutlinePlusSm /></Button></div>
                    :
                    <>
                        <Button className='mb-3 mt-4' onClick={() => navigate('/addPhone')} variant="contained">Add item <HiOutlinePlusSm /></Button>
                        <ListGroup className='container'>
                            {
                                myItems.map(item => <ListGroup.Item key={item._id}>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            {i++}.  <Link className='text-black text-decoration-none' to={`/phoneDetails/${item?._id}`}>{item?.name}</Link>
                                        </div>
                                        <div>
                                            <div className='icon-container'>
                                                <Tooltip onClick={() => navigate(`/phoneDetails/${item?._id}`)} title="Show Detail" placement="bottom">
                                                    <button title='' className='see-more-btn'>
                                                        <CgDetailsMore className='see-more-icon' />
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="Delete" placement="bottom">
                                                    <button onClick={() => handleDeleteItem(item._id)} className='delete-btn'>
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
                                </ListGroup.Item>)
                            }
                        </ListGroup>
                    </>
            }
        </div>
    );
};

export default MyInventory;