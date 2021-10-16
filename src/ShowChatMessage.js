
import './ShowChatMessage.css'
import {useContext, useState} from "react";
import {ChatContext} from "./ChatApp";


export default function ShowChatMessage(props) {

    const {chattingWithId, contactList} = useContext(ChatContext)


    return (
    <div className="show-chat-message">
        <div className='show-chat-header'>
        {contactList.length>0  && contactList[chattingWithId].messages.length > 0 &&
            <div className='show-chat-header-container'>
            <div className='contact-image-header'>
                <img src={contactList[chattingWithId].imageUrl} width='50' height='50'/></div>
            <div className='contact-name-header'>{contactList[chattingWithId].name}</div>
            </div>}
        </div>

        <div className='show-chat-container'>
            {contactList.length>0  && contactList[chattingWithId].messages.length > 0 &&
            contactList[chattingWithId].messages.map(msg =>
            msg.isMine ?
                <div className='show-msg-container'>
                    <div className='show-my-msg-prefix'/><div className='show-my-msg'>{msg.msg}</div>
                </div>:
                <div className='show-msg-container'>
                    <div className='show-others-msg'>{msg.msg}</div><div className='show-others-msg-suffix'/>
                </div>
            )
            }
        </div>

    </div>
  )
}