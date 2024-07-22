import React from 'react';
import useNavigation from './useNavigation';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigation();

  const greet = () => {
    const greetingMessage = createChatBotMessage("Welcome to Rudra Construction!");
    updateChatbotState(greetingMessage);
  };

  const handleOptions = () => {
    const optionsMessage = createChatBotMessage("How can I assist you?", {
      widget: "options",
    });
    updateChatbotState(optionsMessage);
  };

  const handleProjectDetails = () => {
    const message = createChatBotMessage("Here are the project details...");
    updateChatbotState(message);
  };

  const handleContactUs = () => {
    navigate("/ContactUs");
  };

  const handleServices = () => {
    navigate("/services");
  };

  const updateChatbotState = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const actions = {
    greet,
    handleOptions,
    handleProjectDetails,
    handleContactUs,
    handleServices,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;