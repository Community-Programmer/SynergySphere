import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import MainLayout from "./layout/MainLayout";
import DashBoardLayout from "./layout/DashBoardLayout";
import Projects from "./pages/Home/Projects";
import NewProject from "./pages/Home/NewProject";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <DashBoardLayout />,
    children: [
  { path: "/projects", element: <Projects /> },
  { path: "/projects/new", element: <NewProject /> },
  { path: "/my-task", element: <div>My Task Page</div> },
    ],
  },
]);

export default router;