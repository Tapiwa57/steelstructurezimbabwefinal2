import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image1 from "../../public/images/image1.jpeg";
import Image3 from "../../public/images/image3.jpeg";
import Image2 from "../../public/images/image2.jpeg";
import { Link } from "react-router-dom";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Vainona-Warehouse Structure",
      category: "Industrial",
      image: Image1,
      description: "Modern steel warehouse facility with advanced structural design"
    },
    {
      title: "Mt Pleasant-Steel Framework", 
      category: "Industrial",
      image: Image3,
      description: "Heavy-duty industrial plant with specialized steel framework"
    },
    {
      title: "Miekles Hotel",
      category: "Commercial;",
      image: Image2,
      description: "Complex steel structure with precision engineering"
    },
    
  ];

  const stats = [
    { number: "100+", label: "Project Complete" },
    { number: "20+", label: "Working Project" }, 
    { number: "70+", label: "Happy Customer" },
    { number: "250+", label: "Working Staff" }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        {/* Projects Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg">PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successfully completed steel construction projects 
            across various industries and sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="construction-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold link-animated text-primary">
                    View Details →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
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

        {/* View More Projects Button */}
        <div className="text-center animate-fade-in">
          <Link to="/Projects">
          <Button className="btn-primary text-lg px-8 py-4">
            View More Projects
          </Button>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;