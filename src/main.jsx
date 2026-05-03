import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import router from "@/app/router";
import AppProvider from "@/app/context/AppProvider";
import Loader from "@/shared/components/loader/Loader";

import "@/styles/style.scss";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <HelmetProvider>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </HelmetProvider>
  </AppProvider>
);

