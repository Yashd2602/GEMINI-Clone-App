import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../Context/Context';

function Main() {
  const { onsent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src="./img/user_icon.png" alt="profile picture" />
      </div>
      <div className="main-container">
        {!showResult?(<><div className="greet">
          <p><span>Hello, Dev</span></p> 
          <p>How Can I Help You Today</p> 
        </div>
        <div className="cards">
  <div className="card">
    <p>Suggest beautiful places to see on an upcoming road trip</p>
    <img src="./img/compass_icon.png" alt="" />
  </div>
  <div className="card">
    <p>Briefly summarize this concept: urban planning</p>
    <img src="./img/bulb_icon.png" alt="" />
  </div>
  <div className="card">
    <p>Brainstorm team bonding activities for our work retreat</p>
    <img src="./img/message_icon.png"alt="" />
  </div>
  <div className="card">
    <p>Improve the readability of the following code</p>
    <img src="./img/code_icon.png" alt="" />
  </div>
  {/* <div>
      <button onClick={() => onsent("What is React JS?")}>
        Ask Gemini
      </button>
    </div> */}
</div></>):(<div className='title'>
  <div className="result-title">
    <img src="./img/user_icon.png" alt="user" />
    <p>{recentPrompt}</p>
  </div>
  <div className="result-data">
    <img src="./img/gemini_icon.png" alt="gemini" />
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
      <img src="./img/gallery_icon.png" alt="" />
      <img src="./img/mic_icon.png" alt="" />
      {input?<img onClick={()=>onsent()} src="./img/send_icon.png" alt="" />:null}
      
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
