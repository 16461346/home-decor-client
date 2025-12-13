import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlant from "../pages/Dashboard/Seller/AddPlant";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyInventory from "../pages/Dashboard/Seller/MyInventory";
import ManageOrders from "../pages/Dashboard/Seller/ManageOrders";
import { createBrowserRouter } from "react-router";
import Service from "../pages/PublicPages/Service";
import About from "../pages/PublicPages/About";
import Contact from "../pages/PublicPages/Contact";
import Covarage from "../pages/Covarage/Coverage";
import Coverage from "../pages/Covarage/Coverage";
import MyBooking from "../pages/Dashboard/Customer/MyBooking";
import PaymentHistory from "../pages/Dashboard/Customer/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('/fackCard.json').then(res=>res.json())
      },
      {
        path: "/service/:id",
        element: <PlantDetails />,
        loader:()=>fetch('/coverage.json').then(res=>res.json())
      },
      {
        path: "/services",
        element: <Service />,
        loader:()=>fetch('/fackCard.json').then(res=>res.json())
      },
      {
        path: '/coverage',
        element:<Coverage/>,
        loader: ()=>fetch('/coverage.json').then(res=>res.json())
      },
      {
        path: "/aboute",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    loader: ()=>fetch('/coverage.json').then(res=>res.json()),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-inventory",
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-booking",
        element: (
          <PrivateRoute>
            <MyBooking/>
          </PrivateRoute>
        ),
      },
      {
        path:'payment-history',
        element:(
          <PrivateRoute>
            <PaymentHistory/>
          </PrivateRoute>
        )
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);
