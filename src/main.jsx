import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import FAQ from "./pages/FAQ.jsx";
import Blog from "./pages/Blog.jsx";
import BlogSingle from "./pages/BlogSingle.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "FAQs", element: <FAQ /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogSingle /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
