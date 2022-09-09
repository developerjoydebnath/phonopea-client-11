import { Alert, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useAuthState, useSendEmailVerification, useUpdateEmail, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../images/header/user.png'
import { AiFillEyeInvisible } from "react-icons/ai";
import PageTitle from '../Shared/PageTitle';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [checked, setChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [updatePassword, updating1, error1] = useUpdatePassword(auth);
    const [email, setEmail] = useState('');
    const [updateEmail, updating2, error2] = useUpdateEmail(auth);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [updateProfile, updating3, error3] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    const handleMobileNumber = (e) => {
        e.preventDefault();

    }

    const submitPhotoUrl = async (e) => {
        e.preventDefault();
        if (photoURL) {
            await updateProfile({ photoURL });
            alert('photourl updated')
            e.target.reset()
        }
    }

    const showPassword = e => {
        setChecked(!checked);
        if (e.target.parentElement.children[2].type && e.target.parentElement.children[3].type === 'password') {
            e.target.parentElement.children[2].type = 'text'
            e.target.parentElement.children[3].type = 'text'
        }
        else {
            e.target.parentElement.children[2].type = 'password'
            e.target.parentElement.children[3].type = 'password'
        }
    }

    return (
        <div className='container'>
            <PageTitle title='MyProfile' />
            <div className='row my-5'>
                <div className='col-12 col-md-6 border'>
                    <h1>this is profile</h1>
                    {user?.photoURL ? <img width={150} height={150} className='rounded-circle' src={user?.photoURL} alt="" /> : <img width={150} src={profile} alt="" />}
                    <div>
                        <h3>name: {user?.displayName}</h3>
                        <h4>email: {user?.email}</h4>
                        <h4>Email status: {user?.emailVerified ? 'Verified' : <>Not verified <Button onClick={async () => {
                            await sendEmailVerification();
                            alert('Email Sent');
                        }} variant="contained">verify now</Button></>}</h4>
                        <h5>last login time: {user?.metadata?.lastSignInTime}</h5>
                    </div>
                </div>
                <div className='col-12 col-md-6 border'>
                    <h1>this is update profile</h1>

                    <form onSubmit={submitPhotoUrl}>
                        <Alert severity="warning">Can't update email / password while logged in with social media!</Alert>
                        <label htmlFor="photoURL">Update Image</label> <br />
                        <input onBlur={(e) => setPhotoURL(e.target.value)} className='me-3 mb-2' type="text" placeholder='give your photoUrl' name="photoUrl" id="" />
                        <input type="submit" value="Save" />
                    </form>
                    <form className='mb-3'>
                        {
                            user?.providerData[0]?.providerId === 'password'
                                ?
                                <>
                                    <label htmlFor="email">Change Email</label><br />
                                    <input type="email" className='ps-1 me-3' placeholder='Type new email' onBlur={(e) => setEmail(e.target.value)} name="email" id="" />
                                    <input type="email" className='ps-1 mb-2' placeholder='Retype new email' onBlur={(e) => setEmail(e.target.value)} name="email" id="" /> <br />
                                    <input type="submit" value="Save" />
                                </>
                                :
                                <>
                                    <label htmlFor="email">Change Email</label><br />
                                    <input type="email" readOnly className='ps-1 me-3' placeholder='Type new email' onBlur={(e) => setEmail(e.target.value)} name="email" id="" />
                                    <input type="email" readOnly className='ps-1 mb-2' placeholder='Retype new email' onBlur={(e) => setEmail(e.target.value)} name="email" id="" /> <br />
                                    <input type="submit" disabled value="Save" />
                                </>
                        }
                    </form>
                    <form className='mb-3'>
                        {
                            user?.providerData[0]?.providerId === 'password'
                                ?
                                <>
                                    <label htmlFor="password">Change Password</label><br />
                                    <input type="password" className='ps-1 me-3' placeholder='New password' name='password' />
                                    <input type="password" className='ps-1 mb-2' placeholder='Confirm password' name='password' /> <br />
                                    <input type="checkbox" onClick={showPassword} name="showPass" id="showPass" /> 
                                    {checked ? <label className='ms-1 mb-1' htmlFor="showPass"> Hide password</label> : <label className='ms-1 mb-1' htmlFor="showPass"> Show password</label>}
                                    <br />
                                    <input type="submit" value="Save" />
                                </>
                                :
                                <>
                                    <label htmlFor="password">Change Password</label><br />
                                    <input type="password" readOnly className='ps-1 me-3' placeholder='New password' name='password' />
                                    <input type="password" readOnly className='ps-1 mb-2' placeholder='Confirm password' name='password' /> <br />
                                    <input type="submit" disabled value="Save" />
                                </>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;