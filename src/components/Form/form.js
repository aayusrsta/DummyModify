import React, { useState } from "react";
import axios from "axios";
import  "./form.css";


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/1",
        { username, password }
      );
      const token = response.data; 
      onLogin(token); 
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("Data==>>", token)

  return (
    <div className="container">
            <h2 style={{color:"gray"}}>User Login</h2>

    <div className="loginCard">
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
      /><br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button type="submit" className="customButton">Login</button>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
