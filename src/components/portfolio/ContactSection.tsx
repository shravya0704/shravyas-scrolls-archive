import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send } from "lucide-react";
const ContactSection = () => {
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

        <div className="max-w-2xl mx-auto bg-gradient-scroll rounded-lg p-8 shadow-deep border border-leather/20">
          

          <div className="space-y-4">
            <a href="mailto:shravyaazmani@gmail.com" className="flex items-center gap-4 p-4 bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg border border-caramel/20 hover:shadow-glow transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-mystical flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-mahogany" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-crimson">Email</h3>
                <p className="font-garamond text-leather">shravyaazmani@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/shravya-azmani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gradient-to-r from-bronze/10 to-mahogany/10 rounded-lg border border-caramel/20 hover:shadow-glow transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-mystical flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-mahogany" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-crimson">LinkedIn</h3>
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
      </div>
    </section>;
};
export default ContactSection;
