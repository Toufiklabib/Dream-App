import React, { useContext, useState } from 'react';
import styles from  './Foragte.module.css'
import { Link,  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
const Forgate = () => {
    const {  resetPass } = useContext(AuthContext);
    const [forgateError, setForgateError] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
         setForgateError('');
          resetPass(data.email) 
          .then(() => {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Check Your Gmail Inbox..."
              });
              reset();
          })
          .catch((error) => {
              if(error.message)
                {
                    setForgateError('Please Valid Email');
                }
          });
       }
       




    return (

    
        <div className={styles.body}>
          <div className={styles.body2}>
          <div className={styles.container}>
                <h1 className={styles.signuph1}>Forgot Password</h1>
                <form onSubmit={handleSubmit(onSubmit)}>  
                    <label className={styles.labletag} >Email:</label>
                    <input className={styles.loginInput} {...register("email", { required: true })}  type="email" placeholder='Enter Your Valid Email'    required  />
                    {errors.email && <span>Email Field is required</span>}
                    <button  className={styles.loginButton} type="submit">Submit</button>
                    {forgateError &&  <span className={styles.manualError} >{forgateError}</span> }
                    <p className={styles.label} > Don't have an account?  <Link to='/signup'>Sign Up</Link></p>
                </form>
            </div>
          </div>
        </div>
    );
};

export default Forgate;