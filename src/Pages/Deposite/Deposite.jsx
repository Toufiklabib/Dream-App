import React from 'react';

import './Deposite.css' 
import { Link } from 'react-router-dom';

const Deposite = () => {

    return (
        <div className='body'>
            <header class="diposits">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="diposit-header">
                                <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Diposit</h2>
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
							  <div className="divgetwaynumflex">
                              <div class="app-number-copied">
									<div class="app-logo">
										<img class='getwayimg' src="https://i.ibb.co/3Tmj38L/1656234841bkash-icon-png.webp" alt="" />
									</div>
									<div class="app-details">
										<h3 class="m-0">Bikash:</h3>
										<div class="number-container">
											<span class="numberToCopy">1234567890</span>
											<button class="btn btn-primary copy-button" onclick="copyNumber(this)">Copy</button>
										</div>
										
									</div>
								</div>
						
								<div class="app-number-copied mt-3">
									<div class="app-logo">
										<img class='getwayimg' src="https://i.ibb.co/N6XYWyN/images.png" alt="" />
									</div>
									<div class="app-details">
										<h3 class="m-0">Nagad:</h3>
										<div class="number-container">
											<span class="numberToCopy">01910793694</span>
											<button class="btn btn-primary copy-button" onclick="copyNumber(this)">Copy</button>
										</div>
									
									</div>
								</div>
						
								<div class="app-number-copied mt-3">
									<div class="app-logo">
										<img class='getwayimg' src="https://i.ibb.co/QP1xx1y/eca0e01c109fd83d84035fc0399219e3a9f68665bd6e3893d82447ccacc16f69-200.png" alt="" />
									</div>
									<div class="app-details">
										<h3 class="m-0">Rocket:</h3>
										<div class="number-container">
											<span class="numberToCopy">01929480363</span>
											<button class="btn btn-primary copy-button" onclick="copyNumber(this)">Copy</button>
										</div>
										
									</div>
								</div>
                              </div>
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
											<option value="Cripto">Cripto</option>
										</select>
									</div>
                                    <div class="input-group my-5">
										<input name="amount" id="amounts" placeholder="Phone Number" type="number" />
									</div>
									<div class="input-group my-5">
										<input name="amount" id="amounts" placeholder="Amount" type="number" />
									</div>
									<div class="input-group my-5">
										<input name="transaction" id="transactions" placeholder="Transection ID" type="text" />
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

export default Deposite;