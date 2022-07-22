import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './Style';

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className='inner-container'>
                <div className='left-container'>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        Tab Routing
                    </Link>
                </div>
                <div className='right-container'>
                    <ul>
                        <li>
                            <Link className='nav-link-item' to='/page-1'>
                                Page 1
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link-item' to='page-2'>
                                Page 2
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link-item' to=''>
                                Tab 1
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link-item' to=''>
                                Tab 2
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link-item' to=''>
                                Tab 3
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link-item' to='/form'>
                                Form
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </NavbarContainer>
    );
}

export default Navbar;
