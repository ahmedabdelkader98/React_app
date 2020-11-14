import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Apply</h3>

            <label>
                <input type="text" id="fname" name="fname" required/>
                <div class="label-text">First Name</div>
            </label>
            <label>
                <input type="text" id="lname" name="lname" required />
                <div class="label-text">Last Name</div>
            </label>
            <label>
                <input type="text" id="email" name="email" required />
                <div class="label-text">Email</div>
            </label>
            
            <label>
                <input type="password" id="password" name="password" required />
                <div class="label-text">Password</div>
            </label>
            <label>
                <input type="text" id="phone" name="phone" required />
                <div class="label-text">Phone</div>
            </label>
            <label>
                <input type="text" id="gender" name="gender" required />
                <div class="label-text">Gender</div>
            </label>
            
            <div>
                <input type="file" id="fileupload" name="fileupload" className="choose" />
            </div>
            <br/>
            
                <button type="submit" className="chooses">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}