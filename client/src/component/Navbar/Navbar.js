import React from 'react'
import logo from '../../assets/logo.png'
import { Ri24HoursFill, RiMenuFill } from 'react-icons/ri';
import { CiCalendarDate } from 'react-icons/ci';
import { FaFacebookF, FaYelp, FaPinterestP, FaInstagram } from 'react-icons/fa';

import './styles.css'

function Navbar() {
    return (
        <section className='Navbar'>
            <button><RiMenuFill size={24} /></button>
            <div className='top-nav'>
                <img src={logo} alt='logo' />
                <div className='hours'>
                    <div className='hour-wrapper'>
                        <Ri24HoursFill size={36} />
                        <div className='time'>
                            <p>999-999-9999</p>
                            <span>24/7 Emergency Phone</span>
                        </div>
                    </div>
                    <div className='hour-wrapper'>
                        <CiCalendarDate size={36} />
                        <div className='time'>
                            <p>Monday - Friday</p>
                            <span>9AM - 5PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul className='nav-left'>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>TEAM</li>
                    <li>APPOINTMENT</li>
                    <li>CONTACT</li>
                </ul>
                <ul className='nav-right'>
                    <li><FaFacebookF /></li>
                    <li><FaYelp /></li>
                    <li><FaPinterestP /></li>
                    <li><FaInstagram /></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar