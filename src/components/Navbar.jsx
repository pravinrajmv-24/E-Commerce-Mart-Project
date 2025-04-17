import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import achieversLogo from '../assets/Images/AchieversIT logo.png';
import { AppContext } from '../App';

export default function Nav() {
    const { cart } = useContext(AppContext);

    return (
        <header>
            <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
                <div className="container-fluid px-5">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src={achieversLogo}
                            alt="Mart Logo"
                            style={{ width: '100px', height: '50px', }}
                        />
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex align-items-center gap-lg-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fs-4 fw-bold px-2">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link fs-4 fw-bold px-2">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link fs-4 fw-bold px-2">
                                    Cart
                                </Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
                            <FontAwesomeIcon icon={faUser} className="fa-2x" style={{ cursor: 'pointer' }} />
                            <Link to="/cart" className="position-relative">
                                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x text-dark" style={{ cursor: 'pointer' }} />
                                <span
                                    className="position-absolute top-0 start-100 translate-middle rounded-pill"
                                    style={{
                                        fontSize: '0.75rem',
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        lineHeight: '1.5rem',
                                        textAlign: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        backgroundColor: 'rgb(0,71,171)'
                                    }}
                                >
                                    {Object.keys(cart).length}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
