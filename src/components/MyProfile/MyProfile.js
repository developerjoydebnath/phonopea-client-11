import React from 'react';
import { useState } from 'react';
import { useAuthState, useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [password, setPassword] = useState('');
    const [updatePassword, updating1, error1] = useUpdatePassword(auth);
    const [email, setEmail] = useState('');
    const [updateEmail, updating2, error2] = useUpdateEmail(auth);
    console.log(email)
    return (
        <div className='container'>
            <h1>name: {user?.displayName}</h1>
            <h1>email: {user?.email}</h1>
            <h1>phone: {user?.phoneNumber}</h1>
            <h1>last login time: {user?.metadata?.lastSignInTime}</h1>

            <form>
                <input type="email" placeholder='change email' onBlur={(e) => setEmail(e.target.value)} name="email" id="" />
            </form>
            <form>
                <input type="password" placeholder='update password' name="password" id="" />
            </form>
        </div>
    );
};

export default MyProfile;