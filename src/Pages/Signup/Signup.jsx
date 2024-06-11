import React, { useContext, useState } from 'react';
import styles from './Signup.module.css'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { createUser, userprofile, logout } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        if (data.password === data.conpassword) {

            setError('');
            createUser(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);

                    userprofile(data.name, 'null')
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
                                title: "Signed in successfully"
                              });


                            reset();
                            logout();
                            navigate('/login');

                        })
                        .catch((error) => {

                           
                            
                        })


                })
                .catch((error) => {

                    console.error('signupError', error);
                    if (error.message) {
                        setError('This Email Already In Use');
                    }
                })
        }
        else{
            setError('Password Not Match');
        }


    };
    return (
        <div>
            <div className={styles.body}>

                <div className={styles.body2} >
                    <div className={styles.container}>
                        <h1 className={styles.signuph1}>SignUp</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <label className={styles.labletag} >Name:</label>
                            <input className={styles.loginInput} {...register("name", { required: true })} type="text" placeholder='Enter Your Name:'  required/>
                            <label className={styles.labletag} >Email:</label>
                            <input className={styles.loginInput} {...register("email", { required: true })} type="email" id="email" placeholder='Enter Your Email:' required />
                            <label className={styles.labletag} >Password:</label>
                            <input className={styles.loginInput}  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password"  placeholder='Enter Your Password:' required />
                            <label className={styles.labletag} >Confirm Password:</label>
                            <input className={styles.loginInput}   {...register("conpassword", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password"  placeholder='Enter Your Confirm Password:' required />
                            {errors.password?.type === "required" && (<p className={styles.manualError} >Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className={styles.manualError}  >Password must be 6 character required</p>)}
                            {errors.password?.type === "maxLength" && (<p className={styles.manualError} >Password must be less 20 is required</p>)}
                            {errors.password?.type === "pattern" && (<p className={styles.manualError}  >Password Must be One Lowercase Letter ,Uppercase Letter,Two Minimum 2 digit ,One Special Character </p>)}
                            {error && <p  className={styles.manualError}  >{error}</p>}
                            <button className={styles.loginButton} type="submit">SignUp</button>
                            
                            <p className='label-text' > You have only an account?  <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Signup;