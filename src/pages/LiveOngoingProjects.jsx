import React from 'react';
import image1 from '../Assets/bridge.jpg';
import image2 from '../Assets/bridge2.jpg';
import image3 from '../Assets/mapImage.jpg';
import image4 from '../Assets/constructionbuilding.jpg';
import { Link, useNavigate } from 'react-router-dom';

const LiveOngoingProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      image: image1,
      description: 'Construction of a new commercial complex in the city center. This project involves the construction of multiple high-rise buildings with modern amenities and eco-friendly designs.',
    },
    {
      id: 2,
      image: image2,
      description: 'Renovation of an old heritage building maintaining its original charm. The project includes restoring historical features while upgrading the infrastructure to meet modern standards.',
    },
    {
      id: 3,
      image: image3,
      description: 'Development of an expansive residential area with modern amenities. This includes parks, community centers, and sustainable energy solutions for a green living environment.',
    },
    {
      id: 4,
      image: image4,
      description: 'Building a state-of-the-art construction facility. The facility will feature advanced machinery and tools, enhancing our capability to handle large-scale projects efficiently.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Live Ongoing Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col items-center justify-around p-4 bg-gray-100 rounded-lg shadow-md"
            onClick={() => navigate(`/singleproject/${project.id}`)}
          >
            <img 
              src={project.image} 
              alt="Ongoing Project" 
              className="object-cover w-full h-48 mb-4 rounded-lg" 
            />
            <p className="text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveOngoingProjects;
