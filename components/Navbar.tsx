import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PiSlackLogo } from 'react-icons/pi';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Logo from '../public/letter.svg'

const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const [sideNav, setSideNav] = useState<boolean>(false);
    const [iconRotation, setIconRotation] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 1);
        setPrevScrollPos(currentScrollPos);
    };

    const closeSideNav = () => {
        setSideNav(false);
    };

    useEffect(() => {
        setPrevScrollPos(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    useEffect(() => {
        const content = document.getElementById('content');
        content?.classList.toggle('blur', sideNav)
        document.body.classList.toggle('overflow-hidden', sideNav)
    }, [sideNav]);


    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'jobs', label: 'Experiences' },
        { id: 'projects', label: 'Work' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className={`nav-header ${visible ? 'navbar-scroll-down' : 'navbar-scroll-up'}`}>
            <nav className="navbar sticky-top d-none d-sm-block">
                <div className="d-flex justify-content-between w-100">
                    <div className="logo fade-in">
                        {/* <PiSlackLogo size={40} color={'#00f6fb'} /> */}
                        <Image src={Logo} height={40} width={40} unoptimized alt='logo' />
                    </div>
                    <div className="list d-flex align-items-center">
                        <ol>
                            {navItems.map((item) => (
                                <li key={item.id} className="nav-items fade-in">
                                    <Link href={`#${item.id}`}>{item.label}</Link>
                                </li>
                            ))}
                        </ol>
                        <div className="scale-trans fade-in">
                            <a href='MohammedShuheb.pdf' className="button" target='_blank'>
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile View */}
            <nav className="navbar sticky-top d-block d-sm-none">
                <div className="d-flex justify-content-between w-100 px-1 py-0">
                    <div className="logo">
                        <PiSlackLogo size={30} color={'#00f6fb'} />
                    </div>
                    <button
                        className={`clearbtn ${sideNav ? 'rotate-icon rotate180' : 'rotate-icon'}`}
                        onClick={() => {
                            setSideNav(!sideNav);
                        }}
                    >
                        {sideNav ? (
                            <span className='px-2'>
                                <IoClose size={23} />
                            </span>
                        ) : (
                            <FiMenu size={20} />
                        )}
                    </button>


                </div>
            </nav>

            {/* Mobile Menu */}
            <aside className={`mobile-menu${sideNav ? ' open' : ''}`}>
                <nav className="navbar">
                    <div className="list">
                        <ol className="d-flex flex-column">
                            {navItems.map((item) => (
                                <li key={item.id} className="nav-items fade-in">
                                    <Link href={`#${item.id}`} onClick={closeSideNav}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                        <div className="d-flex justify-content-center w-100 m-3">
                            <div className="scale-trans fade-in">
                                <a href='MohammedShuheb.pdf' className="button" target='_blank'>
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;
