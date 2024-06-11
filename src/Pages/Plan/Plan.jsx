import React from 'react';
import './Plan.css'
import { Link } from 'react-router-dom';

const Plan = () => {
    return (
        <div className='body'>
            <header class="diposits">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="diposit-header">
                                <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Plan</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
             <div className="allplan">
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP1</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 500 BDT</h2>
                        <p>Daily 1 Ads <br />
                            Daily Income 120 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP2</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 1000 BDT</h2>
                        <p>Daily 2 Ads <br />
                            Daily Income 240 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP3</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 2000 BDT</h2>
                        <p>Daily 5 Ads <br />
                            Daily Income 600 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP4</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 5000 BDT</h2>
                        <p>Daily 13 Ads <br />
                            Daily Income 1560 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP5</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 10000 BDT</h2>
                        <p>Daily 28 Ads <br />
                            Daily Income 3360 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP6</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 20000 BDT</h2>
                        <p>Daily 60 Ads <br />
                            Daily Income 7200 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
             <div class="plancontent">
                <div class="card-header">
                    <h2 class="vip1">VIP7</h2>
                </div>
                <div class="card-body">
                    <div class="body-area">
                        <h2 class="vip1">Price: 25000 BDT</h2>
                        <p>Daily 80 Ads <br />
                            Daily Income 9600 BDT <br />
                            Validity 100 days
                        </p>
                    </div>
                   
                </div>
                <div class="card-footer ">
                        <button value="submit" class="planButton" type="submit">BUY NOW</button>
                </div>
            </div>
         
           
             </div>
            



        </div>
       
    );
};

export default Plan;