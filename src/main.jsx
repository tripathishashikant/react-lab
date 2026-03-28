import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/app/router.jsx";
import Loader from "@/shared/components/loader/Loader.jsx";

import "@/styles/style.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<Loader />} />
);
