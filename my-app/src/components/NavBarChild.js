import React from 'react'
import css from "./css/NavBarForm.module.css"

function NavBarChild(props) {
  return (
    <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {props.isLoggedIn ? (
            <div>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username"></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password"></input>
                </form>
                <button onClick={props.handleSignOut}>Submit</button>
            </div>

        ): (
            <div>

                <button onClick={props.handleSignIn}>Login</button>

            </div>
        )
    }
    </div>
  )
}

export default NavBarChild