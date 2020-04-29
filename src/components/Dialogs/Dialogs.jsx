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
    let dialogsData = [
        { id: 1, name: 'Котя' },
        { id: 2, name: 'Мамуся' },
        { id: 3, name: 'Татусь' },
        { id: 4, name: 'Персик' },
        { id: 5, name: 'Руслан' },
        { id: 6, name: 'Бот' },
    ]
    let messagesData = [
        { id: 1, message: 'Привіт' },
        { id: 2, message: 'Як твоя соц мережа?' },
        { id: 3, message: 'Ку' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />

            </div>

        </div>
    )
}

export default Dialogs;