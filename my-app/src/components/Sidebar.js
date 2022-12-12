import React from "react";
import css from "./css/Sidebar.module.css"

// function FunctionalGreeting() {
//  return <h1>Hello from React!</h1>
// }

const Sidebar = () => <div className={css.sidebar}> <a>My Photos</a> <a>My Illustrations</a> <a>My Paintings</a></div>

export default Sidebar;