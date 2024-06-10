import React, { useContext } from 'react';
import styles from './Login.module.css'
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const address = location.state?.from?.pathname || "/";
   
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
           
        signIn(data.email,data.password)
        .then((result)=>{
          const user = result.user;
          console.log(user);
          navigate(address, { replace: true });
          reset();
          
        })
       }
       

    
 

    return (
        <div className={styles.body}>
          
          <div className="body2">
          <div className={styles.container}>
                <h1 className={styles.signuph1}>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}   >  
                    <label className={styles.labletag} >Email:</label>
                    <input className={styles.loginInput} {...register("email", { required: true })}  type="email"  required  />
                    {errors.email && <span>Email Field is required</span>}
                    <label className={styles.labletag} >Password:</label>
                    <input className={styles.loginInput}  {...register("password", { required: true })}  type="password"  required  />
                    {errors.email && <span>Password Field is required</span>}
                    <button  className={styles.loginButton} type="submit">Login</button>
                    <p className='label-text' > Don't have an account?  <Link to='/signup'>Sign Up</Link></p>
                </form>
            </div>
          </div>
        </div>
    );
};

export default Login;
