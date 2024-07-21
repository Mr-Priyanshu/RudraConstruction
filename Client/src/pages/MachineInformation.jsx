import MachineCard from '../components/MachineCard';

const machines = [
  {
    name: "Excavator",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Excavator_Postiguet_Beach_2.jpg",
    description: "An excavator is a heavy construction equipment consisting of a boom, dipper, bucket and cab on a rotating platform."
  },
  {
    name: "Bulldozer",
    image: "https://www.topmarkfunding.com/wp-content/uploads/2022/05/what_is_a_bulldozer-1-1024x576.jpg",
    description: "A bulldozer is a powerful track-laying tractor with a broad upright blade at the front for clearing ground."
  },
  {
    name: "Crane",
    image: "https://www.imarcgroup.com/blogs/files/5c290ef0-08d1-4ff1-8e51-a9cc5ede137acrane.webp",
    description: "A crane is a type of machine, generally equipped with a hoist, wire ropes or chains, and sheaves, that can be used both to lift and lower materials."
  },
  {
    name: "Excavator",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Excavator_Postiguet_Beach_2.jpg",
    description: "An excavator is a heavy construction equipment consisting of a boom, dipper, bucket and cab on a rotating platform."
  },
  {
    name: "Bulldozer",
    image: "https://www.topmarkfunding.com/wp-content/uploads/2022/05/what_is_a_bulldozer-1-1024x576.jpg",
    description: "A bulldozer is a powerful track-laying tractor with a broad upright blade at the front for clearing ground."
  },
  {
    name: "Crane",
    image: "https://www.imarcgroup.com/blogs/files/5c290ef0-08d1-4ff1-8e51-a9cc5ede137acrane.webp",
    description: "A crane is a type of machine, generally equipped with a hoist, wire ropes or chains, and sheaves, that can be used both to lift and lower materials."
  }
];

function MachineInfo() {
  return (
    <div className="container pt-28 mx-auto p-4">
      <h1 className="text-6xl font-semibold text-center my-8 text-[#222322]">Construction Machines<span className='text-gray-400'></span></h1>
      <p className='sm:mx-20 sm:ps-10 py-5'>This construction machinery and equipment page provides a detailed overview of all the various types of construction machinery and equipment used in construction activities. It offers users valuable information about these tools and machines.</p>
      <div className="flex flex-wrap justify-center">
        {machines.map((machine, index) => (
          <MachineCard key={index} image={machine.image} name={machine.name} description={machine.description} />
        ))}
      </div>
    </div>
  );
}

export default MachineInfo;
