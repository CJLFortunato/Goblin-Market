import React from 'react';
import './logIn.css';


export function LogInMenu({closeFunc}) {

    const handleSubmit = function(event) {
        event.preventDefault();
        closeFunc(false);
    }


    return(
        <div className="login-menu">
            <h3 className="login-title">Welcome! Please log or sign in.</h3>
            <form>
                <label for="email">E-mail address</label>
                <input id="email" name="email" value="" type="email"></input>
                <label for="password">Password</label>
                <input id="password" name="password" value="" type="password"></input>
                <input type="submit" value="Log In" id="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    );
}