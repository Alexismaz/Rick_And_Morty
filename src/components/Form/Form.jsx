import React, {useState} from "react";
import "./Form.css"
import { validator } from "./validation";
import fondoForm from "../../Images/imagen_2023-06-16_115854145-removebg-preview.png"

export default function Form({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setUserData({...userData, 
            [event.target.name]: event.target.value})
        const error = validator(userData)
            setErrors(error)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    return (
        <div className="fondoForm">
        <form className="form" onSubmit={handleSubmit}>
            <div className="img2">
                <img src={fondoForm} alt="" />
            </div>
            <label className="email">Email</label>
            <input className="emailIn" autocomplete="off" placeholder="Ejemplo@hotmail.com" type="text" name="email" onChange={handleChange} value={userData.email} key="email1" />
            <label className="emailError">{errors?.email && errors.email}</label>
            <label className="pass">Password</label>
            <input className="passIn" placeholder="Password123..." type="password" name="password" onChange={handleChange} value={userData.password} key="password1" />
            <label className="passError" >{errors?.password && errors.password}</label>
        <button className="submit" type="submit">Submit</button>
        </form>
        </div>
    )
}