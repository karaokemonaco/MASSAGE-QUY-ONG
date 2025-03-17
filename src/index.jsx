import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import ServicePR from "./pages/dịch-vu/Service";
import Rankings from "./pages/ktv/Rankings";
import Wallet from "./pages/lien-he/Wallet";

import ServiceDetail from "./pages/dịch-vu/ServiceDetail";
import TreatM from "./pages/loi-ich-detail/TreatMent";
import Girl_Detail from "./pages/ktv-detail/Member";
import ScrollToTop from "./components/scrolls/Scroll";
import "./styles/index.css";
import LoiIch from "./pages/loi-ich/Benefit";

// Tạo router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App là nơi chứa Header, Outlet và Footer
    children: [
      { index: true, element: <Home /> },
      { path: "/service", element: <ServicePR /> },
      { path: "/rankings", element: <Rankings /> },
      { path: "/wallet", element: <Wallet /> },

      { path: "/service/:id", element: <ServiceDetail /> },

      { path: "/treat/:id", element: <TreatM /> },
      { path: "/girl/:id", element: <Girl_Detail /> },
      { path: "/benefit", element: <LoiIch /> },
    ],
  },
]);

// Render ứng dụng với RouterProvider và ScrollToTop
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
