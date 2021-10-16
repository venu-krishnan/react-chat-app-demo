import './ChatPanel.css'
import ShowChatMessage from "./ShowChatMessage";
import {useContext, useState} from "react";
import {ChatContext, Message} from "./ChatApp";

export default function ChatPanel(props) {

    const {contactList, chattingWithId} = useContext(ChatContext)

    const [writeAMsg, setWriteAMsg] = useState('');

    const writeAMessage = (msg) => {
        if(msg.trim() === '')
            return
        let size = contactList[chattingWithId].messages.length
        contactList[chattingWithId].messages.length++
        contactList[chattingWithId].messages[size] = new Message(msg, true)
        setWriteAMsg('')
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            writeAMessage(event.target.value)
        }
    }

    const handleSendButton = () => {
        if(writeAMsg.trim() === '')
            return
        let size = contactList[chattingWithId].messages.length
        contactList[chattingWithId].messages.length++
        contactList[chattingWithId].messages[size] = new Message(writeAMsg, true)
        setWriteAMsg('')
    }

    return (
    <div className="chat-panel">
        <div className='chat-panel-container'>
      <div className='show-chat-message'><ShowChatMessage props={props}/></div>
      <div className='write-message-container'>
          <div className='write-message'>
              <input type='text' id='writeMsg' placeholder='Write a message...' value={writeAMsg}
                                            onChange={e => setWriteAMsg(e.target.value)}
                                            //onBlur={e => writeAMessage(e.target.value)}
                                            onKeyPress={e => handleKeyPress(e)}
      /></div>
      <div className='send-button'><button value='Send'
                                          onClick={handleSendButton}>Send</button></div>
      </div>
        </div>
    </div>
  )
}