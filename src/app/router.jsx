import { createBrowserRouter, redirect } from "react-router-dom"

import MainLayout from "@/layouts/MainLayout"

import { features } from "@/features";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => redirect("/topics"),
      },
      ...features.map((f) => ({
        id: f.id,
        path: f.path,
        Component: f.component,
      })),
    ]
  },
]

const router = createBrowserRouter(routes)

export default router
