import React from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {
                    this.state.isLoggedIn ? (
                        <div>
                            <form>
                                <label for="Username">Username:</label>
                                <input type="text" id="Username" name="username" value="Username"></input>
                                <label for="Password">Password:</label> 
                                <input type="password" id="Password" name="Password" value="Password"></input>
                            </form>
                            <button onClick={() => this.handleSignOut()}>
                                {this.state.isLoggedIn}Sign out</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => this.handleSignIn()}>
                                {this.state.isLoggedIn}Sign in</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default NavBarForm;