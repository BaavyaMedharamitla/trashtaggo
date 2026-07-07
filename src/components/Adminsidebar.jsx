import { FaLeaf } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <FaLeaf className="leaf-logo" />
          <h2>TrashTagGo</h2>
        </div>

        <ThemeToggle />
      </div>

      <div className="sidebar-menu">
        <a href="#">Dashboard</a>
        <a href="#">Manage Users</a>
        <a href="#">Verify Submissions</a>
        <a href="#">Analytics</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </div>
  );
}
