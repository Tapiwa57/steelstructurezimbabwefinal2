// src/pages/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "../assets/warehouse-project.jpg";
import project2 from "../assets/plant-construction.jpg";
import project3 from "../assets/hero-construction.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Warehouse Project",
      description: "Modern steel warehouse built for durability and efficiency.",
      image: project1,
    },
    {
      id: 2,
      title: "Industrial Factory",
      description: "High-capacity factory with steel structure and roofing solutions.",
      image: project2,
    },
    {
      id: 3,
      title: "Residential Building",
      description: "Affordable and stylish steel residential structures.",
      image: project3,
    },
    // Add more projects here
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Projects
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore some of the steel construction projects we have completed across Zimbabwe. We deliver quality, durability, and aesthetic excellence.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link to="/contact">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">
                    Get a Quote
                  </Button>
                </Link>
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
    </section>
  );
};

export default Projects;
