import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/socialIcon/google.png'
import facebookLogo from '../../../images/socialIcon/facebook.png'
import githubLogo from '../../../images/socialIcon/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css';


const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    const from = location?.state?.from?.pathname || '/';

    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container'>
            <div className='or'>
                <div className='or-divider'></div>
                <div className='or-text'>or</div>
                <div className='or-divider'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className="btnGroup"><img className='social-logo' src={googleLogo} alt="" /> <span>Continue with Google</span></button> <br />
            <button onClick={() => signInWithFacebook()} className="btnGroup"><img className='social-logo' src={facebookLogo} alt="" /> <span>Continue with Facebook</span></button> <br />
            <button onClick={() => signInWithGithub()} className="btnGroup"><img className='social-logo' src={githubLogo} alt="" /> <span>Continue with Github</span></button>
        </div>
    );
};

export default SocialLogin;