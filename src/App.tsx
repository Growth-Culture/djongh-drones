import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/aboutPage";
import { ServicesPage } from "./pages/services/servicesPage";
import { ContactPage } from "./pages/contact/contactPage";
import { Footer } from "./components/Footer/Footer";

import { CookieControler } from './utils/cookieConsent/CookieControler';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-nos" element={<AboutPage />} />
      <Route path="/segmentos" element={<ServicesPage />} />
      <Route path="/contatos" element={<ContactPage />} />
    </Routes>
    <Footer />
    <CookieControler />
  </Router>
  )
}

export default App
