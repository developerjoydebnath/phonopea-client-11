import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Audio } from 'react-loader-spinner';
import { useEffect } from 'react';
import './SignUp.css';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const [checked, setChecked] = useState(false);
    const [agree, setAgree] = useState(false);
    const [notAgree, setNotAgree] = useState('');
    const [displayName, setDisplayName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateNameError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    console.log(user)

    useEffect(() => {
        agree && setNotAgree('')
    }, [agree])

    const displayNameBlur = event => {
        const name = event.target.value;
        if (name === '') {
            setDisplayName({ value: '', error: 'Please give a username.' });
        }
        else {
            setDisplayName({ value: name, error: '' });
        }
    };

    const emailBlur = event => {
        const emailValue = event.target.value;
        if (emailValue === '') {
            setEmail({ value: '', error: 'Please type your email.' })
        }
        else {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
                setEmail({ value: emailValue, error: '' });
            }
            else {
                setEmail({ value: '', error: 'Invalid Email' });
            }
        }
    };

    const passwordBlur = event => {
        const passwordValue = event.target.value;
        if (passwordValue.length > 7) {
            if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z])/.test(passwordValue)) {
                setPassword({ value: '', error: 'Must contain special character, letter & number' });
            }
            else {
                setPassword({ value: passwordValue, error: '' })
            }
        }
        else {
            setPassword({ value: '', error: 'Password too short, must contain 8 character' });
        }
    };

    const confirmPasswordBlur = (event) => {
        const confirmPasswordValue = event.target.value;
        if (password.value === '') {
            setConfirmPassword({ value: '', error: '' });
        }
        else if (confirmPasswordValue === password.value) {
            setConfirmPassword({ value: confirmPasswordValue, error: '' });
        }
        else {
            setConfirmPassword({ value: '', error: 'Password does not match' });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);

        // const name = data.get('firstName')
        // const email = data.get('email')
        // const password = data.get('password')
        // const confirmPassword = data.get('confirmPassword')

        if (displayName.value === '') {
            setDisplayName({ value: '', error: 'Username is required !' });
        }
        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required !' });
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required !' });
        }
        if (displayName.value && email.value && password.value && (password.value === confirmPassword.value)) {
            if (!agree) {
                setNotAgree('Please agree with our terms & conditions.')
            }
            if (agree) {
                await createUserWithEmailAndPassword(email.value, password.value);
                await updateProfile({ displayName: displayName.value });
                await signOut(auth);
                navigate('/login')
            }
        }


    };

    const showPassword = e => {
        console.log(e.target.parentElement.parentElement.children[2].children[0].children[1].children[0].type)
        setChecked(!checked);
        if (e.target.parentElement.parentElement.children[2].children[0].children[1].children[0].type && e.target.parentElement.parentElement.children[3].children[0].children[1].children[0].type === 'password') {
            e.target.parentElement.parentElement.children[2].children[0].children[1].children[0].type = 'text'
            e.target.parentElement.parentElement.children[3].children[0].children[1].children[0].type = 'text'
        }
        else {
            e.target.parentElement.parentElement.children[2].children[0].children[1].children[0].type = 'password'
            e.target.parentElement.parentElement.children[3].children[0].children[1].children[0].type = 'password'
        }
    }



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" style={{ position: 'relative', height: '100vh' }}>
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid onBlur={displayNameBlur} item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Full Name"
                                />
                                {
                                    displayName.error && <p className='error-msg'>{displayName.error}</p>
                                }
                            </Grid>
                            <Grid onBlur={emailBlur} item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                {
                                    email.error && <p className='error-msg'>{email.error}</p>
                                }
                            </Grid>
                            <Grid onBlur={passwordBlur} item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                {
                                    password.error && <p className='error-msg'>{password.error}</p>
                                }
                            </Grid>
                            <Grid onBlur={confirmPasswordBlur} item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="new-password"
                                />
                                {
                                    confirmPassword.error && <p className='error-msg'>{confirmPassword.error}</p>
                                }
                            </Grid>
                            <Grid className='container mt-2 ms-1'>
                                <input type="checkbox" onClick={showPassword} name="showPass" id="showPass" />
                                {checked ? <label className='ms-1' htmlFor="showPass"> Hide password</label> : <label className='ms-1' htmlFor="showPass"> Show password</label>}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel className={agree ? 'text-black' : 'text-danger'}
                                    control={<Checkbox
                                        onClick={(event) => { setAgree(event.target.checked) }}
                                        value="allowExtraEmails" color="primary" />}
                                    label="I agree with terms & condition"
                                />
                                {
                                    notAgree && <p className='text-danger'>{notAgree}</p>
                                }
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        {
                            error && <p className='error-msg'>{error.message}</p>
                        }
                        <Grid container justifyContent="flex-start">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}