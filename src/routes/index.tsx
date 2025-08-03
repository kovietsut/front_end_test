import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { PATH } from "@/routes/path";
import GuestGuard from "@/routes/guards/GuestGuard";
import AuthLayout from "@/components/templates/AuthLayout";
import AuthGuard from "@/routes/guards/AuthGuard";
import Login from "@/pages/login";
import MainLayout from "@/components/templates/MainLayou";
import Error401Page from "@/pages/error/Error401.page";
import Error404Page from "@/pages/error/Error404.page";
import TopPage from "@/pages/top";

function Routes() {
  return useRoutes([
    { element: <Navigate to={PATH.top} replace />, index: true },
    {
      path: "auth",
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [{ path: "login", Component: Login }],
    },
    {
      path: "app",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH.top} replace />, index: true },
        { path: "top", Component: TopPage },
      ],
    },
    { path: "401", Component: Error401Page },
    { path: "404", Component: Error404Page },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// ----------------------------------------------------------------------------------
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
