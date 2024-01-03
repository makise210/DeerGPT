import './App.css'
import addBtn from './assets/add-30.png'
import gptLogo from './assets/reindeer.svg'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/deer2.svg'
import gptImgLogo from './assets/reindeer.svg'
import { sendMsgToOpenAI } from './openai'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [message, setMessages] = useState([{
    text: "Hi",
    isBot: true,
  }]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...message,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...message,
      {text, isBot: false},
      {text: res, isBot: true}
    ]);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
              <span className="brand">Back to Nature</span>
                </div>
              <button className="midBtn"> <img src={addBtn} alt="" className="addBtn" />New Chat</button>
                <div className="uppSideBottom">
                  <button className="query"> <img src={msgIcon} alt="" /> Hey</button>
                </div>
                <div className="uppSideBottom">
                  <button className="query"><img src={msgIcon} alt="" />Hey</button>
                </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"> <img src={home} alt="" className="listItemsImg" /> Home </div>
          <div className="listItems"> <img src={saved} alt="" className="listItemsImg" /> Saved </div>
          <div className="listItems"> <img src={rocket} alt="" className="listItemsImg" /> Upgrade </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" id="user-deer"/>
            <p className="txt"></p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="" id="deergpt"/>
            <p className="txt"></p>
          </div>
          {message.map((message, i)=>{
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img src={message.isBot?gptImgLogo:userIcon} alt="" id="deergpt"/>
            <p className="txt">{message.text}</p>
          </div>
          })}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
