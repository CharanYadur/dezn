import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png'
import iso from '../assets/ISO.png'
import lion from '../assets/Lion.png'



const navItems = [
    "Industrial wire & cable machinery",
    "Enablement",
    "Component",
    "Royle",
    "Knowledge Hub"
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white border-bottom shadow-sm py-2">
            <div className="container-fluid pe-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className=" text-white px-3 py-2 rounded">
                           <img src={logo} alt="" />
                        </div>
                    </div>

                    <nav className="d-none d-md-flex align-items-center gap-3">
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

                    <button
                        className="d-md-none btn btn-outline-dark border-0 p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <motion.div
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            className="d-flex flex-column gap-1"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 6 }
                                }}
                                transition={{ duration: 0.2 }}
                                className="d-block bg-dark"
                                style={{ width: "20px", height: "2px" }}
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                transition={{ duration: 0.2 }}
                                className="d-block bg-dark"
                                style={{ width: "20px", height: "2px" }}
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -6 }
                                }}
                                transition={{ duration: 0.2 }}
                                className="d-block bg-dark"
                                style={{ width: "20px", height: "2px" }}
                            />
                        </motion.div>
                    </button>

                    <div className="d-none d-md-flex align-items-center bg-danger text-white ps-3 pe-0 py-1" 
                         style={{
                             clipPath: 'path("M0 0 H100 V40 H40 Q0 40 0 24 Z")',
                             height: '40px',
                             width: 'fit-content',
                             backgroundColor: 'red',
                         }}
                    >
                        <div className="d-flex justify-content-between align-items-center gap-2">
                            <div className=" text-dark  py-1  rounded-pill small"><img src={iso} width={24} alt="" /></div>
                            <div className=" text-dark  py-1 rounded-pill small"><img src={lion} width={24} alt="" /></div>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="d-md-none overflow-hidden mt-3"
                        >
                            <nav className="d-flex flex-column gap-2 py-3 border-top">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="text-dark text-decoration-none fw-medium px-3 py-2 rounded hover-bg-light"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="d-flex align-items-center justify-content-center gap-2 mt-3 pt-3 border-top"
                                >
                                    <div className="bg-danger text-white px-3 py-2 rounded">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className=" text-dark px-2 py-1 rounded-pill small"><img src={iso} alt="" /></div>
                                            <div className=" text-dark px-2 py-1 rounded-pill small"><img src={lion} alt="" /></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;