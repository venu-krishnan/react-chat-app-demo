import ContactList from "./ContactList";
import ChatPanel from "./ChatPanel";
import Header from "./Header";
import './ChatApp.css'
import React, {useEffect, useState} from "react";


export class Contact {
    constructor(id, name, email, imageUrl, unread, messages) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.unread = unread;
        this.messages = messages;
    }
}

export class Message {
    constructor(msg, isMine) {
        this.msg = msg;
        this.isMine = isMine;
    }
}

export class ChatContextProps {
    constructor(user, contactList, chattingWithId, searchContact) {
        this.user = user;
        this.contactList = contactList;
        this.chattingWithId = chattingWithId;
        this.searchContact = searchContact;
    }
}

export const ChatContext  = React.createContext(new ChatContextProps())

export default function ChatApp() {

    const [contactList, setContactList] = useState([])
    const [chattingWithId, setChattingWithId] = useState(0)
    const [searchContact, setSearchContact] = useState('')

    const setChatWithId = (id) => {
        setChattingWithId(id)
    }

    const setSearchString = (str) => {
        setSearchContact(str)
    }

    const getRandomContact = (id) => {
        let faker = require("faker");
        let msgs = [1]
        msgs[0] = new Message(faker.commerce.productDescription(), false)
        return new Contact(id,
            faker.name.findName(),
            faker.internet.email(),
            faker.image.avatar(),
            true,
            msgs
        )
    }
    const [user] = useState(getRandomContact(100))

    const populateContactList = () => {
        let contacts = [7]
        for(let i = 0; i <=6; i++){
            contacts[i] = getRandomContact(i)
        }
        setContactList(contacts)
    }

    useEffect(() => {
        populateContactList()
    }, [])


    return (
        <ChatContext.Provider value={
            new ChatContextProps(user, contactList, chattingWithId, searchContact)}>
        <div className='chat-app'>

            <div className='chat-app-container'>
                <div className='chat-app-header'>
                    <Header/>
                </div>
                <div className='chat-app-main-panel'>
                    <div className='chat-app-contact-list'><ContactList setChatWithId={setChatWithId}
                                                                        setSearchContact={setSearchString}/></div>
                    <div className='chat-app-chat-panel'><ChatPanel setChatWithId={setChatWithId}/></div>
                </div>
            </div>


        </div>
        </ChatContext.Provider>
    )
}