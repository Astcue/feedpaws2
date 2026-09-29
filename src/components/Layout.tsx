import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem("fp-visited"));

  useEffect(() => {
    if (isLoading) return;

    const animationFrame = window.requestAnimationFrame(() => {
      const target = location.hash
        ? document.getElementById(location.hash.slice(1))
        : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [location.pathname, location.hash, isLoading]);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("fp-visited", "1");
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col min-h-screen bg-background"
        >
          <Navigation />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Layout;
