import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages/home/homePage";
import { AboutPage } from "./pages/about/aboutPage";
import { ServicesPage } from "./pages/services/servicesPage";
import { ContactPage } from "./pages/contact/contactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sobre-nos",
    element: <AboutPage />,
  },
  {
    path: "/servicos",
    element: <ServicesPage />,
  },
  {
    path: "/contatos",
    element: <ContactPage />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
