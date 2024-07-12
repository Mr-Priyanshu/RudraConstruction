

const Options = (props) => {
  const options = [
    { text: "Project Details", handler: () => {}, id: 1 },
    { text: "Contact Us", handler: () => {}, id: 2 },
    { text: "Services", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="bg-blue-600 text-white p-2 m-2 rounded-lg hover:bg-blue-700"
    >
      {option.text}
    </button>
  ));

  return <div className="flex flex-col items-center">{buttonsMarkup}</div>;
};

export default Options;
