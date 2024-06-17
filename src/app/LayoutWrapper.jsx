import LayoutWrapperDashboard from "@/components/Dashboard/LayoutWrapperDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <LayoutWrapperDashboard>{children}</LayoutWrapperDashboard>;
    </>
  );
}
