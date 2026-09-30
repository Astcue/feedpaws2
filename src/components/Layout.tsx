import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images).filter((image) => image.loading !== "lazy");
    const pendingImages = images.filter((image) => !image.complete);
    let completedImages = images.length - pendingImages.length;
    let minimumElapsed = false;
    let resourcesReady = pendingImages.length === 0;
    let isFinished = false;
    let isDisposed = false;
    let minimumTimer: number;
    let maximumTimer: number;
    let completionTimer: number;

    const finish = () => {
      if (isFinished || isDisposed) return;
      isFinished = true;
      window.clearTimeout(maximumTimer);
      setLoadingProgress(100);
      completionTimer = window.setTimeout(() => setIsLoading(false), 180);
    };

    const finishWhenReady = () => {
      if (resourcesReady && minimumElapsed) finish();
    };

    const updateProgress = () => {
      setLoadingProgress(images.length ? Math.round((completedImages / images.length) * 100) : 100);
    };

    const cleanupListeners = pendingImages.map((image) => {
      const handleImageResolved = () => {
        completedImages += 1;
        updateProgress();
        if (completedImages === images.length) {
          resourcesReady = true;
          finishWhenReady();
        }
      };

      image.addEventListener("load", handleImageResolved, { once: true });
      image.addEventListener("error", handleImageResolved, { once: true });

      return () => {
        image.removeEventListener("load", handleImageResolved);
        image.removeEventListener("error", handleImageResolved);
      };
    });

    updateProgress();
    minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      finishWhenReady();
    }, 350);
    maximumTimer = window.setTimeout(finish, 5000);

    return () => {
      isDisposed = true;
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(completionTimer);
      cleanupListeners.forEach((cleanup) => cleanup());
    };
  }, []);

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

  return (
    <>
      <AnimatePresence>
          {isLoading && <LoadingScreen progress={loadingProgress} />}
      </AnimatePresence>

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

    </>
  );
};

export default Layout;
