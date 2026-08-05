import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import CategoryPlaceholder from "@/pages/CategoryPlaceholder/CategoryPlaceholder";
import Home from "@/pages/Home/Home";
import TypeScript from "@/pages/TypeScript/TypeScript";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "react",
          element: <CategoryPlaceholder title="React" />,
        },
        {
          path: "typescript",
          element: <TypeScript />,
        },
        {
          path: "javascript",
          element: <CategoryPlaceholder title="JavaScript" />,
        },
        {
          path: "node",
          element: <CategoryPlaceholder title="Node.js" />,
        },
        {
          path: "sql",
          element: <CategoryPlaceholder title="SQL" />,
        },
        {
          path: "palantir",
          element: <CategoryPlaceholder title="Palantir" />,
        },
        {
          path: "algorithms",
          element: <CategoryPlaceholder title="Algorithms" />,
        },
        {
          path: "system-design",
          element: <CategoryPlaceholder title="System Design" />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
