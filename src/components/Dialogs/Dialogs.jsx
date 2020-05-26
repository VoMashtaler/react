import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <Dialog name={d.name} id={d.id} />);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} /> );
        
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatche(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatche(updateNewMessageBodyCreator(body))
    }

    


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
                <div><button onClick = {onSendMessageClick}>Send</button></div>

            </div>

        </div>
    )
}

export default Dialogs;