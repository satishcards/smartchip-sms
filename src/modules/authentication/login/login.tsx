import { Link, useNavigate } from 'react-router-dom';

/**
 * 
 * Login Component
 */
export const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/')
    }
    return <button onClick={() => login()}>Login</button>
}