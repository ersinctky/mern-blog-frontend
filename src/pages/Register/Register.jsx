import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email" />
        <label id="password">Password</label>
        <input className="registerInput" type="password" id="password" placeholder="Enter your password" />
        <label id="password2">Password</label>
        <input className="registerInput" type="password" id="password2" placeholder="Enter your password again" />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
    </div>
    )
}