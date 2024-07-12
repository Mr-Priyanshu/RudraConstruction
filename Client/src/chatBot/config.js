import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import Options from './Options' 


const config = {
  botName: "Construction Bot",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you with construction?"),
  ],
  customComponents: {},  // Placeholder for custom components
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
      // widgetFunc: (props) => <Options {...props} />
    },
  ],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
