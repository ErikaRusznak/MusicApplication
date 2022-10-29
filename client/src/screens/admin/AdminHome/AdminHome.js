import React from "react";
import "./AdminHome.css";
import AdminHeader from "../../../component/admin/AdminHeader/AdminHeader.js";
import AdminMenu from "../../../component/admin/AdminMenu/AdminMenu.js";

const AdminHome = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <AdminHeader />
      <AdminMenu />
    </div>
  );
};

export default AdminHome;
