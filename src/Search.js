
import './Search.css'
import {useContext, useState} from "react";
import {ChatContext} from "./ChatApp";

export default function Search(props) {

    const {searchContact} = useContext(ChatContext)

    const handleSearchBy = (searchStr) => {
        props.setSearchContact(searchStr)
    }

    return (
    <div className="search">
        <input type='text' id='searchBy' placeholder='Search...' value={searchContact}
               onChange={e => handleSearchBy(e.target.value)}/>
    </div>
  )
}