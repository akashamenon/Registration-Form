import React from 'react';
import './LoginPage.css';


const LoginPage = () => {
  
    const message=()=>
    {
      
        console.log(" Login Successfull");
    }
     return (
        <div class="container">
      <form id="login-form" action="/">
        <h1>Login</h1>
        <div class="input-control">
          <label for="username">Username</label
          ><input id="username" name="username" type="text" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="email">Email</label
          ><input id="email" name="email" type="text" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="password">Password</label
          ><input id="password" name="password" type="password" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="password2">Password again</label
          ><input id="password2" name="password2" type="password" />
          <div class="error"></div>
        </div>
         <button type="submit" onSubmit={message()}>Sign Up</button> 
      </form>
    </div>
     );
     }
     
             
             
             
export default LoginPage
