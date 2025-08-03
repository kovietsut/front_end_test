import { Outlet } from "react-router-dom";
import { Appbar } from "@/components/organisms/appbar/Appbar";

const AuthLayout: React.FC = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
