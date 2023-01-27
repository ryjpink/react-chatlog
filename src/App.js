import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {

  const chatentryComponents = chatMessages.map(message =>{
    return <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>;
  });
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {chatentryComponents}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
