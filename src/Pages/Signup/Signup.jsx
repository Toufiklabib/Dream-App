import React, { useContext } from 'react';
import styles from './Signup.module.css'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const { createUser, userprofile, logout } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        if (data.password === data.conpassword) {
            createUser(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);

                    userprofile(data.name, 'null')
                        .then(() => {

                            //  const userInfo ={
                            //    name:data.name,
                            //    email:data.email,

                            //  }


                            reset();
                            logout();
                            navigate('/login');

                        })
                        .catch((error) => {
                            console.log('signuperror', error);

                        })


                })
        }




    };
    return (
        <div>
            <div className={styles.body}>
  
            <div className="body2">
            <div className={styles.container}>
                    <h1 className={styles.signuph1}>SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className={styles.labletag} >UserName:</label>
                        <input className={styles.loginInput} {...register("name", { required: true })} type="text" />
                        {errors.name && <span  >Name Field is required</span>}
                        <label className={styles.labletag} >Email:</label>
                        <input className={styles.loginInput} {...register("email", { required: true })} type="email" id="email" />
                        {errors.email && <span>Email Field is required</span>}
                        <label className={styles.labletag} >Password:</label>
                        <input className={styles.loginInput}  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" />
                        {errors.password && <span>Password Field is required</span>}
                        <label className={styles.labletag} >Confirm Password:</label>
                        <input className={styles.loginInput}   {...register("conpassword", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" />
                        {errors.conpassword && <span>Confirm Password Field is required</span>}
                        <button className={styles.loginButton} type="submit">SignUp</button>
                        {errors.password?.type === "required" && (<p  >Password is required</p>)}
                        {errors.password?.type === "minLength" && (<p  >Password must be 6 character required</p>)}
                        {errors.password?.type === "maxLength" && (<p  >Password must be less 20 is required</p>)}
                        {errors.password?.type === "pattern" && (<p  >Password must be one lowercase letter ,uppercase letter,two minimum 2 digit ,one special character </p>)}
                        <p className='label-text' > You have only an account?  <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>

                
            </div>
        </div>
    );
};

export default Signup;