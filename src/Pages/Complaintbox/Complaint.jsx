import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Complaint.css'
import { AuthContext } from '../../Context/AuthProvider';
const Complaint = () => {


    const {user} = useContext(AuthContext);

    return (
        <div className='body'>
        <header class="diposits">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="diposit-header">
                            <Link to='/'><i class="bi bi-chevron-left"></i></Link> <h2>Complaint</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        

        <div className="conplaintfrom">
            <form   >
            <div className="complaintdiv1">
                <label >  <span>Name</span>
                <input  defaultValue={user?.displayName} className='complaininput' type="text" name="" id="" />
                </label>
             
                <label > <span>Email</span>   <input className='complaininput' defaultValue={user?.email}  type="email" name="" id="" /></label>
          
            </div>
            <div className="complaintdiv1">
                <label >  <span>Subject</span>
                <input className='complaininput' type="text" name="" id="" />
                </label>
             
                <label > <span>Priority</span>
                   <select id="method"  className='complaininput'  >
											<option value="High">High</option>
											<option value="Medium">Medium</option>
											<option value="Low">Low</option>
											
										</select></label>
          
            </div>

            <label> 
                <span className='complanspan'>Massage</span>
            <textarea className='complaintarea' name="" id="">

            </textarea>
            </label>
            
           
           <input className='complainfile' type="file" name="" id=""  placeholder='Choose File' />
           
           <button type='submit' className='complainbutton' >Submit</button>

            </form>
        </div>
       


    </div>
    );
};

export default Complaint;