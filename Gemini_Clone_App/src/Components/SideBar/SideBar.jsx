import React, { useContext, useState } from 'react'
import './SideBar.css'
import { Context } from '../../Context/Context';

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
        <div className='menu'><img onClick={()=>setExtended(prev=>!prev)} src="./img/menu_icon.png" alt="menu" /></div>
        <div onClick={()=>newChat()} className='new-chat'><img src="./img/plus_icon.png" alt="new chat" />{extended?<p>New Chat</p>:null}</div>
        {extended?<div className="recent"> <p className='recent-title'>Recent</p>
        {prevPrompts.map((item,index)=>{
       return(<div onClick={(()=>loadPrompt(item))} className="recent-entry"><img src="./img/message_icon.png" alt="messages"/><p>{item.slice(0,15)}</p></div>) })}</div>:null}
      </div> 
      <div className='bottom'>
        <div className="bottom-item recent-entry">
            <img src="./img/question_icon.png" alt="help" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="./img/history_icon.png" alt="help" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="./img/setting_icon.png" alt="help" />
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
