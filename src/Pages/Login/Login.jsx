import React, { useContext, useState } from 'react';
import styles from './Login.module.css'
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const [loginError , setloginError] = useState('') ;
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const address = location.state?.from?.pathname || "/";
   
    const { register, handleSubmit, reset, formState: {  } } = useForm();
    const onSubmit = data => {
      setloginError('');
        signIn(data.email,data.password)
        .then((result)=>{
          const user = result.user;
          console.log(user);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
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
          navigate(address, { replace: true });
          reset();
          
        })
        .catch((error) => {
            if(error.message)
              {
                setloginError('Please Valid User Name and Password')
              }
        });

       }
       

    
  

    return (
        <div className={styles.body}>
          
          <div className={styles.body2}>
          <div className={styles.container}>
                <h1 className={styles.signuph1}>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}   >  
                    <label className={styles.labletag} >Email:</label>
                    <input className={styles.loginInput} {...register("email", { required: true })}  type="email"  placeholder='Enter Your Email:'  required />
                  
                    <label className={styles.labletag} >Password:</label>
                    <input className={styles.loginInput}  {...register("password", { required: true })}  type="password" placeholder='Enter Your Password:'  required  />
                    {loginError   && <span className={styles.manualError} >{loginError}</span>}
                    <button  className={styles.loginButton} type="submit">Login</button>
                    <p className={styles.label} > Don't have an account?  <Link to='/signup'>Sign Up</Link></p>
                </form>
                <p className={styles.label} >   <Link to='/forgot'>Forgot your password?</Link></p>
            </div>
          </div>
        </div>
    );
};

export default Login;
