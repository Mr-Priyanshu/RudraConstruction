import React from 'react';
import { useParams } from 'react-router-dom';
import image1 from '../Assets/bridge.jpg';
import image2 from '../Assets/bridge2.jpg';
import image3 from '../Assets/mapImage.jpg';
import image4 from '../Assets/constructionbuilding.jpg';

const SingleProject = () => {
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

  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <img src={project.image} alt="Project" className="object-cover w-full mb-4 rounded-lg h-96" />
      <p className="text-center">{project.description}</p>
    </div>
  );
};

export default SingleProject;
