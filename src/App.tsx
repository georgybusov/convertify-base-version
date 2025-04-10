
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
