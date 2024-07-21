

const MachineCard = ({ image, name, description }) => {
  return (
    <div className="relative group m-4">
      <img className="w-full md:w-72 h-48 md:h-96 object-cover" src={image} alt={name} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 m-1">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

export default MachineCard;
