import './ContactList.css'
import ContactTab from "./ContactTab";
import Search from "./Search";
import {ChatContext} from "./ChatApp";
import {useContext} from "react";

export default function ContactList(props) {
    const {contactList, searchContact} = useContext(ChatContext)

  return (
    <div className="contact-list">
        <Search setSearchContact={props.setSearchContact}/>
        {contactList.filter(c => c.name.toLowerCase().indexOf(searchContact.toLowerCase()) !== -1).map(c =>
            <ContactTab contact={c} setChatWithId={props.setChatWithId}/>
        )}
    </div>
  )
}