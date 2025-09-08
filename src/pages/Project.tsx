// src/pages/Projects.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "../assets/warehouse-project.jpg";
import project2 from "../assets/plant-construction.jpg";
import project3 from "../assets/hero-construction.jpg";
import { Link } from "react-router-dom";

// Simple Modal Component
const Modal = ({ isOpen, onClose, project }: any) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Project Content */}
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{project.longDescription}</p>

        {/* Extra pictures if available */}
        {project.extraImages && (
          <div className="grid grid-cols-2 gap-4">
            {project.extraImages.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`extra-${index}`}
                className="rounded-lg h-32 w-full object-cover"
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/contact">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              Get a Quote
            </Button>
          </Link>
          <Button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Warehouse Project",
      description: "Modern steel warehouse built for durability and efficiency.",
      longDescription:
        "This modern steel warehouse was designed for durability, high load capacity, and efficient storage solutions. Built with premium steel frames, it ensures longevity and resistance to harsh conditions.",
      image: project1,
      extraImages: [project2, project3],
    },
    {
      id: 2,
      title: "Industrial Factory",
      description:
        "High-capacity factory with steel structure and roofing solutions.",
      longDescription:
        "Our industrial factory project features robust steel construction designed to accommodate large-scale production. The facility includes reinforced roofing and ample interior space for machinery.",
      image: project2,
      extraImages: [project1, project3],
    },
    {
      id: 3,
      title: "Residential Building",
      description: "Affordable and stylish steel residential structures.",
      longDescription:
        "This residential project combines affordability with modern aesthetics. Using steel framing, we ensured a strong and safe structure while maintaining a contemporary design.",
      image: project3,
      extraImages: [project1, project2],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Projects
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore some of the steel construction projects we have completed
          across Zimbabwe. We deliver quality, durability, and aesthetic
          excellence.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="bg-gray-700 hover:bg-gray-800 text-white w-full"
                  >
                    View More
                  </Button>
                  <Link to="/contact" className="w-full">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/contact">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
              Contact Us for Your Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
