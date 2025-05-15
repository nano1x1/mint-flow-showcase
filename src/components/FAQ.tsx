
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a Proof of Attendance NFT?",
      answer:
        "A Proof of Attendance NFT is a non-fungible token that serves as a digital certificate proving you attended or participated in a specific event, workshop, or community gathering. Unlike physical badges or certificates, these NFTs are permanently stored on the blockchain, making them verifiable and impossible to forge."
    },
    {
      question: "Do I need cryptocurrency to claim my NFTs?",
      answer:
        "With ProofMint, you don't need to pay any gas fees to claim your NFTs. Our platform covers all transaction costs, making it easy for anyone to collect their proof of attendance, regardless of their familiarity with cryptocurrency."
    },
    {
      question: "Can I display my Proof of Attendance NFTs?",
      answer:
        "Yes! Your collected NFTs are displayed in your ProofMint profile gallery. Additionally, you can connect your wallet to various social media platforms and NFT marketplaces to showcase your collection to a wider audience."
    },
    {
      question: "How do event organizers create Proof of Attendance NFTs?",
      answer:
        "Event organizers can use our intuitive dashboard to create and customize their Proof of Attendance NFTs. They can upload artwork, add event details, and generate unique claim codes or QR codes for attendees. The process is designed to be simple even for those with no prior blockchain experience."
    },
    {
      question: "Are these NFTs transferable or sellable?",
      answer:
        "By default, Proof of Attendance NFTs are soulbound tokens, meaning they're non-transferable and permanently tied to the wallet that originally claimed them. This ensures the integrity of the proof of attendance. However, event organizers have the option to enable transferability for their issued NFTs."
    },
  ];

  return (
    <section id="faqs" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ProofMint and Proof of Attendance NFTs.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-proofmint-soft-purple">
                <AccordionTrigger className="text-lg font-medium hover:text-proofmint-purple transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
