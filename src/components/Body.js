import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const Body = ()=>{
    const appRouter = createBrowserRouter(
        [
          {
            path:"/",
            element:<Login/>,
          },
              {
                path:"/Browse",
                element:<Browse/>
              }
            ]
      )
    return(
        <div>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
    )
}
export default Body;