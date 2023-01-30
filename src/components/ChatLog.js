import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries})=>{


    const chatentryComponents = entries.map(message =>{
        return <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>;
      });

    return <section className='chat-log'>{chatentryComponents}</section>;
}

export default ChatLog;