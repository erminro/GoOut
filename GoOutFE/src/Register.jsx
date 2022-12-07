import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <div className = "g">
                <b>G</b>
            </div>
            <h2>Go Out <br/> Timisoara</h2>
            Register
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="name" />
            <label htmlFor="surname">Surname</label>
            <input value={surname} onChange={(e) => setSurname(e.target.value)} name="surname" id="surname" placeholder="surname" />
            <label htmlFor="age">Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min = "1" max="150" id="age" placeholder="age" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="Email" name="Email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="Password" name="Password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}