import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import router from "@/app/router";
import Loader from "@/shared/components/loader/Loader";

import "@/styles/style.scss";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </HelmetProvider>
);
