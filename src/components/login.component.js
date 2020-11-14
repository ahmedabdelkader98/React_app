import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>
            <label>
                <input type="text" id="email" name="email" required />
                <div class="label-text">Email</div>
            </label>
            <label>
                <input type="password" id="password" name="password" required />
                <div class="label-text">Password</div>
            </label>
                <button type="submit" className="chooses">Sign Up</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}