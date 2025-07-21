import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
import ISO from '../assets/ISO.png';
import Lion from '../assets/Lion.png';

const navItems = [
    "Industrial wire & cable machinery",
    "Enablement",
    "Component",
    "Royle",
    "Knowledge Hub"
];

const Header = () => {
    return (
        <header className="bg-white border-bottom shadow-sm py-2">
            <div className="container-fluid pe-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={Logo} alt="Logo" height="40" />
                    </div>

                    <nav className="d-flex align-items-center gap-3">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                className="text-dark text-decoration-none small fw-medium px-2 position-relative overflow-hidden"
                                style={{ display: "inline-block", height: "1.5em" }}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.span
                                    variants={{
                                        initial: { y: 0 },
                                        hover: { y: "-100%" },
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="d-block"
                                >
                                    {item}
                                </motion.span>
                                <motion.span
                                    variants={{
                                        initial: { y: "100%" },
                                        hover: { y: 0 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="d-block position-absolute start-0 text-danger"
                                    style={{ top: 0 }}
                                >
                                    {item}
                                </motion.span>
                            </motion.a>
                        ))}
                    </nav>

                    <div className="d-flex align-items-center bg-danger text-white px-3 py-1 " style={{
                        clipPath: 'path("M0 0 H100 V40 H40 Q0 40 0 24 Z")',
                        height: '40px',
                        width: 'fit-content',
                        backgroundColor: 'red',
                    }}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <img src={ISO} alt="ISO" height="24" />
                            <img src={Lion} alt="Lion" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
