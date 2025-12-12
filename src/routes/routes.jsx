import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import AuthLayout from "../layouts/AuthLayout/AuthLayout.jsx";
import Signin from "../pages/Auth/Signin/Signin.jsx";
import Register from "../pages/Auth/Register/Register.jsx";
import ForgotPassword from "../pages/Auth/Forgot-password/ForgotPassword.jsx";
import OtpVerify from "../pages/Auth/Forgot-password/OTPVerify.jsx";
import NewPassword from "../pages/Auth/Forgot-password/NewPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/signin"></Navigate>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "verify-otp",
        element: <OtpVerify></OtpVerify>,
      },
      {
        path: "new-password",
        element: <NewPassword></NewPassword>,
      },
    ],
  },
]);

export default router;
