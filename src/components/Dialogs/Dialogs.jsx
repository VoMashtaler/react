import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from '../../utils/validators/validations';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <Dialog name={d.name} key={d.id} id={d.id} />);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />);

    //let newMessageBody = state.newMessageBody;   
    
    let addNewMessage = (values) => { 
       props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            
        </div>
    )
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter something" 
                validate={[required, maxLength50]}/>
                </div>
                <div>
                    <button>Send</button>
                    </div>
                </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;