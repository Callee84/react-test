import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimpleHtml extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'Please Log in',
            buttonText: "Log In"
        };
    }


    handleClick() {
    this.setState((prevState, prevProps) => {
        console.log('Previous state', prevState)
        console.log('Previous props', prevProps)
        return {
            form: prevState.form === "Hello Guest!" ? "Welcome back, User!": "Hello Guest!",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
        }
    })
    }

    render() {
        return (
            <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <span>
            {this.state.form}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </span>
            </div>
     )
    }

}

export default NavBarSimpleHtml;