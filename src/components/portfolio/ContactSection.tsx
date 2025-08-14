import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, PenTool, Scroll } from "lucide-react";
import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:shravyaazmani@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return <section id="contact" className="py-20 bg-gradient-to-b from-maroon/10 to-mahogany/20 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Send className="w-12 h-12 text-gold animate-glow" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mahogany mb-4">
            Contact Me
          </h2>
          <p className="font-garamond text-xl text-leather italic">Let's start a conversation and build something.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gradient-scroll rounded-lg p-8 shadow-deep border border-leather/20">
            <div className="flex items-center gap-3 mb-6">
              <Scroll className="w-8 h-8 text-gold" />
              <h3 className="font-cinzel text-2xl font-bold text-crimson">Let's Connect</h3>
            </div>

            <div className="space-y-4">
              <a href="mailto:shravyaazmani@gmail.com" className="flex items-center gap-4 p-4 bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg border border-caramel/20 hover:shadow-glow transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-gradient-mystical flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-mahogany" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-crimson">Email</h4>
                  <p className="font-garamond text-leather">shravyaazmani@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/shravya-azmani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg border border-caramel/20 hover:shadow-glow transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-gradient-mystical flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-mahogany" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-crimson">LinkedIn</h4>
                  <p className="font-garamond text-leather">Connect with me</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-6">
              <p className="font-garamond text-sm text-bronze italic">
                "The best stories are born from meaningful conversations."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-scroll rounded-lg p-8 shadow-deep border border-leather/20 relative overflow-hidden">
            {/* Parchment texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment/5 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <PenTool className="w-8 h-8 text-gold" />
              <h3 className="font-cinzel text-2xl font-bold text-crimson">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-cinzel text-mahogany font-medium">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-parchment/50 border-leather/30 focus:border-gold focus:ring-gold/20 font-garamond"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-cinzel text-mahogany font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-parchment/50 border-leather/30 focus:border-gold focus:ring-gold/20 font-garamond"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-cinzel text-mahogany font-medium">
                  Your Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="flex w-full rounded-md border border-leather/30 bg-parchment/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-garamond resize-none"
                  placeholder="Share your thoughts, ideas, or project details..."
                />
              </div>

              <Button
                type="submit"
                className="w-full relative overflow-hidden bg-gradient-mystical hover:scale-105 transition-all duration-300 font-cinzel font-bold text-lg py-3 h-auto group border-2 border-gold/30 hover:border-gold shadow-glow"
              >
                {/* Magical seal effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="flex items-center gap-2 relative z-10">
                  <Send className="w-5 h-5" />
                  Send Message
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
