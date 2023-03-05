import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const name = user?.displayName;

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Successfully Log Out')
            })
            .catch(error => console.log(error))
    }

    const cartstate = useSelector(state => state.CartReducers)
    console.log(cartstate.cartItems);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            {
                                user?.uid ? <div className='flex justify-center items-center'><li><Link onClick={handleLogout} to="/">Log Out</Link></li> </div> : <div><li><Link to="/login">Log In</Link></li></div>
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Easy Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        {
                            user?.uid ? <div className='flex justify-center items-center'><li><Link onClick={handleLogout} to="/">Log Out</Link></li> </div> : <div><li><Link to="/login">Log In</Link></li></div>
                        }
                    </ul>
                </div>
                <div className='flex justify-center items-center'>

                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{cartstate.cartItems.length}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{cartstate.cartItems.length}Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            user?.uid ? (<div className="navbar-end">
                                <Link className="btn">{name}</Link>
                            </div>) : (<div className="navbar-end">
                                <Link className="btn">User Name</Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;