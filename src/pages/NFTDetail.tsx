
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Share2, Heart } from "lucide-react";

// Define NFT interface
interface NFT {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  claimed: boolean;
  creator: string;
  collection: string;
  attributes?: { trait_type: string; value: string }[];
}

const NFTDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [nft, setNft] = useState<NFT | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if wallet is connected
    const connectedAddress = localStorage.getItem("connectedAddress");
    if (!connectedAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to view NFT details",
      });
      navigate("/");
      return;
    }

    // Mock fetch NFT data - in real app this would call the blockchain
    const fetchNFT = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock NFT data based on id
        const mockNFT: NFT = {
          id: id || "1",
          name: `Digital Dreamscape #${id}`,
          image: `https://images.unsplash.com/photo-163498666667${id}-ec8fd927c23d?q=80&w=1935&auto=format&fit=crop`,
          description: "An ethereal landscape of digital dreams and algorithmic beauty. This unique piece captures the essence of digital art with vibrant colors and intricate patterns that seem to shift and change as you view them from different angles.",
          price: "0.05 ETH",
          claimed: Math.random() > 0.5,
          creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
          collection: "Digital Dreamscapes",
          attributes: [
            { trait_type: "Background", value: "Cosmic" },
            { trait_type: "Style", value: "Abstract" },
            { trait_type: "Colors", value: "Vibrant" },
            { trait_type: "Rarity", value: "Uncommon" }
          ]
        };
        
        setNft(mockNFT);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT:", error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load NFT details. Please try again.",
          variant: "destructive"
        });
      }
    };

    fetchNFT();
  }, [id, navigate]);

  const handleClaimNFT = () => {
    if (!nft) return;
    
    // Mock claiming an NFT - in real app this would call a smart contract
    setNft({
      ...nft,
      claimed: true
    });
    
    toast({
      title: "NFT Claimed!",
      description: `You successfully claimed ${nft.name}`,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 aspect-square bg-gray-200 rounded-lg"></div>
              <div className="w-full md:w-1/2">
                <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded mb-8"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-8"></div>
                <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">NFT Not Found</h2>
            <p className="text-muted-foreground mb-8">The NFT you're looking for doesn't exist or has been removed.</p>
            <Button onClick={handleGoBack}>Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto pt-16">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden border-2 border-border">
                <img 
                  src={nft.image.replace("163498666667", "163498666667" + (parseInt(nft.id) % 10))} 
                  alt={nft.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Collection</p>
                  <p className="font-medium">{nft.collection}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl font-bold mb-2">{nft.name}</h1>
              <p className="text-xl text-green-600 font-semibold mb-6">{nft.price}</p>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{nft.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Creator</h2>
                <p className="text-muted-foreground font-mono">{nft.creator}</p>
              </div>
              
              {nft.attributes && nft.attributes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-2">Attributes</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {nft.attributes.map((attr, index) => (
                      <div 
                        key={index} 
                        className="bg-proofmint-soft-purple rounded-lg p-3 text-center"
                      >
                        <p className="text-xs text-muted-foreground">{attr.trait_type}</p>
                        <p className="font-medium text-sm">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {!nft.claimed ? (
                <Button 
                  onClick={handleClaimNFT}
                  className="w-full sm:w-auto px-8 bg-gradient-primary hover:opacity-90"
                >
                  Claim This NFT
                </Button>
              ) : (
                <Button disabled className="w-full sm:w-auto px-8">
                  Already Claimed
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
