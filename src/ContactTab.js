import './ContactTab.css'
import {useContext} from "react";
import {ChatContext} from "./ChatApp";


export default function ContactTab(props) {

    const {contactList, chattingWithId} = useContext(ChatContext)

    const setChattingId = (id) => {
        contactList[chattingWithId].unread = false
        props.setChatWithId(id)
    }

    const findLastMsg = () => {
        if(props.contact.messages === undefined || props.contact.messages.length===0)
            return ''
        let size = props.contact.messages.length
        return props.contact.messages[size-1].msg.substr(0, 20)
    }

    return (
        <div className='contact-tab'>
            <div className='contact-tab-container' onClick={() => setChattingId(props.contact.id)}>
                <div className='contact-image'><img src={props.contact.imageUrl} width='50' height='50'/></div>
                <div className='contact-tab-name'>
                    <div className={`${props.contact.unread? 'contact-name-unread' : 'contact-name'}`}>{props.contact.name}</div>
                    <div className='contact-last-msg'>{findLastMsg()}</div>
                </div>
            </div>
        </div>
    )
}