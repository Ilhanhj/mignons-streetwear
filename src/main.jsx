import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { TotalPriceProvider } from "./context/TotalPriceContext";
import MignonsPage from "./pages/MignonsPage";
import AthleticsPage from "./pages/AthleticsPage";
import EssentialsPage from "./pages/EssentialsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import FootwearPage from "./pages/FootwearPage";
import RunwayPage from "./pages/RunwayPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/mignons",
    element: <MignonsPage />,
  },
  {
    path: "/athletics",
    element: <AthleticsPage />,
  },
  {
    path: "/essentials",
    element: <EssentialsPage />,
  },
  {
    path: "/accessories",
    element: <AccessoriesPage />,
  },
  {
    path: "/footwear",
    element: <FootwearPage />,
  },
  {
    path: "/runway",
    element: <RunwayPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TotalPriceProvider>
        <RouterProvider router={router} />
      </TotalPriceProvider>
    </Provider>
  </React.StrictMode>
);

// Feature
// - Active Pages
