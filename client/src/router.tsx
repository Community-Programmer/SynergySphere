import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Features from "./pages/Features/Features";
import MainLayout from "./layout/MainLayout";
import DashBoardLayout from "./layout/DashBoardLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/features", element: <Features /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/pricing",
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    element: <DashBoardLayout />,
    children: [
      { path: "/projects", element: <div>Projects Page</div> },
      { path: "/my-task", element: <div>My Task Page</div> },
    ],
  },
]);

export default router;
