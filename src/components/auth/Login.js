import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";


function emailValidation(email){
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@colorado.edu$/i;
  if(regex.test(email) === false){
      return false;
  }
  return true;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  //^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@colorado.edu$
  

  const handleSignIn = (e) => {
    e.preventDefault();
    if(!emailValidation(email)){
      alert("enter colorado mail")
    }
    else{
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
    }
  };

  const registerSignIn = (e) => {
    e.preventDefault();
    if(!emailValidation(email)){
      alert("enter colorado mail")
    }
    else{
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://www.coolgenerator.com/Data/Textdesign/202112/555316ac0f3337690e1a00922a2e432d.png"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place for Buffs to share experiences and better understanding the CU Boulder </p>
          
        </div>
        <div className="login__auth">
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login/Register</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter Colorado Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
