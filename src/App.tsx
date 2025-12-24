import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DocsIntroduction from "./pages/DocsIntroduction";
import DocsInstallation from "./pages/DocsInstallation";
import DocsUsage from "./pages/DocsUsage";
import DocsApi from "./pages/DocsApi";
import DocsFaq from "./pages/DocsFaq";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<DocsIntroduction />} />
          <Route path="/docs/installation" element={<DocsInstallation />} />
          <Route path="/docs/usage" element={<DocsUsage />} />
          <Route path="/docs/api" element={<DocsApi />} />
          <Route path="/docs/faq" element={<DocsFaq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
