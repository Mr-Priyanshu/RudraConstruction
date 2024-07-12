// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Welcome to Rudra Construction!");
    this.updateChatbotState(greetingMessage);
  }

  handleOptions() {
    const optionsMessage = this.createChatBotMessage("How can I assist you?", {
      widget: "options",
    });
    this.updateChatbotState(optionsMessage);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
