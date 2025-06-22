import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../Context/Context';
import user from "../../assets/user_icon.png"
import compass from "../../assets/compass_icon.png"
import bulb from "../../assets/bulb_icon.png"
import message from "../../assets/message_icon.png"
import code from "../../assets/code_icon.png"
import gemini from "../../assets/gemini_icon.png"
import gallery from "../../assets/gallery_icon.png"
import mic from "../../assets/mic_icon.png"
import send from "../../assets/send_icon.png"


function Main() {
  const { onsent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={user} alt="profile picture" />
      </div>
      <div className="main-container">
        {!showResult?(<><div className="greet">
          <p><span>Hello, Dev</span></p> 
          <p>How Can I Help You Today</p> 
        </div>
        <div className="cards">
  <div className="card">
    <p>Suggest beautiful places to see on an upcoming road trip</p>
    <img src={compass} alt="compass" />
  </div>
  <div className="card">
    <p>Briefly summarize this concept: urban planning</p>
    <img src={bulb} alt="bulb" />
  </div>
  <div className="card">
    <p>Brainstorm team bonding activities for our work retreat</p>
    <img src={message} alt="message" />
  </div>
  <div className="card">
    <p>Improve the readability of the following code</p>
    <img src={code} alt="code" />
  </div>
  {/* <div>
      <button onClick={() => onsent("What is React JS?")}>
        Ask Gemini
      </button>
    </div> */}
</div></>):(<div className='title'>
  <div className="result-title">
    <img src={user} alt="user" />
    <p>{recentPrompt}</p>
  </div>
  <div className="result-data">
    <img src={gemini} alt="gemini" />
    {loading?(<div className='loader'>
      <hr />
      <hr />
      <hr />
    </div>):(<p dangerouslySetInnerHTML={{__html:resultData}}></p>)} 
  </div>
</div>)}
<div className="main-bottom">
  <div className="search-box">
    <input onChange={(e)=>setInput(e.currentTarget.value)} value={input} type="text" placeholder='Enter a Prompt Here' />
    <div>
      <img src={gallery} alt="gallery" />
      <img src={mic} alt="mic" />
      {input?<img onClick={()=>onsent()} src={send} alt="send" />:null}
      
    </div>
    
  </div>
  <p className='bottom-info'>
  Gemini may Display Inaccurate Info,Including About People,so double check it's Responses, Your Privacy and Gemini Apps.
</p>
</div>

      </div>
      
    </div>
  )
}

export default Main
