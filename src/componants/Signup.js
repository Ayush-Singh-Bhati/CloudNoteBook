import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../cssModules/LoginSignup.module.css'

export const Signup = (props) => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const [eye, seteye] = useState(true);
    const [type, settype] = useState("password");
    let navigate = useNavigate()




    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call
        // const { name, email, password } = credentials;
        if (credentials.password === credentials.cpassword){
        const response = await fetch(`https://cloud-note-book-olive.vercel.app/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {

            localStorage.setItem("token", json.authToken);
            navigate('/')
            props.showalert("User created Successfully" , "success");
        }
        else {
           props.showalert("Invalid Details" , "danger");
        }
    }
    else{
        props.showalert("Please Enter the same Password" , "warning");
    }
    }




    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }




    const ToggleEye= () =>{
        if (type==="password"){
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
            <h1 className={style.heading}>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className={`form-control ${style.input}`} id="name" name='name' onChange={onChange} value={credentials.name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className={`form-control ${style.input}`} id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={`mb-3 ${style.password}`}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type={type} className={`form-control ${style.input}`} id="password" name='password' onChange={onChange} value={credentials.password}  minLength={5} required/>
                    <i onClick={ToggleEye} className={`fa-regular ${eye ? "fa-eye" :"fa-eye-slash"}  ${style.eyecss}`}></i>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className={`form-control ${style.input}`} id="cpassword" name='cpassword' onChange={onChange} value={credentials.cpasswordpassword} minLength={5} required />
                </div>

                <button type="submit" className={`btn btn-success ${style.submit}`}>Submit</button>
            </form>
        </div>
    )
}
