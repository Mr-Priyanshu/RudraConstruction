import React from 'react';

const Options = (props) => {
  const options = [
    { text: "Project Details", handler: props.actionProvider.handleProjectDetails, id: 1 },
    { text: "Contact Us", handler: props.actionProvider.handleContactUs, id: 2 },
    { text: "Services", handler: props.actionProvider.handleServices, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;
