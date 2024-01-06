"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PiSlackLogo } from "react-icons/pi";

const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 1);
            setPrevScrollPos(currentScrollPos);
        };

        setPrevScrollPos(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (

        <header className={`nav-header  ${visible ? 'navbar-scroll-down' : 'navbar-scroll-up'} `}>
            <nav className={`navbar sticky-top`}>
                <div className="d-flex justify-content-between w-100">
                    <div className="logo"><PiSlackLogo size={40} color={'#64ffda'} /></div>
                    <div className="list d-flex align-items-center">
                        <ol className=''>
                            <li className='nav-items'>
                                <Link href={'#about'}>About</Link>
                            </li>
                            <li className='nav-items'>
                                <Link href={'#about'}>Expirences</Link>
                            </li>
                            <li className='nav-items'>
                                <Link href={'#about'}>Work</Link>
                            </li>
                            <li className='nav-items'>
                                <Link href={'#about'}>Contact</Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;
