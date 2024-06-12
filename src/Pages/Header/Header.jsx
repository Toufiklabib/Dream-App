import React, { useContext } from 'react';
import './Header.css'
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='body'>
            <header className="header">
                <div className="container">
                   { user ? <>   <div className="row">
                        <div className="username">
                            <h3 className='' >{user.displayName}</h3>
                        </div>
                        <div className="header-info">
                            <div className="thumbnils-img">
                                <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="" />
                            </div>
      
                            <div className="check-balance">
                                <div className="balance-icons">
                                    <div className="balance-icon">
                                        <i className="bi bi-currency-dollar icon-style"></i>
                                        <span className="balancebar">Tap for Balance</span>
                                        <div className="balance-amount" id="balanceAmounts">3000 BDT</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></> : 
                    <>
                       <div>
                        <h1 className='companyName'>Dream Global International</h1>
                         <div className='btn-group'>
                         <Link to='/login' ><button className="button-41" >LogIn</button></Link>
                         <Link to='/signup' ><button className="button-41">Signup</button></Link>
                         </div>
                       </div>
                    </>}
                </div>

            </header>
        </div>
    );
};

export default Header;