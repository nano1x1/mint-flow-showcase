
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Mint Your <span className="text-gradient">Proof of Attendance</span> NFT Instantly
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Built for the Gated NFTs University Hackathon 2025. Create, manage, and distribute 
              proof of attendance NFTs for your events and communities.
            </motion.p>
            
            <motion.div
              className="pt-6 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90"
              >
                Connect Wallet
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-proofmint-purple text-proofmint-purple hover:bg-proofmint-soft-purple"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-16 w-full max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-proofmint-purple to-proofmint-tertiary-purple p-1 rounded-xl">
                <div className="bg-background rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] bg-gradient-to-br from-proofmint-soft-purple/50 to-proofmint-soft-gray/50 flex items-center justify-center">
                    <div className="glass-card p-8 rounded-xl animate-float">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 bg-gradient-animated rounded-full flex items-center justify-center">
                          <span className="text-2xl text-white font-bold">PM</span>
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold">Hackathon Attendee</h3>
                          <p className="text-sm text-muted-foreground">Gated NFTs University Hackathon 2025</p>
                        </div>
                        <div className="bg-proofmint-soft-purple/30 rounded-full px-4 py-1">
                          <span className="text-xs text-proofmint-tertiary-purple">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-animated rounded-full blur-2xl opacity-60 animate-pulse-light"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-animated rounded-full blur-2xl opacity-60 animate-pulse-light"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-muted-foreground rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
