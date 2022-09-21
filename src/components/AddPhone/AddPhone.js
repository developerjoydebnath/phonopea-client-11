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
import './AddPhone.css';



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
        <div className='add-phone-container'>
            <div className='container'>
                <PageTitle title='AddPhone' />
                <h3 className='text-center mb-2  pt-4 add-new-phone font-effect-shadow-multiple'>Add a new item<HiOutlinePlusSm /></h3>
                {added && <Alert className='' severity="success">Item successfully added!</Alert>}
                <form className='d-flex  flex-column mt-3 mx-auto form-container' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 ps-2 add-phone-input' placeholder='Name' type="text" required {...register("name")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='Brand' type="text" required {...register("brand")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='Price' type="number" required {...register("price")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='Quantity' type="number" required {...register("quantity")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='SupplierName' type="text" required {...register("supplierName")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='E-mail' type="email" value={user?.email} readOnly {...register("email")} />
                    <input className='mb-2 ps-2 add-phone-input' placeholder='Photo URL' type="text" required {...register("img")} />
                    <textarea className='mb-2 ps-2 add-phone-textarea' placeholder='Description' required {...register("description")} />
                    <input className='add-phone-btn' type="submit" value="Add Service" />
                    <div className='text-end mt-4'>
                        <Button className='' onClick={() => navigate(-1)} variant="contained" color="success"><ArrowBackIcon className='me-1' />Go Back to previous page</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPhone;