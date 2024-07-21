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

  handleProjectDetails() {
    const message = this.createChatBotMessage("Here are the project details...");
    this.updateChatbotState(message);
  }

  handleContactUs() {
    const message = this.createChatBotMessage("You can contact us at rudra.constructions@example.com");
    this.updateChatbotState(message);
  }

  handleServices() {
    const message = this.createChatBotMessage("We offer various construction services...");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
