import React from 'react';
import './CHistory.css'
import { Link } from 'react-router-dom';
const CHistory = () => {
    return (
        <div>
        <div class='body' >
        <header class="diposits">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="diposit-header">
                            <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Cashout History</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <table class='commisiontable'>
           
            <thead>
                <tr>
                    <th>TRX</th>
                    <th>GETEWAY</th>
                    <th>AMOUNT</th>
                    <th>CHARGE </th>
                    <th>STSTUS</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Apple</td>
                    <td>Red</td>
                    <td>$1.00</td>
                    <td>Apple</td>
                    <td>Red</td>
                    <td>$1.00</td>
                  
                </tr>
              
            </tbody>
        </table>


    </div>
    </div>
    );
};

export default CHistory;