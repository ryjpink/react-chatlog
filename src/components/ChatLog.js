import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onupdate, local, colorForLocal, colorForRemote})=>{


    const chatentryComponents = entries.map(message=>{
        return <ChatEntry 
                onupdate={onupdate} liked={message.liked} key={message.id} id={message.id}
                sender={message.sender} body={message.body} timeStamp={message.timeStamp} local={local}
                colorForLocal={colorForLocal} colorForRemote={colorForRemote}
                />;
        });

    return <section className='chat-log'>{chatentryComponents}</section>;
}

export default ChatLog;