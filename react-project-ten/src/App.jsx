import "./App.css";
// step1: import (npm i react-router-dom)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import ParamComponent from "../components/ParamComponent";
import Courses from "../components/Courses";
import MockTest from "../components/MockTest";
import Reports from "../components/Reports";
import NotFound from "../components/NotFound";


// step2: create Routes
const router = createBrowserRouter(
  // array of routes
  [
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element:(
        <div>
          <Navbar />
          <Dashboard /> {/* Dashboard component must have <Outlet /> */}
        </div>
      ),
        // Nested Routing
        children:[
          {
            path:'courses',
            element: <Courses/>
          },
          {
            path:'mock-tests',
            element: <MockTest/>
          },
          {
            path:'reports',
            element: <Reports/>
          },
        ],
    },
    {
      // route parameter 
      // student ke baad jo bhi hoga wo id consider kiya jayega 
      path:'/student/:id',
      element: 
      <div>
          <Navbar />
          <ParamComponent />
        </div>
    },
    {
      // The route with path: "*" is used to handle 404 - Page Not Found cases. It acts as a catch-all route, meaning if the user enters a URL that doesn’t match any defined route, this component will be rendered.
      path:"*",
      element: <NotFound/>
    }
  ]
);

function App() {
  return (
    <div>
      {/* step3: use RouterProvider which context to app for each route do this */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
