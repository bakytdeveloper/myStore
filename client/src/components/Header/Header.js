// // client/src/components/Header/Header.js
// import React from 'react';
// import { FaInstagram, FaTelegram, FaWhatsapp, FaPhone, FaUser, FaShoppingCart } from 'react-icons/fa';
// // import { AiFillTiktok } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import './Header.css';
//
// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo">
//                 <Link to="/">MyStore</Link>
//             </div>
//             <div className="contact-info">
//                 <div className="contact-item">
//                     <FaWhatsapp />
//                 </div>
//                 <div className="contact-item">
//                     <FaPhone />
//                     <span>XXX-XX-XX-XX</span>
//                 </div>
//                 <div className="contact-item">
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram />
//                     </a>
//                 </div>
//                 <div className="contact-item">
//                     <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">
//                         <FaTelegram />
//                     </a>
//                 </div>
//             </div>
//             <div className="user-actions">
//                 <Link to="/login">Log/Reg</Link>
//                 <Link to="/profile">
//                     <FaUser />
//                 </Link>
//                 <Link to="/cart">
//                     <FaShoppingCart />
//                 </Link>
//             </div>
//             <div className="search-bar">
//                 <input type="text" placeholder="Search" />
//             </div>
//         </div>
//     );
// };
//
// export default Header;



// Компонент Header
import React, {useState} from 'react';
import {FaWhatsapp, FaPhone, FaInstagram, FaTelegram, FaUser, FaShoppingCart, FaTiktok} from 'react-icons/fa';
import ins from "./instagram.png";
import tel from "./telegram.png";
import what from "./whatsapp.png";
import tik from "./tik-tok.png";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ products, setFilteredProducts }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        setSearchTerm(searchText);

        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchText) ||
                product.brand.toLowerCase().includes(searchText)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="header">
            <div >
                <Link className="logo" to="/">MyStore</Link>
            </div>
            <div className="contact-info">
                <div className="social-icons">
                    <div className="contact-item">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img className="icon" src={ins} alt="Instagram Icon" />
                    </a>
                    </div>
                    <div className="contact-item">
                    <a  href="https://www.tiktok.com/" target="_blank">
                        <img className="icon" src={tik} alt="tiktok Icon" />
                    </a>
                    </div>
                </div>
                <div className="phone-info">
                    <div className="contact-item">
                        <FaPhone />
                        <span>XXX-XX-XX-XX</span>
                    </div>
                </div>
                    <div className="contact-item">
                        <a href="https://web.whatsapp.com/" target="_blank">
                            <img className="icon" src={what} alt="whatsapp Icon" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="https://web.telegram.org/" target="_blank">
                            <img className="icon" src={tel} alt="telegram Icon" />
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
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
        </div>


    );
};

export default Header;

