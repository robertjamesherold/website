import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Pages } from '@/pages'
import { Global } from '@/global';
import { hooks } from '@/hooks';

function App() {
  hooks.useSmoothScroll();

  return (
    <BrowserRouter>
      <Global.NavBar />
      <Global.ScrollToTop />
      <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/codescanner" element={<Pages.CodeScanner />} />
          {/* Former standalone KI-Code case study — merged into CodeScanner. */}
          <Route path="/ki-code" element={<Navigate to="/codescanner" replace />} />
          <Route path="/schuelerhilfe" element={<Pages.Schuelerhilfe />} />
          <Route path="/villa-oliveto" element={<Pages.VillaOliveto />} />
          <Route path="/impressum" element={<Pages.Impressum />} />
          <Route path="/datenschutz" element={<Pages.Datenschutz />} />
          <Route path="*" element={<Pages.NotFound />} />
      </Routes>
      <Global.Footer />
    </BrowserRouter>
  )
}

export default App
