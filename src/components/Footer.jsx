import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="justify-content-center text-white py-4 mt-4" style={{ backgroundColor: '#002147' }}>
                <div className="container">
                    <div className="row text-left">
                        {/* Column 1 */}
                        <div className="col-12 col-md-3 mb-4">
                            <h3>Mart</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
                                id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel
                                ut sollicitudin elit at amet.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="col-12 col-md-3 mb-4">
                            <h3>About Us</h3>
                            <ul className="list-unstyled">
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col-12 col-md-3 mb-4">
                            <h3>Customer Care</h3>
                            <ul className="list-unstyled">
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Track Your Order</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="col-12 col-md-3 mb-4">
                            <h3>Contact Us</h3>
                            <p>
                                70 Washington Square South,<br />
                                New York, NY 10012, United States<br />
                                Email: example@email.com<br />
                                Phone: +1 1234 567 890
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}