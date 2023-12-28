// client/src/components/Header/Header.js
import React from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaPhone, FaUser, FaShoppingCart } from 'react-icons/fa';
// import { AiFillTiktok } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">MyStore</Link>
            </div>
            <div className="contact-info">
                <div className="contact-item">
                    <FaWhatsapp />
                </div>
                <div className="contact-item">
                    <FaPhone />
                    <span>XXX-XX-XX-XX</span>
                </div>
                <div className="contact-item">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                </div>
            </div>
            <div className="user-actions">
                <Link to="/login">Log/Reg</Link>
                <Link to="/profile">
                    <FaUser />
                </Link>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default Header;
