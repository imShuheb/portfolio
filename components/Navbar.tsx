"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PiSlackLogo } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [sideNav, setSideNav] = useState(false)

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
            <nav className={`navbar sticky-top d-none d-sm-block`}>
                <div className="d-flex justify-content-between w-100">
                    <div className="logo"><PiSlackLogo size={40} color={'#FFDB58'} /></div>
                    <div className="list d-flex align-items-center">
                        <ol>
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

                        <div className="scale-trans">
                            <Link href={'/'} className='button'>Resume </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile View */}
            <nav className={`navbar sticky-top d-block d-sm-none`}>
                <div className="d-flex justify-content-between w-100 px-1 py-0">
                    <div className="logo"><PiSlackLogo size={40} color={'#FFDB58'} /></div>

                    <button className="clearbtn" onClick={() => setSideNav(!sideNav)}>
                        {!sideNav ?
                            <FiMenu size={30} />
                            :
                            <IoClose size={30} />
                        }
                    </button>
                </div>
            </nav>

            <aside className={`mobile-menu ${sideNav ? ' open' : ''}`} >
                <nav className='navbar'>
                    <div className="list ">

                        <ol className='d-flex flex-column'>
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

                        <div className="d-flex justify-content-center w-100 m-3">
                            <div className="scale-trans">
                                <Link href={'/'} className='button m-0 px-5 py-3'>Resume </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </header>

    );
};

export default Navbar;
