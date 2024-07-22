import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./Options";

const config = {
  botName: "RudraBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you with construction?",
      {
        widget: "options",
      }
    ),
  ],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#FDA037",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  
  
};

export default config;
