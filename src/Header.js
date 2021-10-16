import './Header.css'
import {useContext, useState} from "react";
import {ChatContext} from "./ChatApp";

export default function Header() {

    const {user} = useContext(ChatContext)

    return (
    <div className='header'>
      <div className='header-container'>
          <div className='header-container-prefix'/>
          <div className='header-container-user'>
              <div className='contact-image'><img src={user.imageUrl} width='50' height='50'/></div>
              <div className='contact-name-tag'>{user.name}</div>
          </div>
      </div>
    </div>
  )
}