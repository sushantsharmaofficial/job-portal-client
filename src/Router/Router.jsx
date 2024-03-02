import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJobs from "../Pages/UpdateJobs";
import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    
      {
        path: "/edit-job/:id",
        element: <UpdateJobs />,
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-97fe.onrender.com/all-jobs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
