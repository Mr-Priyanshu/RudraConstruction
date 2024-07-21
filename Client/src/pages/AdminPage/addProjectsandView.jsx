import { useEffect, useState } from "react";
import Navbar from "./AdminNavbar";
import Modal from "./AddprojectModal";
import axios from "axios";
import { Link } from "react-router-dom";

const AddOngoingProjects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleFetchProject = () => {
    axios.get('http://localhost:8080/api/rudra-construction/ongoning-projects')
      .then(response => {
        console.log('project', response.data);
        setProjects(response.data);
      })
      .catch(err => {
        console.log("here", err);
      });
  };

  useEffect(() => {
    handleFetchProject();
  }, []);

  return (
    <>
      <div className="main bg-gray-200 pt-24 pb-1">
        <div className='bg-white m-7 rounded-3xl shadow-lg'>
          <div className="flex rounded-3xl h-dvh">
            <Navbar />
            <div className="flex-1 p-6 flex flex-col">
              <div className="p-5 m-5 flex justify-center">
                <h1 className="text-bold text-4xl text-gray-700">Ongoing Projects List</h1>
              </div>

              <div className="Add Project modal ">
                <button
                  className="bg-orange-300 text-gray-600 hover:text-white hover:bg-orange-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Add Projects
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal} FetchProject={handleFetchProject} />
              </div>

              <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                <table className="table-auto w-full text-sm text-left rtl:text-right text-black">
                  <thead className="text-xs text-black uppercase bg-yellow-200 border-b border-gray-700">
                    <tr className="bg-yellow-200 border-b border-yellow-900">
                      <th scope="col" className="px-6 py-3">S.No.</th>
                      <th scope="col" className="px-6 py-3">Project Name</th>
                      <th scope="col" className="px-6 py-3">Category</th>
                      <th scope="col" className="px-6 py-3">Location</th>
                      <th scope="col" className="px-6 py-3">Description</th>
                      <th scope="col" className="px-6 py-3">Image</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={index} className="border">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{project.project_name}</td>
                        <td className="px-6 py-4">{project.category}</td>
                        <td className="px-6 py-4">{project.location}</td>
                        <td className="px-6 py-4">{project.description}</td>
                        <td className="px-6 py-4">
                          {project.image ? (
                            <img
                              src={`data:image/jpeg;base64,${project.image}`}
                              alt="Project"
                              className="w-32 h-32 object-cover" // Adjust size as needed
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/edit/${project.id}`} className="text-blue-500 hover:underline">Edit</Link>
                          <Link to={`/delete/${project.id}`} className="text-red-500 hover:underline ml-4">Remove</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOngoingProjects;
