import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center min-h-[70vh] pt-24">
      <div className="text-center container-page">
        <p className="mb-3 font-serif text-6xl text-primary">404</p>
        <h1 className="mb-3 font-serif text-2xl text-foreground md:text-3xl">
          This page wandered off
        </h1>
        <p className="max-w-md mx-auto mb-8 text-muted-foreground">
          We couldn't find the page you were looking for. It may have moved, or the link may be
          out of date.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
