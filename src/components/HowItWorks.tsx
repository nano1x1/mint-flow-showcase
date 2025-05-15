
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Attend",
      description: "Participate in events, hackathons, or community gatherings to qualify for proof NFTs.",
      icon: "🎟️",
    },
    {
      title: "Connect Wallet",
      description: "Link your wallet to verify your identity and prepare to receive your NFT.",
      icon: "👛",
    },
    {
      title: "Mint Proof",
      description: "Claim your Proof of Attendance NFT and add it to your growing collection of credentials.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-24 bg-proofmint-soft-purple/20 relative">
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It <span className="text-gradient">Works</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ProofMint makes the process of earning and collecting Proof of Attendance NFTs simple and intuitive.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-24 h-24 bg-gradient-animated rounded-full flex items-center justify-center text-4xl shadow-lg mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-proofmint-purple to-transparent -z-10"></div>
                )}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
