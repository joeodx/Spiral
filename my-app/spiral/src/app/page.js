
'use client'
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initial message from the AI when the component mounts
    setMessages([{ text: " Hi there! What's bothering you today?", type: 'ai' }]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    scrollToBottom();
  }, [messages]);

  const handleUserMessage = (userInput) => {
    const aiResponse = getMockAIResponse(userInput);
    setMessages([...messages, { text: userInput, type: 'user' }, { text: aiResponse, type: 'ai' }]);
  };

  const simulateAIResponse = (text) => {
    setIsLoading(true);
    setTimeout(() => {
      setMessages([...messages, { text, type: 'ai' }]);
      setIsLoading(false);
    }, 1000); // Simulating a delay
  };
  const getMockAIResponse = (userInput) => {
    // Check for specific keywords related to mental health
    if (userInput.toLowerCase().includes('mental health')) {
      return `It's great that you're reaching out. How have you been feeling lately?`;
    }

    // Other responses based on different user inputs
    return ` I received "${userInput}"`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-top h-screen bg-fixed">
      {/* Chat Container */}
      <div className="w-2/4 h-1/5 mx-auto border p-4 text-center overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.type === 'user' ? 'text-right' : 'text-left'} ${message.type === 'ai' ? 'mx-auto' : ''}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Reference for scrolling to bottom */}
      </div>

      {/* Text Input */}
      <input
        type="text"
        placeholder="Type your thoughts..."
        className="w-2/4 mx-auto p-2 border rounded w-3/4 text-center"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUserMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};




export default function Home() {
  return (
    <main>
      <div className="" >
      <h1 class="transition ease-in-out text-center text-2xl ">Spiral</h1>
      <h2 class="text-center text-lg">Stop your negative thoughts in their tracks</h2>
      </div>
      <div class="flex justify-center items-center">
      <img class="items-center object-scale-down mx-auto h-60" src=".//Spiral.png" alt="image description"></img>
      </div>
  
      <div>
      <Chat/>
      </div>
    </main>
  );
}
