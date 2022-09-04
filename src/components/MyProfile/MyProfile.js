import { Alert, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useAuthState, useSendEmailVerification, useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../images/header/user.png'

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [password, setPassword] = useState('');
    const [updatePassword, updating1, error1] = useUpdatePassword(auth);
    const [email, setEmail] = useState('');
    const [updateEmail, updating2, error2] = useUpdateEmail(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    console.log(user)


    const handleMobileNumber = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-12 col-md-6 border'>
                    <h1>this is profile</h1>
                    {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img width={150} src={profile} alt="" />}
                    <div>
                        <h3>name: {user?.displayName}</h3>
                        <h4>email: {user?.email}</h4>
                        <h4>phone: {user?.phoneNumber}</h4>
                        <h4>Email status: {user?.emailVerified ? 'Verified' : <>Not verified <Button onClick={async () => {
                            await sendEmailVerification();
                            alert('Email Sent');
                        }} variant="contained">verify now</Button></>}</h4>
                        <h5>last login time: {user?.metadata?.lastSignInTime}</h5>
                    </div>
                </div>
                <div className='col-12 col-md-6 border'>
                    <h1>this is update profile</h1>
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
                                    <Alert severity="warning">Can't update profile while logged in with social media!</Alert>
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
                    <form onSubmit={handleMobileNumber}>
                        {
                            user?.providerData[0]?.providerId === 'password'
                                ?
                                <>
                                    <label htmlFor="phone">Change Phone Number</label><br />
                                    <input type="number" className='ps-1 me-3' placeholder='New password' name='phone' />
                                    <input type="number" className='ps-1 mb-2' placeholder='Confirm password' name='phone' /> <br />
                                    <input type="submit" value="Save" />
                                </>
                                :
                                <>
                                    <label htmlFor="phone">Change Password</label><br />
                                    <input type="number" readOnly className='ps-1 me-3' placeholder='New password' name='phone' />
                                    <input type="number" readOnly className='ps-1 mb-2' placeholder='Confirm password' name='phone' /> <br />
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