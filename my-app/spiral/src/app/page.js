
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react'



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
      }  else if (userInput.includes('self-esteem') || userInput.includes('confidence')) {
        response = "Building and nurturing your self-esteem is a gradual and ongoing process that involves recognizing and appreciating your unique qualities. Take time to reflect on your accomplishments, no matter how small, and celebrate your strengths. Surround yourself with positive influences that uplift and support you. Challenge self-doubt by acknowledging that everyone has moments of insecurity, and it's okay to seek help. Consider setting realistic goals and gradually pushing your comfort zone to build confidence. Remember, your worth is inherent, and you have the power to cultivate a strong sense of self. What other thoughts or concerns would you like assistance with? Or are you ready to stop the spiral?";
      
      } else if (userInput.includes('isolation') || userInput.includes('withdrawn')) {
        response = "Feeling isolated can be a challenging experience, and reaching out is a positive step toward connection. Consider engaging in social activities or joining clubs or groups that align with your interests. Even small interactions can make a significant difference in combating isolation. It's okay to express your feelings and seek support from friends, family, or mental health professionals. Building connections takes time, so be patient with yourself and take gradual steps to connect with others. How can I assist you further? Or are you ready to stop the spiral?";
      
      } else if (userInput.includes('identity') || userInput.includes('finding myself')) {
        response = "Exploring your identity is a deeply personal journey that involves self-discovery and growth. Embrace the process of understanding your values, interests, and aspirations. Reflect on your past experiences and how they have shaped you. Seek guidance from mentors or individuals who inspire you. Allow yourself the space to evolve and adapt as you uncover new aspects of your identity. Consider engaging in new experiences and challenges that align with your personal growth. Remember, finding yourself is an ongoing journey, and each step is an opportunity for learning. What other thoughts or questions do you have? Or are you ready to stop the spiral?";
       } else if (userInput.includes('compare') || userInput.includes('comparison')) {
        response = "The tendency to compare ourselves to others is a common challenge. It's important to recognize that everyone's journey is unique, and external appearances may not reflect the full story. Instead of focusing on comparisons, celebrate your own strengths and accomplishments. Take pride in your progress, no matter how small it may seem. Consider setting personal goals that align with your values and aspirations. Remember, your journey is distinct, and comparing yourself to others can hinder your own growth. What other thoughts or concerns do you want to explore? Or are you ready to stop the spiral?";
      } else if (userInput.includes('failure')) {
        response = "Feeling like a failure is a tough emotion to navigate. It is crucial to understand that setbacks and challenges are a part of life, not a reflection of your worth. Instead of viewing failure negatively, consider reframing it as a valuable learning opportunity. Reflect on the specific lessons gained from the experience and how you can apply them in the future. Resilience is a powerful trait, and your ability to overcome challenges is a testament to your strength. Remember that success often involves overcoming obstacles, and each setback is a step forward. What other thoughts or questions would you like to share? Or are you ready to stop the spiral?";
      } else if (userInput.includes('lonely') || userInput.includes('talk to')) {
        response = "Experiencing loneliness can be challenging, but you're not alone in feeling this way. Building connections with others is essential for mental well-being. Consider reaching out to friends, family, or acquaintances to engage in meaningful conversations or shared activities. Joining social groups, clubs, or communities aligned with your interests can also provide opportunities to meet new people. Don't hesitate to seek support—it's okay to express your feelings and connect with others who may be experiencing similar emotions. How can I support you further? Or are you ready to stop the spiral?";
      } else if (userInput.includes('negative self-talk')) {
        response = "Negative self-talk can be a significant barrier to well-being. It is important to cultivate self-compassion and challenge negative thoughts. Practice replacing self-critical statements with positive affirmations and acknowledge your strengths and achievements. Consider seeking support from friends, family, or mental health professionals who can offer guidance and encouragement. Remember that you deserve kindness and understanding, especially from yourself. What other thoughts or concerns would you like assistance with? Or are you ready to stop the spiral?";
      } else if (userInput.includes('motivated') || userInput.includes('do anything')) {
        response = "Experiencing a lack of motivation is a common challenge, and it&apos;s okay to feel this way. Start by setting small, achievable goals that align with your interests and values. Celebrate each accomplishment, no matter how minor, and gradually increase the difficulty of your tasks. Break larger goals into manageable steps to make progress more attainable. Consider exploring new activities or seeking inspiration from others to reignite your motivation. Remember that motivation can fluctuate, and it's normal to experience ups and downs. How can I assist you in finding motivation? Or are you ready to stop the spiral?";
      } else if (userInput.includes('anxious') || userInput.includes('future')) {
        response = "Feeling anxious about the future is a common concern. It is important to focus on the present moment and break down future plans into smaller, more manageable tasks. Create a realistic timeline and set achievable goals to reduce feelings of overwhelm. Consider talking to someone you trust, such as friends, family, or a mentor, about your concerns. Seeking support can provide additional perspectives and alleviate anxiety. Remember that the future is uncertain, and it's okay not to have everything figured out. What specific aspects of the future are causing you anxiety? Or are you ready to stop the spiral?";
      } 

 else if (userInput.includes('perfectionism') || userInput.includes('perfection')) {
  response = "Struggling with perfectionism can be overwhelming, and it's essential to recognize the impact it has on your well-being. Embrace the concept of 'good enough' and understand that perfection is an unrealistic standard. Set realistic and achievable goals, and celebrate progress, no matter how small. Challenge self-critical thoughts by acknowledging your efforts and achievements. Consider seeking support from friends, family, or a therapist who can provide guidance on navigating perfectionism. Remember, embracing imperfections is a key step toward a healthier mindset. What other thoughts or concerns would you like assistance with? Or are you ready to stop the spiral?";

} else if (userInput.includes('procrastination') || userInput.includes('avoiding tasks')) {
  response = "Overcoming procrastination involves understanding its roots and finding practical strategies to manage it. Break down tasks into smaller, more manageable steps and set realistic deadlines. Identify potential obstacles and create a supportive environment for productivity. Celebrate small achievements and build momentum over time. Explore the reasons behind procrastination—whether it's fear of failure or overwhelm—and address those underlying issues. Seeking an accountability partner or using productivity tools can also be beneficial. How can I assist you further in overcoming procrastination? Or are you ready to stop the spiral?";

} else if (userInput.includes('grief') || userInput.includes('loss')) {
  response = "Coping with grief is a unique and individual process that involves acknowledging and expressing your emotions. Allow yourself the space to grieve and recognize that it's okay to feel a range of emotions. Seek support from friends, family, or a grief counselor who can provide a listening ear. Create meaningful rituals or memorialize the person or thing you've lost. Be patient with yourself as you navigate the grieving process, and remember that healing takes time. What other thoughts or questions do you have regarding your grief? Or are you ready to stop the spiral?";

} else if (userInput.includes('stress') || userInput.includes('coping with stress')) {
  response = "Effectively managing stress is crucial for overall well-being. Start by identifying stressors and finding healthy coping mechanisms. Prioritize self-care activities that bring you joy and relaxation. Practice mindfulness techniques such as deep breathing or meditation to center yourself. Set boundaries and learn to say no when necessary. Consider engaging in regular physical activity to release built-up tension. If stress becomes overwhelming, don't hesitate to seek professional guidance. How can I assist you further in managing stress? Or are you ready to stop the spiral?";

} else if (userInput.includes('imposter') || userInput.includes('feeling like a fraud')) {
  response = "Experiencing imposter syndrome is more common than you might think. Acknowledge your achievements and recognize that your success is well-deserved. Challenge self-doubt by reframing negative thoughts and focusing on your skills and expertise. Share your feelings with trusted colleagues or mentors who can provide perspective and support. Remember that many high-achieving individuals face imposter syndrome, and it doesn't diminish your accomplishments. What other thoughts or questions do you have regarding imposter syndrome? Or are you ready to stop the spiral?";
}

      else {
    // Default response if none of the specific conditions are met
    response + " Or are you ready to stop the spiral? ";
    // Default response if none of the specific conditions are met
    response = "Sorry I am working on a delicate response to this as we speak to \"" + userInput + "\" Was there anything else?" ;
    
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
          <div className="w-2/4 h-1/5 mx-auto border p-4 text-center text-sm overflow-y-auto mb-4">
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
         
        </div>
      )}

{stoppedSpiral && (
        
        <div className="text-center text-lg">
         
           <button onClick={restartChat} className="bg-blue-500 text-white p-2 rounded-md mb-4">
            Start Again
          </button>
        </div>
      )}


      
   
    </div>
  );
};



export default function Home() {
  const [isShowing, setIsShowing] = useState(true)
  return (
    <main className="transition-opacity duration-533333100 ease-in-out delay-111111111300">


      <div>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-11175"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
      
        
      <h1 class="text-center text-2xl pt-6 transform: load:scale-75 transition duration-2010"> Spiral</h1>
      </Transition>
      <h2 class="text-center text-lg" >Stop your negative thoughts in their tracks</h2>
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
