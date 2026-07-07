import AdminSidebar from "../../components/Adminsidebar";
import StatCard from "../../components/Statcard";

import "../../styles/Admin.css";

import {
  FaUserCircle,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

function ManageUsers() {
  const users = [
    {
      id: 1,
      name: "Ravi",
      email: "ravi@gmail.com",
      coins: 1250,
      cleanups: 32,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      coins: 1120,
      cleanups: 28,
      status: "Active",
    },
    {
      id: 3,
      name: "Akash",
      email: "akash@gmail.com",
      coins: 980,
      cleanups: 21,
      status: "Suspended",
    },
  ];

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <p className="breadcrumb">TrashTagGo / Admin</p>
          <h1>Manage Users</h1>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <StatCard
            title="Total Users"
            value="1250"
            subtitle="All registered users"
          />

          <StatCard
            title="Active Users"
            value="1180"
            subtitle="Currently active"
          />

          <StatCard
            title="Suspended"
            value="50"
            subtitle="Restricted accounts"
          />

          <StatCard
            title="New Users"
            value="20"
            subtitle="Joined this month"
          />
        </div>

        {/* Analytics Section */}
        <div className="bottom-grid">
          {/* Recently Registered */}
          <div className="dashboard-card">
            <h2>Recently Registered</h2>

            <div className="user-preview">
              <FaUserCircle />
              <div>
                <h4>Ravi Kumar</h4>
                <p>Joined 2 days ago</p>
              </div>
            </div>

            <div className="user-preview">
              <FaUserCircle />
              <div>
                <h4>Priya Sharma</h4>
                <p>Joined 5 days ago</p>
              </div>
            </div>

            <div className="user-preview">
              <FaUserCircle />
              <div>
                <h4>Akash Patel</h4>
                <p>Joined 1 week ago</p>
              </div>
            </div>
          </div>

         <div className="dashboard-card">
  <h2>User Growth Analytics</h2>

  <div className="analytics-card">
  <div className="analytics-bar" style={{ height: "40%" }}></div>
  <div className="analytics-bar" style={{ height: "55%" }}></div>
  <div className="analytics-bar" style={{ height: "70%" }}></div>
  <div className="analytics-bar" style={{ height: "60%" }}></div>
  <div className="analytics-bar" style={{ height: "85%" }}></div>
  <div className="analytics-bar" style={{ height: "100%" }}></div>
</div>

<div className="analytics-labels">
  <span>Jan</span>
  <span>Feb</span>
  <span>Mar</span>
  <span>Apr</span>
  <span>May</span>
  <span>Jun</span>
</div>

<div className="chart-summary">
    <div>
      <h3>1250</h3>
      <p>Total Users</p>
    </div>

    <div>
      <h3>1180</h3>
      <p>Active Users</p>
    </div>

    <div>
      <h3>+20</h3>
      <p>This Month</p>
    </div>
  </div>
</div>
        </div>

        {/* Search and Add User */}
<div className="users-toolbar">
  <div className="search-box">
  <FaSearch className="search-icon" />

  <input
    type="text"
    placeholder="Search users..."
    className="search-input"
  />
</div>

  <button className="add-user-btn">
    + Add User
  </button>
</div>
<div className="filter-tabs">
  <button className="active-tab">
    All Users
  </button>

  <button>
    Active
  </button>

  <button>
    Suspended
  </button>
</div>

        {/* Users Table */}
        <div className="dashboard-card">
          <div className="table-info">
  Showing 3 of 1250 users
</div>
         <table className="users-table">
  <thead>
    <tr>
      <th>User</th>
      <th>Email</th>
      <th>GreenCoins</th>
      <th>Cleanups</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>
          <div className="table-user">
            <FaUserCircle className="table-avatar" />
            {user.name}
          </div>
        </td>

        <td>{user.email}</td>
        <td>{user.coins}</td>
        <td>{user.cleanups}</td>

        <td>
          <span
            className={
              user.status === "Active"
                ? "status-active"
                : "status-suspended"
            }
          >
            {user.status}
          </span>
        </td>

        <td>
          <button className="icon-btn edit-btn">
            <FaEdit />
          </button>

          <button className="icon-btn delete-btn">
            <FaTrash />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

{/* Pagination */}
<div className="pagination">
  <button>Previous</button>

  <button className="active-page">
    1
  </button>

  <button>2</button>

  <button>3</button>

  <button>Next</button>
</div>
        </div> 

      </div> 

    </div> 
  );
}

export default ManageUsers;


