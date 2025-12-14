
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import FAQ from './pages/FAQ.jsx'
import Blog from './pages/Blog.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
import Contact from './pages/Contact.jsx';
import Erorr from './pages/Erorr.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "FAQ", element: <FAQ /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogSingle /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Erorr /> },
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
