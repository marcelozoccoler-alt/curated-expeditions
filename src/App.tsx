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
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Regiao from "./pages/Regiao";
import GrupoMarrocos2026 from "./pages/GrupoMarrocos2026";
import GrupoGrecia2026 from "./pages/GrupoGrecia2026";
import GrupoPatagoniaChilena2026 from "./pages/GrupoPatagoniaChilena2026";
import GrupoEquadorGalapagos2026 from "./pages/GrupoEquadorGalapagos2026";
import GrupoTailandia2026 from "./pages/GrupoTailandia2026";
import GrupoCroaciaBalcas2026 from "./pages/GrupoCroaciaBalcas2026";
import GrupoAfricaDoSul2026 from "./pages/GrupoAfricaDoSul2026";
import GrupoEgito2026 from "./pages/GrupoEgito2026";
import GrupoIslandia2026 from "./pages/GrupoIslandia2026";
import GrupoCoreiaJapao2026 from "./pages/GrupoCoreiaJapao2026";
import GrupoSulItalia2026 from "./pages/GrupoSulItalia2026";
import GrupoJordania2026 from "./pages/GrupoJordania2026";
import GrupoNepalButao2027 from "./pages/GrupoNepalButao2027";
import GrupoVietnaLaosCamboja2027 from "./pages/GrupoVietnaLaosCamboja2027";
import GrupoMexico2026 from "./pages/GrupoMexico2026";
import GrupoAfricaDoSulReveillon2027 from "./pages/GrupoAfricaDoSulReveillon2027";
import GrupoTurquiaReveillon2027 from "./pages/GrupoTurquiaReveillon2027";
import GrupoAfricaDoSulPrimavera2026 from "./pages/GrupoAfricaDoSulPrimavera2026";
import GrupoTurquia2026 from "./pages/GrupoTurquia2026";
import GrupoColombia2026 from "./pages/GrupoColombia2026";
import GrupoBenelux2026 from "./pages/GrupoBenelux2026";
import GrupoBalcasAutenticos2026 from "./pages/GrupoBalcasAutenticos2026";
import GrupoAfricaDoSulOutubro2026 from "./pages/GrupoAfricaDoSulOutubro2026";
import GrupoPortugalAldeias2026 from "./pages/GrupoPortugalAldeias2026";
import GrupoSulItaliaOutubro2026 from "./pages/GrupoSulItaliaOutubro2026";
import BrasilEstados from "./pages/BrasilEstados";
import BrasilEstado from "./pages/BrasilEstado";
import Incoming from "./pages/Incoming";
import BrasilVivo from "./pages/BrasilVivo";
import BrasilAventura from "./pages/BrasilAventura";
import CrieSeuGrupo from "./pages/CrieSeuGrupo";
import EmbarqueComACreate from "./pages/EmbarqueComACreate";
import Diario from "./pages/Diario";
import DiarioPost from "./pages/DiarioPost";
import Pacote from "./pages/Pacote";
import Auth from "./pages/Auth";
import AdminSeo from "./pages/AdminSeo";


import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/*" element={<DestinoDetail />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/experiencias/:tagId" element={<ExperienciaTag />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/grupos/marrocos-2026" element={<GrupoMarrocos2026 />} />
        <Route path="/grupos/grecia-2026" element={<GrupoGrecia2026 />} />
        <Route path="/grupos/patagonia-chilena-2026" element={<GrupoPatagoniaChilena2026 />} />
        <Route path="/grupos/equador-galapagos-2026" element={<GrupoEquadorGalapagos2026 />} />
        <Route path="/grupos/tailandia-2026" element={<GrupoTailandia2026 />} />
        <Route path="/grupos/croacia-balcas-2026" element={<GrupoCroaciaBalcas2026 />} />
        <Route path="/grupos/africa-do-sul-2026" element={<GrupoAfricaDoSul2026 />} />
        <Route path="/grupos/egito-2026" element={<GrupoEgito2026 />} />
        <Route path="/grupos/islandia-2026" element={<GrupoIslandia2026 />} />
        <Route path="/grupos/coreia-japao-2026" element={<GrupoCoreiaJapao2026 />} />
        <Route path="/grupos/sul-italia-2026" element={<GrupoSulItalia2026 />} />
        <Route path="/grupos/jordania-2026" element={<GrupoJordania2026 />} />
        <Route path="/grupos/nepal-butao-2027" element={<GrupoNepalButao2027 />} />
        <Route path="/grupos/vietna-laos-camboja-2027" element={<GrupoVietnaLaosCamboja2027 />} />
        <Route path="/grupos/mexico-2026" element={<GrupoMexico2026 />} />
        <Route path="/grupos/africa-do-sul-reveillon-2027" element={<GrupoAfricaDoSulReveillon2027 />} />
        <Route path="/grupos/turquia-reveillon-2027" element={<GrupoTurquiaReveillon2027 />} />
        <Route path="/grupos/africa-do-sul-primavera-2026" element={<GrupoAfricaDoSulPrimavera2026 />} />
        <Route path="/grupos/turquia-2026" element={<GrupoTurquia2026 />} />
        <Route path="/grupos/colombia-2026" element={<GrupoColombia2026 />} />
        <Route path="/grupos/benelux-2026" element={<GrupoBenelux2026 />} />
        <Route path="/grupos/balcas-autenticos-2026" element={<GrupoBalcasAutenticos2026 />} />
        <Route path="/grupos/africa-do-sul-outubro-2026" element={<GrupoAfricaDoSulOutubro2026 />} />
        <Route path="/grupos/portugal-aldeias-historicas-2026" element={<GrupoPortugalAldeias2026 />} />
        <Route path="/grupos/sul-italia-outubro-2026" element={<GrupoSulItaliaOutubro2026 />} />
          {/* Brasil hierarchical navigation — must come before /:regionSlug */}
          <Route path="/brasil-vivo" element={<BrasilVivo />} />
          <Route path="/:lang/brasil-vivo" element={<BrasilVivo />} />
          <Route path="/brasil-aventura" element={<BrasilAventura />} />
          <Route path="/:lang/brasil-aventura" element={<BrasilAventura />} />
          <Route path="/crie-seu-grupo" element={<CrieSeuGrupo />} />
          <Route path="/:lang/crie-seu-grupo" element={<CrieSeuGrupo />} />
          <Route path="/embarque-com-a-create" element={<EmbarqueComACreate />} />
          <Route path="/:lang/embarque-com-a-create" element={<EmbarqueComACreate />} />
          <Route path="/diario" element={<Diario />} />
          <Route path="/diario/:slug" element={<DiarioPost />} />
          <Route path="/pacote/:slug" element={<Pacote />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/seo" element={<AdminSeo />} />

          
          <Route path="/brasil" element={<BrasilEstados />} />
          <Route path="/brasil/:estadoSlug" element={<BrasilEstado />} />
          {/* Multilingual incoming landing pages */}
          <Route path="/:lang/incoming" element={<Incoming />} />
          <Route path="/en" element={<Incoming />} />
          <Route path="/es" element={<Incoming />} />
          <Route path="/it" element={<Incoming />} />
          <Route path="/de" element={<Incoming />} />
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
