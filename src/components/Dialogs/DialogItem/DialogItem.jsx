import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

// chat message from server
// unfinished server side

const Dialog = (props) => {
    let dia = "/dialogs/" + props.id;

    return <div className={s.dialog} >
        <NavLink to={dia} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}



export default Dialog;