// src/pages/DiscoverPage.tsx
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/warehouse-project.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Building, MapPin, Phone, Mail, Users, Shield, Building2 } from "lucide-react";
import heroImage from "@/assets/Rectangle 27.png";
import { Link } from "react-router-dom";


const DiscoverPage = () => {
    const stats = [
    { number: "100+", label: "Project Complete" },
    { number: "20+", label: "Working Project" }, 
    { number: "70+", label: "Happy Customer" },
    { number: "250+", label: "Working Staff" }
  ];
  return (
    <section className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in text-white">
              <p className="text-accent font-semibold text-lg">We build Together</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Steel and Brick
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mt-4">
                Over 100+ successful projects across Zimbabwe
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="https://wa.me/263782899160">
                  <Button className="btn-hero bg-accent hover:bg-accent/80 text-white px-6 py-3">
                    Get A Quote
                  </Button>
                </a>

                {/* ✅ Back to Home button */}
                <Link to="/">
                  <Button className="bg-white text-primary hover:bg-gray-200 px-6 py-3">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Features */}
            <div className="grid gap-6">
              {[
                {
                  icon: <Building2 className="h-6 w-6 text-accent-foreground" />,
                  title: "Commercial",
                  desc: "Steel solutions for offices & business complexes.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-accent-foreground" />,
                  title: "Industrial",
                  desc: "Durable warehouses & factory steel structures.",
                },
                {
                  icon: <Users className="h-6 w-6 text-accent-foreground" />,
                  title: "Residential",
                  desc: "Stylish & affordable homes built with steel.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="construction-card p-6 bg-white/10 backdrop-blur-md border border-gray-200 rounded-xl shadow-md flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-200">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold">ABOUT US</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Steel Structures Zimbabwe
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Your trusted partner in high-quality steel buildings. From warehouses
              to housing, we deliver durability, affordability, and quick turnarounds.
            </p>
          </div>

          {/* Mission / Vision / Governance */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-6 w-6 text-primary-foreground" />,
                title: "Mission",
                desc: "To design, fabricate, and deliver top-quality steel structures with innovation and integrity.",
              },
              {
                icon: <Eye className="h-6 w-6 text-accent-foreground" />,
                title: "Vision",
                desc: "To be Zimbabwe's #1 steel construction company recognized for reliability and innovation.",
              },
              {
                icon: <Building className="h-6 w-6 text-accent-foreground" />,
                title: "Governance",
                desc: "We uphold transparency, accountability, and teamwork to ensure lasting trust and growth.",
              },
            ].map((item, i) => (
              <Card key={i} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <img
            src={projectImage}
            alt="Steel warehouse project"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ 100+ completed projects nationwide</li>
              <li>✅ Premium, long-lasting steel materials</li>
              <li>✅ Skilled engineers & professional teams</li>
              <li>✅ Competitive pricing with guaranteed quality</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/#contact">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
              Contact Us
            </Button>
          </a>
        </div>
      </section>
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
    </section>
  );
};

export default DiscoverPage;
