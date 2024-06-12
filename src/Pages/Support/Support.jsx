import React from 'react';
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Support.css'
const Support = () => {
    return (
        <div className='body'>
             <header class="diposits">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="diposit-header">
                                <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Support</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


         <div className="complan1">
            <Link to='/complaint' > <button className='complanbtn'><FiPlus size={20} />New Tricket </button></Link>
         </div>

         <div>
         <table class='earntable'>
               
               <thead>
                   <tr>
                       <th>SUBJECT:</th>
                       <th>STATUS</th>
                       <th>LAST REPLY</th>
                       <th>ACTION</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Apple</td>
                       <td>Red</td>
                       <td>$1.00</td>
                       <td>Banana</td>
                   </tr>
                 
               </tbody>
           </table>


         </div>

        </div>
    );
};

export default Support;