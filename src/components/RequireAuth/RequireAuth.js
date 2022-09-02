import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from 'react-loader-spinner';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';


const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <>
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
        </>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <div className='text-center py-5'>
            <div className='border d-inline-block p-5 m-3 bg-warning rounded-3'>
                <h3 className='text-danger'>Your email is not verified!</h3>
                <h5 className='mb-3'>Please verify your email first.</h5>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Email Sent');
                    }}>
                    Resend verification email
                </button>
                <p className='text-center mt-4'>* Please refresh the page after confirming the verification email.</p>
            </div>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;