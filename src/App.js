// import logo from './logo.svg';
// import './App.css';
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from './Navbar';
import Homepage from "./Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      </>,
      errorElement: <p>Page Not Found</p>,
      children: [
        {
          path: "/",
          element: <><Homepage/></>  
        },
      ],
    }]
  );
  
  RouterProvider(router);
}

export default App;
