import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinos from "./pages/Destinos";
import DestinoDetail from "./pages/DestinoDetail";
import Experiencias from "./pages/Experiencias";
import ExperienciaTag from "./pages/ExperienciaTag";
import Hospedagens from "./pages/Hospedagens";
import HospedagemDetail from "./pages/HospedagemDetail";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Guia, { GuiasIndex } from "./pages/Guia";
import Regiao from "./pages/Regiao";
import GrupoMarrocos2026 from "./pages/GrupoMarrocos2026";
import BrasilEstados from "./pages/BrasilEstados";
import BrasilEstado from "./pages/BrasilEstado";
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
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/*" element={<DestinoDetail />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/experiencias/:tagId" element={<ExperienciaTag />} />
        <Route path="/hospedagens" element={<Hospedagens />} />
        <Route path="/hospedagens/:slug" element={<HospedagemDetail />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/guias" element={<GuiasIndex />} />
        <Route path="/guias/:slug" element={<Guia />} />
        <Route path="/grupos/marrocos-2026" element={<GrupoMarrocos2026 />} />
          {/* Brasil hierarchical navigation — must come before /:regionSlug */}
          <Route path="/brasil" element={<BrasilEstados />} />
          <Route path="/brasil/:estadoSlug" element={<BrasilEstado />} />
          {/* SEO short-URL regional landings — keep as last specific dynamic route before catch-all */}
          <Route path="/:regionSlug" element={<Regiao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
