import axios from 'axios';
import { useState, useEffect } from 'react';
// import { HiCheckCircle } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import useSearch from '../../hooks/useSearch';
import './PhoneDetails.css'
import { Button } from '@mui/material';
import PageTitle from '../Shared/PageTitle';

const PhoneDetails = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState({})
    const { loading } = useSearch();
    const { id } = useParams();
    const { name, brand, description, img, price, quantity, supplierName } = phone;
    console.log(phone)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://warehouse-manager-258000.herokuapp.com/phoneDetails?id=${id}`)
            setPhone(data);
        }
        fetchData()
    }, [id])

    const handleRestock = async (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value
        if (quantity > 0) {
            const { quantity, ...rest } = phone;
            const newQuantity = e.target.quantity.value;
            const finalQuantity = { quantity: parseInt(quantity) + parseInt(newQuantity), ...rest }
            const { data } = await axios.put(`https://warehouse-manager-258000.herokuapp.com/restockItem?id=${id}`, finalQuantity)
            data.acknowledged && setPhone(finalQuantity)
        }
        else {
            alert('Quantity must have a positive value')
        }
        e.target.reset()
    }

    const handleDelivery = async () => {
        const { quantity, ...rest } = phone;
        const finalQuantity = { quantity: parseInt(quantity) - 1, ...rest }
        const { data } = await axios.put(`https://warehouse-manager-258000.herokuapp.com/deliveredItem?id=${id}`, finalQuantity)
        data?.acknowledged && setPhone(finalQuantity)
    }

    return (
        <div className='phone-details-container'>
            <PageTitle title='PhoneDetails' />
            {loading ? (
                <div className='container' style={{ position: 'relative', height: '100vh' }}>
                    <div style={{ position: 'absolute', top: '30%', left: '40%' }}>
                        <Audio className='audio'
                            height="100"
                            width="100"
                            color='red'
                            ariaLabel='loading'
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="details-container pt-5 row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12 text-lg-end text-md-center text-center">
                            <img className="details-img" src={img} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 d-md-flex d-lg-block d-flex justify-content-center text-lg-start text-md-center text-center">
                            <div className="text-md-start text-start details-right">
                                <h2 className="mb-3">Name: {name}</h2>
                                <h5> <FcApproval className="icon" /> Brand: {brand}</h5>
                                <h5> <FcApproval className="icon" /> Price: {price}</h5>
                                <h5> <FcApproval className="icon" /> Supplier Name: {supplierName}</h5>
                                <h5> <FcApproval className="icon" /> Quantity: {quantity}</h5>
                                <h5 className='d-inline'><FcApproval className="icon" /> Description:</h5> <p className='d-inline'>{description}</p> <br />
                                {/* <button onClick={handleDelivery} className='btn btn-primary mt-3'>Delivered</button> */}
                                <Button onClick={handleDelivery} className='me-3 mt-3' variant="contained" color="success">Delivered</Button>
                                <Button onClick={() => navigate(-1)} className='mt-3' variant="contained" color="success">Go Back</Button>
                            </div>
                        </div>
                    </div>
                    <form className='d-flex justify-content-center restock-container' onSubmit={handleRestock}>
                        <input type="number" placeholder='Quantity' className='restock-input' name="quantity" id="" />
                        <input type="submit" className='restock-btn' value="Restock" />
                    </form>
                </>
            )}
        </div>
    );
};

export default PhoneDetails;