import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../cssModules/LoginSignup.module.css'

export const Login = (props) => {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
     const [eye, seteye] = useState(true);
     const [type, settype] = useState("password");
    let navigate = useNavigate()




    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        
        if (json.success) {
            // Save the authToken and redirect it
            localStorage.setItem("token", json.authToken)
            props.showalert("User Logged in Successfully", "success")
            navigate('/')
        }
        else {
            props.showalert("Invalid Credentials", "danger");
        }
    }






    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }







    const ToggleEye= () =>{
        if (type=="password"){
            seteye(false);
            settype('text')
        }
        else{
            seteye(true);
            settype('password');
        }
    }








    return (
        <div className={style.main}>
            <h1 className={style.heading}>Login Your Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email"  className={`form-control ${style.input}`} id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={`mb-3 ${style.password}`}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type={type}  className={`form-control ${style.input}`} id="password" name='password' onChange={onChange} value={credentials.password}  autoComplete=''/>
                    <i onClick={ToggleEye} className={`fa-regular ${eye ? "fa-eye" :"fa-eye-slash"}  ${style.eyecss}`}></i>
                </div>

                <button type="submit" className={`btn btn-success ${style.submit}`}>Submit</button>
            </form>
        </div>
    )
}
