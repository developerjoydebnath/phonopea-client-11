import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import SearchBar from '../../Home/Search/SearchBar/SearchBar';
import userLogo from '../../../images/header/user.png'
import './Header.css';
import { FiLogOut } from "react-icons/fi";
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">PhoneOpea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'activeBottom ' : 'bottomBorder'}>
                                Home
                            </NavLink>
                            <NavLink to="/phones" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                Phones                            </NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                Blogs
                            </NavLink>
                            {
                                user && <>
                                    <NavLink to="/addPhone" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                        Add Phone
                                    </NavLink>
                                    <NavLink to="/myInventory" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                        My Inventory
                                    </NavLink>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {user ?

                                <>
                                    <NavLink to="/profile" className='bottomBorder'>
                                        {
                                            user?.photoURL === null ?
                                                <><img className="userImg" title="Username" src={userLogo} alt="" /> {user.displayName}</>
                                                :
                                                <><img className="userImg" title="Username" src={user.photoURL} alt="" /> {user.displayName}</>
                                        }
                                    </NavLink>
                                    <NavLink to="#" onClick={() => signOut(auth)} className='bottomBorder'>
                                        Signout
                                    </NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/signup" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                        SignUp
                                    </NavLink>
                                    <NavLink to="/login" className={({ isActive }) => isActive ? 'activeBottom' : 'bottomBorder'}>
                                        Login
                                    </NavLink>
                                </>


                            }
                            <SearchBar />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
