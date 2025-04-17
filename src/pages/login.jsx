import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function Login({ onClose }) {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        userInput: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate API delay
        setTimeout(() => {
            if (
                credentials.userInput === 'john@example.com' &&
                credentials.password === '123456'
            ) {
                const fakeUser = {
                    name: 'John Doe',
                    email: 'john@example.com',
                };
                dispatch(login(fakeUser));
                alert('Login successful 🎉');
                setLoading(false);
                onClose?.();
            } else {
                setError('Invalid credentials. Please try again.');
                setLoading(false);
            }
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Username / Email / Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    name="userInput"
                    placeholder="Enter username or email or phone"
                    value={credentials.userInput}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3 position-relative">
                <label className="form-label">Password</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="remember"
                        className="form-check-input"
                        checked={credentials.remember}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="text-primary small">Forgot password?</a>
            </div>

            {error && <div className="alert alert-danger py-1">{error}</div>}

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}