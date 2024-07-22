import { useState } from "react";
import { RiRobot3Fill } from "react-icons/ri";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleOpenChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="z-10">
      <button
        className="fixed bottom-20 z-10  h-16 flex justify-center items-center w-16 right-4 bg-gray-400 shadow-lg shadow-gray-950 text-white px-4 py-2 rounded-full"
        onClick={handleOpenChatbot}
      >
        {showChatbot ? (
          <RiRobot3Fill className="size-5 text-black" />
        ) : (
          <RiRobot3Fill className="size-7 hover:text-orange-400" />
        )}
      </button>
      {showChatbot && (
        <div className="fixed z-10  bottom-36 right-4">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider }
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
