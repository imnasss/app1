import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        navigate('/main');
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
                        <input type="text" name="username" placeholder="Enter your username" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Enter password" />
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

