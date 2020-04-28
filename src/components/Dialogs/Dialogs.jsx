import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let dia = "/dialogs/" + props.id;

    return <div className={s.dialog} >
    <NavLink to={dia} activeClassName={s.active}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Котя" id="1"/>
                <DialogItem name="Мамуся" id="2"/>
                <DialogItem name="Татусь" id="3"/>
                <DialogItem name="Перcик" id="4"/>
                <DialogItem name="Руслан" id="5"/>
                <DialogItem name="Бот" id="6"/>                
            </div>
            <div className={s.messages}>
                <Message message="Привіт" />
                <Message message="Як твоя соц мережа" />
                <Message message="КУ" />                
            </div>

        </div>
    )
}

export default Dialogs;