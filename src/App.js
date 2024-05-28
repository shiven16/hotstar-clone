import { RouterProvider, createBrowserRouter } from "react-router-dom";
import apiContextProvider from "./Components/Context.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login.js";

import Homepage from "./Components/Homepage";
import Error from "./Components/Error";
import AllShows from "./Components/AllShows.js";
import Navbar from "./Components/Navbar.js";
function App() {
  const router = createBrowserRouter([

    {path:"/",element:<Homepage/>,children:[
      {index:true, element:<AllShows/>}
    ]},
    {path:"/signup",element:<SignUp/>},
    {path:"/login",element:<Login/>},
    {path:"/error",element:<Error/>},
    {path:"*",element:<SignUp/>},
    ]);
  return(
    <apiContextProvider>
      <RouterProvider router={router} />
    </apiContextProvider>
  ) 
}

export default App;
