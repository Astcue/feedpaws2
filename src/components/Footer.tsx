import { motion } from "framer-motion";
import { Heart, Mail, Instagram } from "lucide-react";

// Optionally, you might use a WhatsApp-icon from a different icon pack
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <img
              src="https://i.ibb.co/YFqj0WYr/Whats-App-Image-2025-11-04-at-10-09-36-0bf639c7.jpg"
              alt="Feed Paws Logo"
              className="object-cover w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-serif font-medium text-foreground">
              Feed Paws Initiative
            </span>
          </motion.div>

          <p className="max-w-md mb-8 text-muted-foreground">
            Feeding hope, saving lives. One paw at a time.
          </p>

          <div className="flex items-center gap-2 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <a
              href="mailto:help.feedpawsinitiative@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              report.fpi@gmail.com
            </a>
          </div>

          {/* Social / Channel icons */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/feedpawsinitiative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://whatsapp.com/channel/0029VbB7e8AHrDZlaju9eL3g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-border mb-8" />

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            for our furry friends
          </p>

          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Feed Paws Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
