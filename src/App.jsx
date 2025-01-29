import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BecomeASeller from "./pages/bcm-a-seller";
import Navbar from "./components/navbar";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/BecomeASeller",
    element: (
      <>
      <BecomeASeller />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
