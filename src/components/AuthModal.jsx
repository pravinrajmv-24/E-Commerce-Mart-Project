// src/components/AuthModal.jsx
import Login from '../pages/login';
import Signup from '../pages/signup';

export default function AuthModal({ show, mode = 'login', onClose, onSwitchMode }) {
    if (!show) return null;

    const isLogin = mode === 'login';

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content p-3">
                    <div className="modal-header border-0">
                        <h5 className="modal-title">{isLogin ? 'Login' : 'Signup'}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        {isLogin ? <Login onClose={onClose} /> : <Signup onClose={onClose} />}
                    </div>

                    <div className="modal-footer border-0 justify-content-center">
                        <p className="mb-0">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                className="btn btn-link p-1"
                                onClick={() => onSwitchMode(isLogin ? 'signup' : 'login')}
                            >
                                {isLogin ? 'Signup' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}