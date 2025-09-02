import { Button } from "@/components/ui/button";
import projectImage from "@/assets/warehouse-project.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Building } from "lucide-react";
import { Building2, Shield, Users } from "lucide-react";
import heroImage from "@/assets/Rectangle 27.png";
import { Link } from "react-router-dom"; // 👈 import Link
import {MapPin, Phone, Mail } from "lucide-react";
import Logo from "../../public/images/Logo.jpg"

const DiscoverPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-semibold text-lg animate-slide-in">
                  We build Together
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                 Steel and Brick
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-primary-foreground/90">
                  We have successfully completed more than  100+ projects
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <a href="https://wa.me/263782899160">
                  <Button className="btn-hero">Get A Quote</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Features */}
          <div className="animate-scale-in">
            <div className="grid gap-6">
              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Building2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">
                      Commercial 
                    </h3>
                    <p className="text-primary-foreground/70">
                      Strong steel solutions tailored for modern business complexes and offices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">
                      Industrial 
                    </h3>
                    <p className="text-primary-foreground/70">
                     Durable, efficient steel structures powering factories, plants, and warehouses
                    </p>
                  </div>
                </div>
              </div>

              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">
                      Residential 
                    </h3>
                    <p className="text-primary-foreground/70">
                      Affordable, stylish steel solutions for housing and community developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section id="about" className="py-24 bg-gradient-subtle">
              <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-1 gap-16 items-center">
                  {/* About Content */}
                  <div className="animate-scale-in space-y-8">
                    <div className="space-y-4">
                      <p className="text-accent font-semibold text-lg">ABOUT US</p>
                      <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        Steel Structures Zimbabwe
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Steel Structures Zimbabwe is your trusted partner in high quality steel buildings. 
                        We provide an innovative work and infrastructure to customer requirement and 
                        desire to the agriculture structure, commercial, roofing structural, plastering 
                        building residential, church and industrial and residential renovation and improvement.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        From warehouses and workshops to market shades and custom projects we deliver 
                        durability, affordability, and fast turn arounds across Zimbabwe.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Mission */}
                      <Card className="construction-card">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <Target className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Mission Statement</h3>
                              <p className="text-muted-foreground">
                                Our mission is to design, fabricate, and supply high-quality steel structures that empower communities and industries, while promoting safety, sustainability, and customer satisfaction through professional service and innovative engineering solutions.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
        
                      {/* Vision */}
                      <Card className="construction-card">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                              <Eye className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                              <p className="text-muted-foreground">
                                To be Zimbabwe's leading steel construction company, known for innovation, 
                                reliability, and transforming communities through quality infrastructure.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Governance */}
                      <Card className="construction-card">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                              <Eye className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Governance</h3>
                              <p className="text-muted-foreground">
                                We uphold transparent, ethical governance rooted in accountability, teamwork, and compliance, ensuring trust, stakeholder confidence, and sustainable growth in every steel construction project undertaken.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Discover More About Us
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At <span className="font-semibold">Steel Structure Zimbabwe</span>, we
          specialize in durable and modern steel constructions. Our portfolio
          spans warehouses, factories, homes, and office blocks built with
          precision and reliability.
        </p>

        {/* Image + Text Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={projectImage}
              alt="Steel warehouse project"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Over 100+ completed projects across Zimbabwe</li>
              <li>✅ High-quality materials ensuring long-lasting durability</li>
              <li>✅ Professional engineering & construction teams</li>
              <li>✅ Competitive pricing with guaranteed results</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="/#contact">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
          <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <img className="rounded-lg" src="/images/Logo.jpg" alt="Logo" />
              </div>
              <div>
                <div className="font-bold text-lg">Steel Structures</div>
                <div className="text-sm text-primary-foreground/70">Zimbabwe</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in high quality steel buildings. We deliver durability, 
              affordability, and fast turn arounds across Zimbabwe.
            </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">MENU</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Home
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                About Us
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Services
              </a>
              <a href="#projects" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Projects
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">OUR SERVICES</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/80">Commercial Buildings</div>
              <div className="text-primary-foreground/80">Industrial Structures</div>
              <div className="text-primary-foreground/80">Residential Projects</div>
              <div className="text-primary-foreground/80">Warehouse Construction</div>
              <div className="text-primary-foreground/80">Engineering Solutions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">ADDRESS: HARARE</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-primary-foreground/80">
                  3667 Mainway Meadows<br />
                  Waterfalls<br />
                  Harare, Zimbabwe
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">+263 782 899 160</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">steelstructureszimbabwe@yahoo.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-glow/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2025 - Steel Structures Zimbabwe. All rights reserved.
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Designed by Tapiwa Ndemera
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  );
};

export default DiscoverPage;
