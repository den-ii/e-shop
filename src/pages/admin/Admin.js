import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/admin/navbar/Navbar";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";

import styles from "./Admin.module.scss";

const Admin = () => {
  return (
    <AdminOnlyRoute>
      <div className={styles.admin}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </AdminOnlyRoute>
  );
};

export default Admin;
