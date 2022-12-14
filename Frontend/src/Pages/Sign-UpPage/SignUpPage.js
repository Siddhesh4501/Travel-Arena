import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import './SignUpPage.css';

const SignUpPage = (props) => {
    const { setLists } = props;
    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: "",
        stay: "",
        description: "",
        contactno: "",
        interests: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup_api = () => {
        const { name, email, password, reEnterpassword, stay, description, contactno, interests } = user
        if(password.length<6 || reEnterpassword.length<6){
           alert("Enter password having length greater that 6");
           return;
        }
        if(contactno-0>9999999999 || contactno-0<1000000000){
            alert("Enter Valid contact number");
             return;
        }
        if (name && email && password && (password === reEnterpassword) && stay && description && contactno && interests) {
            axios.post("https://travelarena.herokuapp.com/signup", user)
                .then(res => alert(res.data.message))
            userupdated();
            history.push("/login")
        }
        else {
            alert("Invalid input")
        }

    }
    const userupdated = () => {
        axios.get('https://travelarena.herokuapp.com/userslist')
            .then(res => setLists(res.data))
            .catch(error => console.log(error));
        console.log("userupdatedcalled");
    }

    return (
        <div className="signup">
            <h1 className='signupHeading'>Sign Up</h1>
            <div className='club'>
                <input className='inputClass' type="text" name="name" value={user.name} placeholder='Your name' onChange={handleChange}></input>
                <input className='inputClass' type="text" name="email" value={user.email} placeholder='Your email' onChange={handleChange}></input>
            </div>
            <div className='club'>
                <input className='inputClass' type="password" name="password" min="5" max="999" value={user.password} placeholder='Your password' onChange={handleChange}></input>
                <input className='inputClass' type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder='Re-enter password' onChange={handleChange}></input>
            </div>
            <div className='club'>
                <input className='inputClass' type="number" name="contactno" value={user.contactno} placeholder='Your contact no.' onChange={handleChange}></input>
                <input className='inputClass' type="text" name="stay" value={user.stay} placeholder='Where are you from?' onChange={handleChange}></input>
            </div>
            <div className='club'>
                <textarea className='inputClass' type="text" name="description" value={user.description} placeholder='Describe yourself' onChange={handleChange}></textarea>
                <textarea className='inputClass' type="text" name="interests" value={user.interests} placeholder='Describe your interests' onChange={handleChange}></textarea>
            </div>
            <button className="button" onClick={signup_api}>Signup</button>
            <div className='divOR'>or</div>
            <button className="button" onClick={() => history.push("/login")}>Login</button>
        </div>
    );
};

export default SignUpPage;