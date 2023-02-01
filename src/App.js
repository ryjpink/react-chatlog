import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const owner = 'Vladimir';
  const updateLike = (updatedmessage)=>{
    const updatedmessages = messages.map(message =>{
      if (message.id === updatedmessage.id){
        return updatedmessage;

      }else{
        return message;
      }
    })
    setMessages(updatedmessages);
  }

  const getHeartCount = () =>{
    let heartCount = 0;
    for (const message of messages){
      if (message.liked){
        heartCount ++;
      }
    }
    return heartCount;
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section><span className='widget' id='heartWidget'>{getHeartCount()} ❤️s</span></section>
      </header>
      <main>
        <ChatLog entries={messages} onupdate={updateLike} owner={owner}></ChatLog>
      </main>
    </div>
  );
};

export default App;
