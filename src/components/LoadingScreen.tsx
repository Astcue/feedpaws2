import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 250);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.img
        src="https://i.ibb.co/YFqj0WYr/Whats-App-Image-2025-11-04-at-10-09-36-0bf639c7.jpg"
        alt="Feed Paws Initiative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="object-cover w-16 h-16 mb-6 rounded-full ring-1 ring-border"
      />

      <p className="mb-6 font-serif text-2xl text-foreground">Feed Paws Initiative</p>

      <div className="w-48 h-1 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
