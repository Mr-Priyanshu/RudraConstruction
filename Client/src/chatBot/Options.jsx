

const Options = (props) => {
  const options = [
    // eslint-disable-next-line react/prop-types
    { text: "Project Details", handler: props.actionProvider.handleProjectDetails, id: 1 },
    // eslint-disable-next-line react/prop-types
    { text: "Contact Us", handler: props.actionProvider.handleContactUs, id: 2 },
    // eslint-disable-next-line react/prop-types
    { text: "Services", handler: props.actionProvider.handleServices, id: 3 },
   
  ];

  const optionsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button py-0.5 px-1 bg-transparent text-black border border-gray-900 hover:bg-slate-900 hover:text-white rounded-md  m-3" >
      {option.text}
    </button>
  ));

  return <div className="options-container"
  style={{

  }}
  >{optionsMarkup}</div>;

};

export default Options;

