
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";

// Mock NFT data for the demonstration
const mockNFTs = [
  {
    id: "eth-denver-2025",
    name: "ETH Denver 2025",
    image: "https://placehold.co/400x400/9b87f5/FFFFFF?text=ETHDenver",
    description: "Proof of attendance for ETH Denver 2025",
    claimed: true,
  },
  {
    id: "devcon-2025",
    name: "Devcon 7",
    image: "https://placehold.co/400x400/7E69AB/FFFFFF?text=Devcon7",
    description: "You participated in Devcon 7 in Bangkok",
    claimed: false,
  },
  {
    id: "gated-nft-university",
    name: "Gated NFT University",
    image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=GatedNFT",
    description: "Proof of participation in Gated NFTs University Hackathon 2025",
    claimed: false,
  },
  {
    id: "proof-of-knowledge",
    name: "Proof of Knowledge",
    image: "https://placehold.co/400x400/1EAEDB/FFFFFF?text=PoK",
    description: "Completed all tutorials in the knowledge base",
    claimed: false,
  },
];

const MyNFTs = () => {
  const [nfts, setNfts] = useState(mockNFTs);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Get connected address from WalletConnect component on mount
  useEffect(() => {
    const storedAddress = localStorage.getItem("connectedAddress");
    if (storedAddress) {
      setConnectedAddress(storedAddress);
    }
  }, []);
  
  const handleClaim = (nftId: string) => {
    if (!connectedAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }
    
    // Mock the claiming process
    setNfts((prev) =>
      prev.map((nft) =>
        nft.id === nftId ? { ...nft, claimed: true } : nft
      )
    );
    
    toast({
      title: "NFT Claimed!",
      description: "The NFT has been claimed to your wallet",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto pt-32 pb-20 px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-proofmint-purple to-proofmint-bright-blue bg-clip-text text-transparent">
            Your NFT Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Claim and showcase your proof of attendance NFTs from events and hackathons
          </p>
        </motion.div>
        
        {!connectedAddress ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-6">
            <p className="text-xl text-muted-foreground">Connect your wallet to view your NFTs</p>
            <WalletConnect />
          </div>
        ) : (
          <motion.div 
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {nfts.map((nft, index) => (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={nft.image} 
                      alt={nft.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{nft.name}</span>
                      {nft.claimed && (
                        <span className="bg-green-500/10 text-green-500 text-xs py-1 px-2 rounded-full flex items-center">
                          <Check className="h-3 w-3 mr-1" /> Claimed
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{nft.description}</p>
                  </CardContent>
                  <CardFooter>
                    {nft.claimed ? (
                      <Link to={`/nft/${nft.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        onClick={() => handleClaim(nft.id)} 
                        className="w-full bg-gradient-primary hover:opacity-90"
                      >
                        Claim NFT <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MyNFTs;
