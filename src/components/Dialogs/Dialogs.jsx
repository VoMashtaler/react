import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <Dialog name={d.name} key={d.id} id={d.id} />);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>


                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                    placeholder='Пиши щось'
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                ></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>

            </div>

        </div>
    )
}

export default Dialogs;