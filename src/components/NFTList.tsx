
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// Define NFT interface
interface NFT {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  claimed: boolean;
}

const NFTList = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch NFT data - in real app this would call the blockchain
    const fetchNFTs = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock NFT data
        const mockNFTs: NFT[] = [
          {
            id: "1",
            name: "Digital Dreamscape #1",
            image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=1935&auto=format&fit=crop",
            description: "An ethereal landscape of digital dreams and algorithmic beauty.",
            price: "0.05 ETH",
            claimed: false
          },
          {
            id: "2",
            name: "Cosmic Voyager #42",
            image: "https://images.unsplash.com/photo-1578321272118-3d077fec0c86?q=80&w=1770&auto=format&fit=crop",
            description: "Journey through the digital cosmos with this unique NFT artwork.",
            price: "0.08 ETH",
            claimed: false
          },
          {
            id: "3",
            name: "Neon Genesis #7",
            image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1802&auto=format&fit=crop",
            description: "A vibrant fusion of neon colors and geometric patterns.",
            price: "0.12 ETH",
            claimed: true
          },
          {
            id: "4",
            name: "Abstract Mindscape #23",
            image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop",
            description: "An abstract representation of thoughts and memories in digital form.",
            price: "0.07 ETH",
            claimed: false
          }
        ];
        
        setNfts(mockNFTs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load NFTs. Please try again.",
          variant: "destructive"
        });
      }
    };

    fetchNFTs();
  }, []);

  const handleClaimNFT = (id: string, name: string) => {
    // Mock claiming an NFT - in real app this would call a smart contract
    setNfts(prevNfts => 
      prevNfts.map(nft => 
        nft.id === id ? { ...nft, claimed: true } : nft
      )
    );
    
    toast({
      title: "NFT Claimed!",
      description: `You successfully claimed ${name}`,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mx-auto"></div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {nfts.map((nft) => (
        <motion.div 
          key={nft.id}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden border-2 hover:border-proofmint-purple transition-colors">
            <div className="aspect-square overflow-hidden">
              <img 
                src={nft.image} 
                alt={nft.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{nft.name}</CardTitle>
              <p className="text-sm text-green-600 font-semibold">{nft.price}</p>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{nft.description}</p>
            </CardContent>
            <CardFooter className="pt-0">
              {nft.claimed ? (
                <Link to={`/nft/${nft.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button 
                    onClick={() => handleClaimNFT(nft.id, nft.name)}
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                  >
                    Claim NFT
                  </Button>
                  <Link to={`/nft/${nft.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Details
                    </Button>
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NFTList;
