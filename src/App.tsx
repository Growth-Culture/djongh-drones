import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/aboutPage";
import { ServicesPage } from "./pages/services/servicesPage";
import { ContactPage } from "./pages/contact/contactPage";


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
  )
}

export default App
