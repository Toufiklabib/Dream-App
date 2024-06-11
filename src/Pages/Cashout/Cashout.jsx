import React from 'react';

import './Cashout.css'
import { Link } from 'react-router-dom';

const Cashout = () => {
    return (
        <div className='body'>
        <header class="diposits">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="diposit-header">
                            <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Cashout</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card shadow">
                <div class="card-body">
                    <div class='divshadow'>
                    <h3>Minimum Investment is 500 BDT, Maximum Investment is 30000 BDT </h3>
                    </div>
                        
                        <div className="gatwaydivshadow">
                        <div  class="container mt-3 getway ">
                        </div>

                        <div class="form mt-5">
                            <div class="transection">

                                <h3 >Enter details of your transactions</h3>
                            </div>

                            <form action="" id="userFormdeposit" class="form-container">
                                <div class="input-group mb-3">
                                    <label class="getwaylabel">Method</label>
                                    <select id="method" class="form-control seletctGetwaymethord">
                                        <option value="Bikash">Bkash</option>
                                        <option value="Nagad">Nagad</option>
                                        <option value="Rocket">Rocket</option>
                                        <option value="Crypto">Crypto</option>
                                    </select>
                                </div>
                                <div class="input-group my-5">
                                    <input class='cashdepInput' name="amount" id="amounts" placeholder="Phone Number" type="number" />
                                </div>
                                <div class="input-group my-5">
                                    <input class='cashdepInput' name="amount" id="amounts" placeholder="Amount" type="number" />
                                </div>
                                <div class="input-group my-5">
                                    <input class='cashdepInput' name="transaction" id="transactions" placeholder="Transection ID" type="text" />
                                </div>
                                <button value="submit" class="submit-btn" type="submit">Submit</button>
                            </form>
                        </div>
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
</div>
</section>


    </div>
    );
};

export default Cashout;