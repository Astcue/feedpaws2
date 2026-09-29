import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import OurWorkPage from "@/pages/OurWorkPage";
import PhotoGalleryPage from "@/pages/PhotoGalleryPage";
import OurMotivePage from "@/pages/OurMotivePage";
import DonatePage from "@/pages/DonatePage";
import VolunteerPage from "@/pages/VolunteerPage";
import DirectorsMessagePage from "@/pages/DirectorsMessagePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-work/gallery" element={<PhotoGalleryPage />} />
              <Route path="/our-work" element={<OurWorkPage />} />
              <Route path="/our-motive" element={<OurMotivePage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/directors-message" element={<DirectorsMessagePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
