
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NFTList from "@/components/NFTList";
import Navbar from "@/components/Navbar";
import { toast } from "@/components/ui/use-toast";

const MyNFTs = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if wallet is connected from localStorage
    const connectedAddress = localStorage.getItem("connectedAddress");
    if (connectedAddress) {
      setIsConnected(true);
    } else {
      // If no wallet is connected, redirect to homepage
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to view your NFTs",
      });
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-5xl mx-auto pt-16 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My NFT Collection</h1>
          <p className="text-muted-foreground mb-8">Discover and claim unique digital collectibles</p>
          
          {isConnected ? (
            <NFTList />
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-xl text-center">Connect your wallet to view your NFT collection</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MyNFTs;
