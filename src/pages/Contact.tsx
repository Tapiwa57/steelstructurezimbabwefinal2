import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzdpded', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
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
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Need a partner for your next construction project
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your steel construction needs. We're here to help bring your vision to life.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Info + Social */}
          <div className="space-y-8 animate-scale-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                Ready to start your steel construction project? Contact us today for a consultation and free quote. Our experienced team is standing by to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        3667 Mainway Meadows, Waterfalls<br />
                        Harare, Zimbabwe
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">+263 782 899 160</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">steelstructureszimbabwe@yahoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Buttons */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
              <div className="flex space-x-3 flex-wrap">
                <a href="https://wa.me/263782899160">
                  <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559313327774">
                  <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/stee.lstructurezimbabwe/">
                  <Button size="icon" className="bg-gradient-primary hover:scale-110 transition-transform">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <Card className="shadow-lg rounded-xl animate-fade-in">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="Your first name"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Your last name"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+263 ..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Type</label>
                  <select
                    name="project_type"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full text-lg py-3 sm:py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
                  Send Message
                </Button>

                {status === 'SUCCESS' && (
                  <p className="text-green-500 mt-2">Thanks! Your message has been sent.</p>
                )}
                {status === 'ERROR' && (
                  <p className="text-red-500 mt-2">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
