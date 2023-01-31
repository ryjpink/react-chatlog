import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [heartCount, setHeartCount] = useState(0);


  const updateLike = (updatedmessage)=>{
    const updatedmessages = messages.map(message =>{
      if (message.id === updatedmessage.id){
        if (!updatedmessage.liked){
          setHeartCount(heartCount - 1);
        }else{
          setHeartCount(heartCount + 1);
        }
        return updatedmessage;
      }else{
        return message;
      }
    })
    setMessages(updatedmessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section><span className='widget' id='heartWidget'>{heartCount} ❤️s</span></section>
      </header>
      <main>
        <ChatLog entries={messages} onupdate={updateLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
