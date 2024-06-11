import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCopy } from "react-icons/fa6";
import './Job.css'
import { AuthContext } from '../../Context/AuthProvider';
const Job = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className='body'>
              <header class="diposits">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="diposit-header">
                                <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Job</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          <div className='jobcontent'>
            <h6>My Referrals Referral Link</h6>
          </div>
          <form  className='refflex' >
          <input type="text" className='jobinput' readOnly defaultValue={`https://www.ustearn.com/register/${user.displayName}`}  />
          <button className='refbutton' ><FaCopy size={15} /></button>
          </form>



        </div>
    );
};

export default Job;