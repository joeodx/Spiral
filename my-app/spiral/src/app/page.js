
'use client'
import React, { useState, useEffect, useRef } from 'react';



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false); // New state to track chat visibility
  const [stoppedSpiral, setStoppedSpiral] = useState(false);
   const [completedChat, setCompletedChat] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("'I'm struggling with low feelings of self worth...'");
  
  const [rotateSpiral, setRotateSpiral] = useState(true);
  const messagesEndRef = useRef(null);
  


  useEffect(() => {
    // Simulate initial AI message
    if (showChat) {
      simulateAIResponse("Hi there! What's bothering you today?");
    }
  }, [showChat]);

  
  const simulateAIResponse = (text) => {
    setMessages([...messages, { text, type: "ai" }]);
  };
  


  const handleUserMessage = (userInput) => {
    const userMessage = { text: `You: ${userInput}`, type: 'user' };
    const aiResponse = { text: getMockAIResponse(userInput), type: 'ai' };
  
    setMessages([...messages, userMessage, aiResponse]);
  };
  
 
  
 
  useEffect(() => {
    // Scroll to the bottom of the chat window when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);
  

  const getMockAIResponse = (userInput) => {
    userInput = userInput.toLowerCase();
   
  
      // Convert user input to lowercase for case-insensitive matching
      let response = "";
      if (response === "") {
        setPlaceholderText("'Yes or I want to offload more...'");
      }
    
      if (userInput.includes('mistakes')) {
        response = "It's okay to make mistakes; we all do. Making mistakes is a natural part of the human experience, and it's through these experiences that we learn and grow. Each mistake provides an opportunity for self-reflection and improvement. Instead of dwelling on the mistake itself, focus on what you've learned and how you can apply that knowledge in the future. Embrace the lessons, and remember that personal growth often comes from overcoming challenges. You are on a journey of continuous learning and development. What other thoughts or questions do you have? Or are you ready to stop the spiral?";
      } else if (userInput.includes('overwhelmed') || userInput.includes('stressed')) {
        response = "Feeling overwhelmed is common, especially in today's fast-paced world. It's essential to recognize that you're not alone in experiencing these emotions. Consider breaking down your tasks into smaller, more manageable steps. Prioritize what needs immediate attention and allow yourself breaks to recharge. Seeking support from friends, family, or colleagues can provide additional perspectives and help alleviate stress. Remember that self-care is a crucial aspect of managing stress—taking time for activities you enjoy and practicing mindfulness can make a significant difference. How can I assist you further? Or are you ready to stop the spiral?";
      } else if (userInput.includes('compare') || userInput.includes('comparison')) {
        response = "The tendency to compare ourselves to others is a common challenge. It's important to recognize that everyone's journey is unique, and external appearances may not reflect the full story. Instead of focusing on comparisons, celebrate your own strengths and accomplishments. Take pride in your progress, no matter how small it may seem. Consider setting personal goals that align with your values and aspirations. Remember, your journey is distinct, and comparing yourself to others can hinder your own growth. What other thoughts or concerns do you want to explore? Or are you ready to stop the spiral?";
      } else if (userInput.includes('failure')) {
        response = "Feeling like a failure is a tough emotion to navigate. It&apos;s crucial to understand that setbacks and challenges are a part of life, not a reflection of your worth. Instead of viewing failure negatively, consider reframing it as a valuable learning opportunity. Reflect on the specific lessons gained from the experience and how you can apply them in the future. Resilience is a powerful trait, and your ability to overcome challenges is a testament to your strength. Remember that success often involves overcoming obstacles, and each setback is a step forward. What other thoughts or questions would you like to share? Or are you ready to stop the spiral?";
      } else if (userInput.includes('lonely') || userInput.includes('talk to')) {
        response = "Experiencing loneliness can be challenging, but you're not alone in feeling this way. Building connections with others is essential for mental well-being. Consider reaching out to friends, family, or acquaintances to engage in meaningful conversations or shared activities. Joining social groups, clubs, or communities aligned with your interests can also provide opportunities to meet new people. Don't hesitate to seek support—it's okay to express your feelings and connect with others who may be experiencing similar emotions. How can I support you further? Or are you ready to stop the spiral?";
      } else if (userInput.includes('negative self-talk')) {
        response = "Negative self-talk can be a significant barrier to well-being. It&apos;s important to cultivate self-compassion and challenge negative thoughts. Practice replacing self-critical statements with positive affirmations and acknowledge your strengths and achievements. Consider seeking support from friends, family, or mental health professionals who can offer guidance and encouragement. Remember that you deserve kindness and understanding, especially from yourself. What other thoughts or concerns would you like assistance with? Or are you ready to stop the spiral?";
      } else if (userInput.includes('motivated') || userInput.includes('do anything')) {
        response = "Experiencing a lack of motivation is a common challenge, and it&apos;s okay to feel this way. Start by setting small, achievable goals that align with your interests and values. Celebrate each accomplishment, no matter how minor, and gradually increase the difficulty of your tasks. Break larger goals into manageable steps to make progress more attainable. Consider exploring new activities or seeking inspiration from others to reignite your motivation. Remember that motivation can fluctuate, and it's normal to experience ups and downs. How can I assist you in finding motivation? Or are you ready to stop the spiral?";
      } else if (userInput.includes('anxious') || userInput.includes('future')) {
        response = "Feeling anxious about the future is a common concern. It&apos;s important to focus on the present moment and break down future plans into smaller, more manageable tasks. Create a realistic timeline and set achievable goals to reduce feelings of overwhelm. Consider talking to someone you trust, such as friends, family, or a mentor, about your concerns. Seeking support can provide additional perspectives and alleviate anxiety. Remember that the future is uncertain, and it's okay not to have everything figured out. What specific aspects of the future are causing you anxiety? Or are you ready to stop the spiral?";
      } else {
    // Default response if none of the specific conditions are met
    response + " Or are you ready to stop the spiral? ";
    // Default response if none of the specific conditions are met
    response = "Sorry I am working on a delicate response to this as we speak \"" + userInput + "\" Was there anything else?" ;
    
    if (userInput === "yes") {
      setStoppedSpiral(true);
      setRotateSpiral(false);
      setShowChat(false);
      setCompletedChat(true);
      response = "Well done for stopping the spiral! Remember to be kind to yourself.";
    }
  }

  return response;
};
  

  const startChat = () => {
    setShowChat(true);
  };

   const restartChat = () => {
    setCompletedChat(false);
    setStoppedSpiral(false);
    setRotateSpiral(true);
    setMessages([]);
    startChat(); // Optionally, you can start the chat automatically after restarting
  };
  return (
    

    <div className="flex flex-col items-center justify-top h-screen bg-fixed">
       {/* Conditional rendering for the rotating spiral */}
<div className="flex justify-center items-center mb-4">
  {/* Use inline style to conditionally set animation property */}
  <img
    style={stoppedSpiral ? { animation: 'none' } : {}}
    className="items-center object-scale-down mx-auto h-60"
    src=".//spiral.png"  // Reference the image from the public folder
    alt="spiral"
  />
</div>
      {!completedChat && !showChat && (
        <button onClick={startChat} className="bg-blue-500 text-white p-2 rounded-md mb-4">
          Let&apos;s Get Started
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
             placeholder={placeholderText}
            className="p-1 w-2/4  border rounded w-2/4 text-center"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </>
      )}
       {stoppedSpiral && (
        <div className="text-center text-lg">
          <p>Well done for stopping the spiral!</p>
          <p>Remember to be kind to yourself.</p>
           <button onClick={restartChat} className="bg-blue-500 text-white p-2 rounded-md mb-4">
            Start Again
          </button>
        </div>
      )}

      
   
    </div>
  );
};



export default function Home() {
  return (
    <main>

      <div className="" >
      <h1 class="text-center text-2xl pt-6  ">Spiral</h1>
      <h2 class="text-center text-lg">Stop your negative thoughts in their tracks</h2>
      </div>
      <div class="flex justify-center items-center">
      {/* <img class="items-center object-scale-down mx-auto h-60" src=".//Spiral.png" alt="spiral"></img> */}
      </div>
  
      <div>
      <Chat/>
      </div>

    </main>
  );
}
