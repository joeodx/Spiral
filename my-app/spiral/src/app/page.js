
'use client'
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false); // New state to track chat visibility
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Simulate initial AI message
    if (showChat) {
      simulateAIResponse("Hi there! What's bothering you today?");
    }
  }, [showChat]);

  const simulateAIResponse = (text) => {
    setMessages([...messages, { text, type: 'ai' }]);
  };

  const handleUserMessage = (userInput) => {
    setMessages([...messages, { text: userInput, type: 'user' }]);
    simulateAIResponse(getMockAIResponse(userInput));
  };

  const getMockAIResponse = (userInput) => {
    // Your AI response logic here
    return `AI: I received "${userInput}"`;
  };

  const startChat = () => {
    setShowChat(true);
  };

  return (
    <div className="flex flex-col items-center justify-top h-screen bg-fixed">
      {!showChat && (
        <button onClick={startChat} className="bg-blue-500 text-white p-2 rounded-md mb-4">
          Let's Get Started
        </button>
      )}

      {showChat && (
        <>
          {/* Chat Container */}
          <div className="w-2/4 h-1/5 mx-auto border p-4 text-center overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.type === 'user' ? 'text-right' : 'text-left'} ${message.type === 'ai' ? 'mx-auto' : ''}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Reference for scrolling to bottom */}
          </div>

          {/* Text Input */}
          <input
            type="text"
            placeholder="Type your message..."
            className="p-2 w-2/4  border rounded w-3/4 text-center"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </>
      )}
    </div>
  );
};



export default function Home() {
  return (
    <main>
      <div className="" >
      <h1 class="transition ease-in-out text-center text-2xl pt-6 ">Spiral</h1>
      <h2 class="text-center text-lg">Stop your negative thoughts in their tracks</h2>
      </div>
      <div class="flex justify-center items-center">
      <img class="items-center object-scale-down mx-auto h-60" src=".//Spiral.png" alt="spiral"></img>
      </div>
  
      <div>
      <Chat/>
      </div>
    </main>
  );
}
