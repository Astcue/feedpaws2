import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => (
  <motion.div
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    role="status"
    aria-label="Loading Feed Paws"
  >
    <motion.img
      src="/favicon.png"
      alt="Feed Paws Initiative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="object-cover w-16 h-16 mb-6 rounded-full ring-1 ring-border"
    />

    <p className="mb-6 font-serif text-2xl text-foreground">Feed Paws Initiative</p>

    <div
      className="w-48 h-1 overflow-hidden rounded-full bg-muted"
      role="progressbar"
      aria-label="Page loading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  </motion.div>
);

export default LoadingScreen;
