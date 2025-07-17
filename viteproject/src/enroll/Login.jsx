import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../hooks/useDocs';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        const success = await checkLogin(username,password);
        if(success){
            navigate('/main');
        }else{
            setError('Incorrect username or password')
        }

    }

    return (
    <div className="login-page">
        <div className="image-section">
            <img src="" alt="" />
        </div>

        <div className="pirveli">
            <div className="meore">
                <h2>Instagram</h2>
                <form id="form" onSubmit={handleLogin}>
                    <div>
                        <input 
                        type="text" 
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    </div>
                    <button type="submit">Login</button>
                    <p><a href="/register">Don't have an account? Sign up</a></p>
                </form>
            </div>
        </div>
    </div>
)

}

export default Login;

