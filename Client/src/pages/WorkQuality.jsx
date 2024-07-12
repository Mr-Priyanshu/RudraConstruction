import React from 'react';

const WorkQuality = () => {
  const projects = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200.png?text=Construction+Site+1",
      title: 'Construction Site Safety Inspection',
      description: 'Conducted a comprehensive safety inspection to ensure all site protocols are followed, minimizing risks and hazards.',
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200.png?text=Construction+Site+2",
      title: 'Concrete Work Quality Check',
      description: 'Oversaw the quality of concrete work, ensuring adherence to standards and guidelines for a high-rise building project.',
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200.png?text=Construction+Site+3",
      title: 'Structural Integrity Assessment',
      description: 'Performed a detailed assessment of the structural integrity of the construction site, ensuring all elements meet the required specifications.',
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200.png?text=Construction+Site+4",
      title: 'Site Performance Optimization',
      description: 'Implemented optimization strategies to enhance site performance, reducing delays and improving overall efficiency.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Construction Site Work and Quality Assurance</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center justify-around p-4 bg-gray-100 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="object-cover w-full h-48 mb-4 rounded-lg" />
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkQuality;
