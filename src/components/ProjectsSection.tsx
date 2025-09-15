// src/pages/ProjectsSection.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image1 from "../../public/images/image1.jpeg";
import Image2 from "../../public/images/image2.jpeg";
import Image3 from "../../public/images/image3.jpeg";
import Image4 from "../../public/images/WhatsApp Image 2025-08-25 at 15.01.14_3a1aa3b6.jpg";
import Image5 from "../../public/images/WhatsApp Image 2025-08-25 at 15.20.33_a2549fef.jpg";
import Image8 from "../../src/assets/WhatsApp Image 2025-08-25 at 15.01.12_033073f7.jpg";

import { Link } from "react-router-dom";

// Modal Component
const Modal = ({ isOpen, onClose, project }: any) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative animate-fade-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <Badge className="mb-4 bg-accent text-accent-foreground">
          {project.category}
        </Badge>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />

        <p className="text-gray-700 mb-4">{project.longDescription}</p>

        {/* Extra Images */}
        {project.extraImages && (
          <div className="grid grid-cols-2 gap-4">
            {project.extraImages.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt={`extra-${i}`}
                className="rounded-lg w-full h-32 object-cover"
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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Vainona-Warehouse Structure",
      category: "Industrial",
      image: Image1,
      description:
        "Modern steel warehouse facility with advanced structural design.",
      longDescription:
        "This modern warehouse was engineered with advanced structural steel for maximum durability and storage efficiency. Its design allows for flexible space usage, ventilation, and optimized safety.",
      extraImages: [Image4],
    },
    {
      title: "Mt Pleasant-Steel Framework",
      category: "Industrial",
      image: Image2,
      description:
        "Heavy-duty industrial plant with specialized steel framework.",
      longDescription:
        "The Mt Pleasant project features a heavy-duty steel framework tailored for industrial use. The structure was designed to withstand large equipment, high loads, and provides long-term durability.",
      extraImages: [Image5,Image8],
    },
    {
      title: "Miekles Hotel",
      category: "Commercial",
      image: Image3,
      description:
        "Complex steel structure with precision engineering for commercial use.",
      longDescription:
        "Our team delivered a complex steel structural solution for Miekles Hotel, ensuring precision engineering and elegant finishing to match the hotel’s premium aesthetic.",
      extraImages: [Image1, Image3],
    },
  ];

  const stats = [
    { number: "100+", label: "Project Complete" },
    { number: "20+", label: "Working Project" },
    { number: "70+", label: "Happy Customer" },
    { number: "250+", label: "Working Staff" },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg">PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successfully completed steel construction
            projects across various industries and sectors.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="construction-card group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>

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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Link to="/Projects">
            <Button className="btn-primary text-lg px-8 py-4">
              View More Projects
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

export default ProjectsSection;
