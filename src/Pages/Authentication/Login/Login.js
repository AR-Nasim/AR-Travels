import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2 className="title">Please Login with Google </h2>
            <button onClick={handleGoogleLogin} className="btn btn-custom"><i class="fab fa-google text-warning"></i> Google Sign In</button>
        </div>
    );
};

export default Login;