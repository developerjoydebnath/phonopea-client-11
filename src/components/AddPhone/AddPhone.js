import axios from 'axios';
import React, { useState } from 'react';
import { HiOutlinePlusSm } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

// const { name, brand, description, email, img, price, quantity, supplierName, _id } = phone;


const AddPhone = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm();
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);


    const onSubmit = async (phone) => {
        const item = phone;
        const { data } = await axios.post(`https://warehouse-manager-258000.herokuapp.com/addPhone`, item)
        data?.acknowledged && setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 3000);
    }

    return (
        <div className='container'>
            <PageTitle title='AddPhone' />
            <h3 className='text-center mb-2 bg-warning p-2'>Add a new item<HiOutlinePlusSm /></h3>
            {added && <Alert className='' severity="success">Item successfully added!</Alert>}
            <form className='d-flex container flex-column mt-3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 ps-2' placeholder='Name' type="text" required {...register("name")} />
                <input className='mb-2 ps-2' placeholder='Brand' type="text" required {...register("brand")} />
                <input className='mb-2 ps-2' placeholder='Price' type="number" required {...register("price")} />
                <input className='mb-2 ps-2' placeholder='Quantity' type="number" required {...register("quantity")} />
                <input className='mb-2 ps-2' placeholder='SupplierName' type="text" required {...register("supplierName")} />
                <input className='mb-2 ps-2' placeholder='E-mail' type="email" value={user?.email} readOnly {...register("email")} />
                <input className='mb-2 ps-2' placeholder='Photo URL' type="text" required {...register("img")} />
                <textarea className='mb-2 ps-2' placeholder='Description' required {...register("description")} />
                <input className='btn btn-primary' type="submit" value="Add Service" />
            </form>
            <div className='text-end container mt-4'>
                <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIcon className='me-1' />Go Back to previous page</Button>
            </div>
        </div>
    );
};

export default AddPhone;