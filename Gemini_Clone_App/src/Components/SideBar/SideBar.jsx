import React, { useContext, useState } from 'react'
import './SideBar.css'
import { Context } from '../../Context/Context';
import menu from "../../assets/menu_icon.png"
import message from "../../assets/message_icon.png"
import plus from "../../assets/plus_icon.png"
import question from "../../assets/question_icon.png"
import history from "../../assets/history_icon.png"
import setting from "../../assets/setting_icon.png"


function SideBar() {
  const[extended,setExtended] = useState(false);
  const{onsent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onsent(prompt);
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='menu'><img onClick={()=>setExtended(prev=>!prev)} src={menu} alt="menu" /></div>
        <div onClick={()=>newChat()} className='new-chat'><img src={plus} alt="new chat" />{extended?<p>New Chat</p>:null}</div>
        {extended?<div className="recent"> <p className='recent-title'>Recent</p>
        {prevPrompts.map((item,index)=>{
       return(<div onClick={(()=>loadPrompt(item))} className="recent-entry"><img src={message} alt="messages"/><p>{item.slice(0,15)}</p></div>) })}</div>:null}
      </div> 
      <div className='bottom'>
        <div className="bottom-item recent-entry">
            <img src={question} alt="help" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={history} alt="help" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={setting} alt="help" />
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
