import React, { useContext } from 'react';

import './EarnSection.css'
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const EarnSection = () => {

	const { logout } = useContext(AuthContext);

	const handelLogout = () => {
		logout();
	}

	return (
		<div className='body' >
			<section className="m-0 p-0">
				<div className="container">
					<div className="shadow-area">
						<div className="row">
							<div className="col-12">
								<div className="all-content">
									<div className="withicon">
										<a href="/deposit.html">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn-icons-png.flaticon.com/512/3936/3936019.png" className='iconImgCss' />
												</div>
												<span>Pay</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<a href="">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://static.vecteezy.com/system/resources/previews/013/484/033/original/digital-payment-3d-icon-png.png" className='iconImgCss' />
												</div>
												<span>Payment</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<a href="/profile.html">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png" className='iconImgCss' />
												</div>
												<span>Profile</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<a href="/Index.html">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://png.pngtree.com/png-vector/20230409/ourmid/pngtree-password-icon-vector-png-image_6696962.png" className='iconImgCss' />
												</div>
												<span>Password</span>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div className="background-img">
								<img src="https://d1bdmzehmfm4xb.cloudfront.net/optimized/3X/5/5/551c7890dbe566d8ed8092cdbec2120907b4e6ed_2_800x333.gif" alt="" />
							</div>

							<div className="col-12 mt-2">
								<div className="all-content">
									<div className="withicon">
										<a href="">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn-icons-png.flaticon.com/128/9489/9489998.png" className='iconImgCss' />
												</div>
												<span>Complain</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<a href="">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn-icons-png.flaticon.com/512/1802/1802636.png" className='iconImgCss' />
												</div>
												<span>CHistory</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<a href="">
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn-icons-png.flaticon.com/512/5180/5180799.png" className='iconImgCss' />
												</div>
												<span>DHistory</span>
											</div>
										</a>
									</div>
									<div className="withicon">
										<Link onClick={handelLogout}>
											<div className="iconPage">
												<div className="icon-area">
													<img src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png" className='iconImgCss' />
												</div>
												<span>Logout</span>
											</div>
										</Link>
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

export default EarnSection;