
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockWallets = [
  { id: "metamask", name: "MetaMask", icon: "🦊" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗" },
  { id: "coinbase", name: "Coinbase Wallet", icon: "🔷" },
  { id: "trustwallet", name: "Trust Wallet", icon: "🛡️" },
];

const WalletConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  
  const handleConnect = (walletId: string) => {
    // Mock connection - in a real app, this would use thirdweb's SDK
    const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
    setConnectedAddress(mockAddress);
    setIsOpen(false);
  };
  
  const handleDisconnect = () => {
    setConnectedAddress(null);
  };
  
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  return (
    <>
      {connectedAddress ? (
        <Button 
          onClick={handleDisconnect}
          variant="outline"
          className="border-proofmint-purple text-proofmint-purple hover:bg-proofmint-soft-purple"
        >
          {formatAddress(connectedAddress)}
        </Button>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-primary hover:opacity-90"
        >
          Connect Wallet
        </Button>
      )}
      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          <motion.div
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md p-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Connect Wallet</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              {mockWallets.map((wallet) => (
                <motion.button
                  key={wallet.id}
                  onClick={() => handleConnect(wallet.id)}
                  className="w-full flex items-center p-4 rounded-lg border border-border hover:border-proofmint-purple transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl mr-4">{wallet.icon}</span>
                  <span className="font-medium">{wallet.name}</span>
                </motion.button>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mt-6 text-center">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WalletConnect;
