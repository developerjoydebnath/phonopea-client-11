import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Audio } from 'react-loader-spinner';
import auth from '../../../firebase.init';
import { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import PageTitle from '../../Shared/PageTitle';
import { AiFillWarning } from "react-icons/ai";
import useToken from '../../../hooks/useToken';
import './Login.css';

function Copyright(props) {
    return (
        <SocialLogin />
    );
}

const theme = createTheme();

export default function SignIn() {
    const [checked, setChecked] = useState(false);
    const [resetEmail, setResetEmail] = useState({ value: '', error: '' });
    const [loginError, setLoginError] = useState('');
    const [open, setOpen] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
            setLoginError('')
        }
    }, [token])

    useEffect(() => {
        if (error?.message === 'Firebase: Error (auth/wrong-password).') {
            setLoginError('Incorrect Password!')
        }
        if (error?.message === 'Firebase: Error (auth/invalid-email).') {
            setLoginError('Invalid Email!')
        }
        if (error?.message === 'Firebase: Error (auth/user-not-found).') {
            setLoginError('User Not Found!')
        }
        if (resetPassError?.message === 'Firebase: Error (auth/user-not-found).') {
            setResetEmail({ value: '', error: 'User Not Found!' })
        }
        if (resetPassError?.message === 'Firebase: Error (auth/missing-email).') {
            setResetEmail({ value: '', error: 'Email is missing!' })
        }
    }, [error, resetPassError])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        await signInWithEmailAndPassword(email, password)
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
        setResetEmail({ value: '', error: '' })
    };

    const handleEmailSubmit = async () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail.value)) {
            setResetEmail({ value: resetEmail, error: '' });
            await sendPasswordResetEmail(resetEmail.value);
            !resetPassError && toast('Email Sent!');
        }
        else {
            setResetEmail({ value: '', error: 'Invalid Email/ Missing Email' });
        }
    }

    const showPassword = e => {
        // console.log(e.target.parentElement.children[1].children[1].children[0].type)
        setChecked(!checked);
        if (e.target.parentElement.children[1].children[1].children[0].type === 'password') {
            e.target.parentElement.children[1].children[1].children[0].type = 'text'
        }
        else {
            e.target.parentElement.children[1].children[1].children[0].type = 'password'
        }
    }

    return (
        <div className='login-container'>
            <ThemeProvider theme={theme}>
                <PageTitle title='Login' />
                <Container style={{ position: 'relative', textAlign: 'center', marginBottom: '50px' }} component="main" maxWidth="xs">
                    {
                        loading &&
                        <div style={{ position: 'absolute', top: '30%', left: '40%' }}>
                            <Audio className='audio'
                                height="100"
                                width="100"
                                color='red'
                                ariaLabel='loading'
                            />
                        </div>
                    }
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        {
                            loginError && <span className='text-danger mt-2'><AiFillWarning className='mb-1' /> {loginError}</span>
                        }
                        <Box className='text-start' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type='email'
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <input className='text-start' type="checkbox" onClick={showPassword} name="showPass" id="showPass" />
                            {checked ? <label className='ms-1 mb-1' htmlFor="showPass"> Hide password</label> : <label className='ms-1 mb-1' htmlFor="showPass"> Show password</label>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" onClick={handleClickOpen} variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <ToastContainer />
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Forgot your password?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Give your email associated with your account. <br />
                                {
                                    resetEmail?.error && <span className='text-danger'>{resetEmail.error}</span>
                                }
                            </DialogContentText>
                            <TextField onBlur={(e) => {
                                e.target.value === '' ? setResetEmail({ value: '', error: '' }) : setResetEmail({ value: e.target.value, error: '' })
                            }}
                                margin="dense"
                                name="resetEmail"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                required
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                            <Button onClick={handleEmailSubmit}>Reset Password</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </ThemeProvider>
        </div>
    );
}