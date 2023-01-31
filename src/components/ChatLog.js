import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onupdate})=>{


    const chatentryComponents = entries.map(message =>{
        return <ChatEntry onupdate={onupdate} liked={message.liked} id={message.id}sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>;
      });

    return <section className='chat-log'>{chatentryComponents}</section>;
}

export default ChatLog;