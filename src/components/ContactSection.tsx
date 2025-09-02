import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram } from "lucide-react";
import { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzdpded', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  }

  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Contact Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg">GET IN TOUCH </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Need a partner for your next construction project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your steel construction needs. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
              <p className="text-lg text-muted-foreground">
                Ready to start your steel construction project? Contact us today for a consultation 
                and free quote. Our experienced team is standing by to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="construction-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">3667 Mainway Meadows, Waterfalls<br />Harare, Zimbabwe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="construction-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+263 782 899 160</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="construction-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">steelstructureszimbabwe@yahoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Us On Social Media</h4>
              <div className="flex space-x-4">
                <a href="https://wa.me/263782899160">
                <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559313327774">
                <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                  <Facebook className="h-5 w-5" />
                </Button>
                </a>
                <a href="https://www.instagram.com/stee.lstructurezimbabwe/">
                <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                  <Instagram className="h-5 w-5" />
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="construction-card animate-fade-in">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Send Us A Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="first_name"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="last_name"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+263 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <select 
                      name="project_type"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option>Select project type</option>
                      <option>Warehouse Structure</option>
                      <option>Plant Structure</option>
                      <option>Residential Building</option>
                      <option>Commercial Building</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-4">
                    Send Message
                  </Button>

                  {/* Status messages */}
                  {status === 'SUCCESS' && (
                    <p className="text-green-500 mt-2">Thanks! Your message has been sent.</p>
                  )}
                  {status === 'ERROR' && (
                    <p className="text-red-500 mt-2">Oops! Something went wrong. Please try again.</p>
                  )}
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
