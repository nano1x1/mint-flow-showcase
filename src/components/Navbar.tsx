
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
    { name: "GitHub", href: "#github" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "py-4 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl md:text-3xl text-gradient">ProofMint</span>
          </a>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={link.name}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-foreground hover:text-proofmint-purple transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-proofmint-purple text-proofmint-purple hover:bg-proofmint-soft-purple hover:text-proofmint-purple transition-all duration-300"
            >
              Learn More
            </Button>
            <Button 
              className="bg-gradient-primary hover:bg-proofmint-vivid-purple transition-all duration-300 shadow-md hover:shadow-lg"
              size="sm"
            >
              Connect Wallet
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 top-[60px] z-50 bg-background/95 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto py-6 px-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base py-2 border-b border-gray-200/20 hover:text-proofmint-purple transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-proofmint-purple text-proofmint-purple hover:bg-proofmint-soft-purple"
                >
                  Learn More
                </Button>
                <Button className="w-full bg-gradient-primary hover:bg-proofmint-vivid-purple shadow-md">
                  Connect Wallet
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
