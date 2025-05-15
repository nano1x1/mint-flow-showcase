
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock NFT data for the demonstration
const mockNFTs = {
  "eth-denver-2025": {
    id: "eth-denver-2025",
    name: "ETH Denver 2025",
    image: "https://placehold.co/400x400/9b87f5/FFFFFF?text=ETHDenver",
    description: "Proof of attendance for ETH Denver 2025",
    claimed: true,
    event: "ETH Denver 2025",
    date: "February 12-16, 2025",
    location: "Denver, Colorado",
    metadata: {
      blockchain: "Ethereum",
      contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      tokenId: "12345",
      tokenStandard: "ERC-721",
    }
  },
  "devcon-2025": {
    id: "devcon-2025",
    name: "Devcon 7",
    image: "https://placehold.co/400x400/7E69AB/FFFFFF?text=Devcon7",
    description: "You participated in Devcon 7 in Bangkok",
    claimed: false,
    event: "Devcon 7",
    date: "October 10-13, 2025",
    location: "Bangkok, Thailand",
    metadata: {
      blockchain: "Ethereum",
      contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      tokenId: "23456",
      tokenStandard: "ERC-721",
    }
  },
  "gated-nft-university": {
    id: "gated-nft-university",
    name: "Gated NFT University",
    image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=GatedNFT",
    description: "Proof of participation in Gated NFTs University Hackathon 2025",
    claimed: false,
    event: "Gated NFTs University Hackathon",
    date: "May 15-30, 2025",
    location: "Online",
    metadata: {
      blockchain: "Ethereum",
      contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      tokenId: "34567",
      tokenStandard: "ERC-721",
    }
  },
  "proof-of-knowledge": {
    id: "proof-of-knowledge",
    name: "Proof of Knowledge",
    image: "https://placehold.co/400x400/1EAEDB/FFFFFF?text=PoK",
    description: "Completed all tutorials in the knowledge base",
    claimed: false,
    event: "Knowledge Base Completion",
    date: "Ongoing",
    location: "Online",
    metadata: {
      blockchain: "Ethereum",
      contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      tokenId: "45678",
      tokenStandard: "ERC-721",
    }
  }
};

const NFTDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [nft, setNft] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      if (id && mockNFTs[id as keyof typeof mockNFTs]) {
        setNft(mockNFTs[id as keyof typeof mockNFTs]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto pt-32 pb-20 px-4 flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto pt-32 pb-20 px-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6">NFT Not Found</h1>
          <p className="text-muted-foreground mb-6">The NFT you're looking for doesn't exist or has been removed.</p>
          <Link to="/my-nfts">
            <Button>
              Back to My NFTs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto pt-32 pb-20 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img 
                src={nft.image} 
                alt={nft.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{nft.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{nft.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl">
                <h3 className="text-sm text-muted-foreground mb-1">Event</h3>
                <p className="font-medium">{nft.event}</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl">
                <h3 className="text-sm text-muted-foreground mb-1">Date</h3>
                <p className="font-medium">{nft.date}</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl">
                <h3 className="text-sm text-muted-foreground mb-1">Location</h3>
                <p className="font-medium">{nft.location}</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl">
                <h3 className="text-sm text-muted-foreground mb-1">Status</h3>
                <p className="font-medium">{nft.claimed ? "Claimed" : "Not Claimed"}</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl mb-8">
              <h2 className="text-xl font-semibold mb-4">Token Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blockchain</span>
                  <span>{nft.metadata.blockchain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract</span>
                  <span className="text-sm">{`${nft.metadata.contractAddress.substring(0, 6)}...${nft.metadata.contractAddress.substring(38)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Token ID</span>
                  <span>{nft.metadata.tokenId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Standard</span>
                  <span>{nft.metadata.tokenStandard}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link to="/my-nfts" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to My NFTs
                </Button>
              </Link>
              {!nft.claimed && (
                <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                  Claim This NFT <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NFTDetail;
