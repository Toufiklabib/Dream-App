import React from 'react';
import { Link } from 'react-router-dom';
import './TotalEarn.css'
const TotalEarn = () => {
    return (
        <div class='body' >
            <header class="diposits">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="diposit-header">
                                <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Total Earn</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <table class='earntable'>
               
                <thead>
                    <tr>
                        <th>SL NO:</th>
                        <th>EARN AMOUNT</th>
                        <th>DATE TIME</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>Red</td>
                        <td>$1.00</td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>Yellow</td>
                        <td>$0.75</td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>Orange</td>
                        <td>$1.25</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default TotalEarn;