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
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    let connectionCheck: AbortController | undefined;
    let retryTimer: number | undefined;
    let isDisposed = false;

    const scheduleRetry = () => {
      if (isDisposed || retryTimer !== undefined) return;

      retryTimer = window.setTimeout(() => {
        retryTimer = undefined;
        void checkConnection();
      }, 3000);
    };

    const checkConnection = async () => {
      connectionCheck?.abort();
      const controller = new AbortController();
      connectionCheck = controller;
      const timeout = window.setTimeout(() => controller.abort(), 2500);

      try {
        const response = await fetch(`/robots.txt?connection-check=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (isDisposed || controller.signal.aborted) return;

        setIsOnline(response.ok);
        if (!response.ok) scheduleRetry();
      } catch {
        if (!isDisposed && !controller.signal.aborted) {
          setIsOnline(false);
          scheduleRetry();
        }
      } finally {
        window.clearTimeout(timeout);
        if (connectionCheck === controller) connectionCheck = undefined;
      }
    };

    const handleOnline = () => {
      if (retryTimer !== undefined) {
        window.clearTimeout(retryTimer);
        retryTimer = undefined;
      }
      void checkConnection();
    };
    const handleOffline = () => {
      connectionCheck?.abort();
      setIsOnline(false);
      scheduleRetry();
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    void checkConnection();

    return () => {
      isDisposed = true;
      connectionCheck?.abort();
      if (retryTimer !== undefined) window.clearTimeout(retryTimer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

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

      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 px-6 text-center backdrop-blur-2xl"
            role="alert"
            aria-labelledby="offline-title"
          >
            <div className="max-w-md">
              <img
                src="/favicon.png"
                alt="Feed Paws logo"
                className="w-20 h-20 mx-auto mb-6 rounded-full border border-border shadow-medium"
              />
              <span className="eyebrow">Feed Paws needs a signal</span>
              <h1 id="offline-title" className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                Looks like you’re offline
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Connect to the internet and we’ll be right here with more paws, care, and updates.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
