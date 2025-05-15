
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What is <span className="text-gradient">ProofMint</span>?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ProofMint is a powerful platform to create, distribute, and showcase Proof of Attendance NFTs
            for events, communities, and educational programs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">For Event Organizers</h3>
              <p className="text-muted-foreground">
                Easily create branded Proof of Attendance NFTs for your hackathons, 
                conferences, or workshops. Reward attendees with a permanent digital credential that 
                showcases their participation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">For Attendees</h3>
              <p className="text-muted-foreground">
                Collect and showcase verifiable proof of your participation in exclusive events. 
                Build a portfolio of credentials that highlight your engagement and commitment to your community.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">For Communities</h3>
              <p className="text-muted-foreground">
                Create a sense of belonging and exclusivity by offering unique collectibles to your members. 
                Use NFTs as a gateway to exclusive content, spaces, or experiences.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-proofmint-purple to-proofmint-tertiary-purple p-1 rounded-xl shadow-xl">
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i}
                        className="glass-card rounded-lg p-4 flex flex-col items-center justify-center aspect-square"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-animated flex items-center justify-center mb-4`}>
                          <span className="text-white font-bold">#{i}</span>
                        </div>
                        <h4 className="font-medium text-sm">Event {i}</h4>
                        <p className="text-xs text-muted-foreground">2025</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-proofmint-vivid-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-proofmint-purple/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
