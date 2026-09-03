import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Brain,
  CloudSun,
  CreditCard,
  Bell,
  User,
  LogOut,
  Plus,
  TrendingUp,
  Users,
  IndianRupee,
  Menu,
} from "lucide-react";

const FarmerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Products",
      value: "24",
      icon: Package,
      change: "+8%",
    },
    {
      title: "Total Orders",
      value: "156",
      icon: ShoppingCart,
      change: "+12%",
    },
    {
      title: "Revenue",
      value: "₹48,520",
      icon: IndianRupee,
      change: "+18%",
    },
    {
      title: "Customers",
      value: "89",
      icon: Users,
      change: "+10%",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD1025",
      customer: "Ananya",
      product: "Fresh Tomatoes",
      amount: "₹240",
      status: "Delivered",
    },
    {
      id: "#ORD1026",
      customer: "Rahul",
      product: "Organic Carrots",
      amount: "₹180",
      status: "Processing",
    },
    {
      id: "#ORD1027",
      customer: "Sneha",
      product: "Fresh Spinach",
      amount: "₹120",
      status: "Pending",
    },
    {
      id: "#ORD1028",
      customer: "Arjun",
      product: "Organic Potatoes",
      amount: "₹350",
      status: "Delivered",
    },
  ];

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/farmer-dashboard",
    },
    {
      name: "Add Product",
      icon: Plus,
      path: "/farmer/add-product",
    },
    {
      name: "My Products",
      icon: Package,
      path: "/farmer/products",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      path: "/farmer/orders",
    },
    {
      name: "Inventory",
      icon: Package,
      path: "/farmer/inventory",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      path: "/farmer/analytics",
    },
    {
      name: "AI Prediction",
      icon: Brain,
      path: "/farmer/ai-prediction",
    },
    {
      name: "Weather",
      icon: CloudSun,
      path: "/farmer/weather",
    },
    {
      name: "Payments",
      icon: CreditCard,
      path: "/farmer/payments",
    },
    {
      name: "Notifications",
      icon: Bell,
      path: "/farmer/notifications",
    },
    {
      name: "Profile",
      icon: User,
      path: "/farmer/profile",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="farmer-dashboard">
      {/* Sidebar */}
      <aside className="farmer-sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">🌱</div>
          <div>
            <h2>FarmDirect</h2>
            <span>Farmer Portal</span>
          </div>
        </div>

        <div className="farmer-profile">
          <div className="profile-avatar">👨‍🌾</div>
          <div>
            <h3>Ramesh Kumar</h3>
            <p>Organic Farmer</p>
          </div>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`sidebar-item ${
                  item.name === "Dashboard" ? "active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="farmer-main">
        {/* Topbar */}
        <header className="dashboard-header">
          <div>
            <h1>Good Morning, Ramesh! 👋</h1>
            <p>Here's what's happening with your farm today.</p>
          </div>

          <div className="header-actions">
            <button className="notification-btn">
              <Bell size={21} />
              <span className="notification-dot"></span>
            </button>

            <div className="header-user">
              <div className="small-avatar">👨‍🌾</div>
              <div>
                <strong>Ramesh Kumar</strong>
                <small>Farmer</small>
              </div>
            </div>
          </div>
        </header>

        {/* Welcome Banner */}
        <section className="welcome-banner">
          <div>
            <span className="banner-label">FARMER DASHBOARD</span>
            <h2>Grow more. Sell better. 🌾</h2>
            <p>
              Manage your products, track orders and monitor your farm business
              from one place.
            </p>

            <button
              className="add-product-btn"
              onClick={() => navigate("/farmer/add-product")}
            >
              <Plus size={18} />
              Add New Product
            </button>
          </div>

          <div className="banner-illustration">🌾</div>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={index}>
                <div className="stat-top">
                  <div className="stat-icon">
                    <Icon size={22} />
                  </div>

                  <span className="stat-change">
                    <TrendingUp size={14} />
                    {stat.change}
                  </span>
                </div>

                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
              </div>
            );
          })}
        </section>

        {/* Middle Section */}
        <section className="dashboard-grid">
          {/* Sales Chart */}
          <div className="dashboard-card sales-card">
            <div className="card-header">
              <div>
                <h2>Sales Overview</h2>
                <p>Your sales performance this week</p>
              </div>

              <select>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="chart">
              <div className="chart-y-axis">
                <span>₹10k</span>
                <span>₹8k</span>
                <span>₹6k</span>
                <span>₹4k</span>
                <span>₹2k</span>
                <span>₹0</span>
              </div>

              <div className="chart-area">
                <div className="chart-lines">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="bar-container">
                  <div className="bar" style={{ height: "42%" }}>
                    <span>Mon</span>
                  </div>
                  <div className="bar" style={{ height: "58%" }}>
                    <span>Tue</span>
                  </div>
                  <div className="bar" style={{ height: "48%" }}>
                    <span>Wed</span>
                  </div>
                  <div className="bar" style={{ height: "75%" }}>
                    <span>Thu</span>
                  </div>
                  <div className="bar" style={{ height: "65%" }}>
                    <span>Fri</span>
                  </div>
                  <div className="bar" style={{ height: "88%" }}>
                    <span>Sat</span>
                  </div>
                  <div className="bar" style={{ height: "70%" }}>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card quick-card">
            <div className="card-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Manage your farm quickly</p>
              </div>
            </div>

            <div className="quick-actions">
              <button onClick={() => navigate("/farmer/add-product")}>
                <div>➕</div>
                <span>Add Product</span>
              </button>

              <button onClick={() => navigate("/farmer/products")}>
                <div>🥕</div>
                <span>My Products</span>
              </button>

              <button onClick={() => navigate("/farmer/orders")}>
                <div>📦</div>
                <span>View Orders</span>
              </button>

              <button onClick={() => navigate("/farmer/analytics")}>
                <div>📊</div>
                <span>Analytics</span>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="dashboard-grid bottom-grid">
          {/* Recent Orders */}
          <div className="dashboard-card orders-card">
            <div className="card-header">
              <div>
                <h2>Recent Orders</h2>
                <p>Your latest customer orders</p>
              </div>

              <button
                className="view-all"
                onClick={() => navigate("/farmer/orders")}
              >
                View All
              </button>
            </div>

            <div className="orders-table">
              <div className="table-head">
                <span>Order ID</span>
                <span>Customer</span>
                <span>Product</span>
                <span>Amount</span>
                <span>Status</span>
              </div>

              {recentOrders.map((order, index) => (
                <div className="table-row" key={index}>
                  <span className="order-id">{order.id}</span>
                  <span>{order.customer}</span>
                  <span>{order.product}</span>
                  <span>{order.amount}</span>
                  <span>
                    <em
                      className={`status ${order.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {order.status}
                    </em>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Farm Insights */}
          <div className="dashboard-card insights-card">
            <div className="card-header">
              <div>
                <h2>Farm Insights</h2>
                <p>Today's useful information</p>
              </div>
            </div>

            <div className="insight">
              <div className="insight-icon">🌤️</div>
              <div>
                <strong>Today's Weather</strong>
                <p>28°C · Partly Cloudy</p>
              </div>
            </div>

            <div className="insight">
              <div className="insight-icon">📈</div>
              <div>
                <strong>Sales Growth</strong>
                <p>Your sales increased by 18%</p>
              </div>
            </div>

            <div className="insight">
              <div className="insight-icon">🤖</div>
              <div>
                <strong>AI Suggestion</strong>
                <p>Tomato demand may rise this week.</p>
              </div>
            </div>

            <button
              className="insight-btn"
              onClick={() => navigate("/farmer/ai-prediction")}
            >
              View AI Predictions →
            </button>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .farmer-dashboard {
          min-height: 100vh;
          display: flex;
          background: #f5f7f4;
          color: #243126;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* Sidebar */
        .farmer-sidebar {
          width: 260px;
          min-height: 100vh;
          background: #163b27;
          color: white;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 10;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 5px 10px 25px;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          background: #dff4df;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .sidebar-logo h2 {
          margin: 0;
          font-size: 20px;
        }

        .sidebar-logo span {
          font-size: 11px;
          opacity: .65;
        }

        .farmer-profile {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 22px 10px;
        }

        .profile-avatar,
        .small-avatar {
          width: 42px;
          height: 42px;
          background: #e5f2df;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
        }

        .farmer-profile h3 {
          margin: 0;
          font-size: 14px;
        }

        .farmer-profile p {
          margin: 4px 0 0;
          font-size: 11px;
          opacity: .65;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .sidebar-item {
          border: none;
          background: transparent;
          color: rgba(255,255,255,.72);
          padding: 11px 13px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
          transition: .2s;
        }

        .sidebar-item:hover {
          background: rgba(255,255,255,.08);
          color: white;
        }

        .sidebar-item.active {
          background: #76a96d;
          color: white;
        }

        .logout-btn {
          margin-top: auto;
          border: none;
          background: rgba(255,255,255,.08);
          color: white;
          padding: 12px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-size: 13px;
        }

        /* Main */
        .farmer-main {
          margin-left: 260px;
          width: calc(100% - 260px);
          padding: 30px 35px;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .dashboard-header h1 {
          margin: 0 0 6px;
          font-size: 26px;
        }

        .dashboard-header p {
          margin: 0;
          color: #758077;
          font-size: 13px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .notification-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #e0e6df;
          background: white;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #36513d;
        }

        .notification-dot {
          width: 7px;
          height: 7px;
          background: #e45c4d;
          border-radius: 50%;
          position: absolute;
          right: 9px;
          top: 8px;
        }

        .header-user {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .header-user strong {
          display: block;
          font-size: 13px;
        }

        .header-user small {
          display: block;
          margin-top: 3px;
          color: #89938c;
          font-size: 11px;
        }

        /* Banner */
        .welcome-banner {
          min-height: 190px;
          border-radius: 18px;
          padding: 30px 35px;
          background: linear-gradient(110deg, #275d38, #65985c);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .banner-label {
          font-size: 10px;
          letter-spacing: 1.5px;
          opacity: .7;
        }

        .welcome-banner h2 {
          font-size: 28px;
          margin: 8px 0;
        }

        .welcome-banner p {
          max-width: 560px;
          margin: 0 0 20px;
          font-size: 13px;
          line-height: 1.6;
          opacity: .82;
        }

        .add-product-btn {
          border: none;
          background: white;
          color: #245331;
          padding: 11px 17px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .banner-illustration {
          font-size: 105px;
          opacity: .9;
          margin-right: 55px;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e4e9e2;
          border-radius: 14px;
          padding: 19px;
        }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stat-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #eaf4e8;
          color: #4c8248;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-change {
          font-size: 11px;
          color: #4e9956;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .stat-card h3 {
          margin: 17px 0 4px;
          font-size: 25px;
        }

        .stat-card p {
          margin: 0;
          color: #7c877f;
          font-size: 12px;
        }

        /* Cards */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .dashboard-card {
          background: white;
          border: 1px solid #e3e8e1;
          border-radius: 14px;
          padding: 22px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .card-header h2 {
          margin: 0 0 5px;
          font-size: 17px;
        }

        .card-header p {
          margin: 0;
          color: #8a948d;
          font-size: 11px;
        }

        .card-header select {
          border: 1px solid #dfe5de;
          padding: 7px 10px;
          border-radius: 6px;
          color: #5d675f;
          background: white;
          font-size: 11px;
        }

        /* Chart */
        .chart {
          display: flex;
          height: 210px;
        }

        .chart-y-axis {
          width: 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 27px;
          font-size: 9px;
          color: #9ba49e;
        }

        .chart-area {
          flex: 1;
          position: relative;
          border-bottom: 1px solid #e8ece7;
        }

        .chart-lines {
          position: absolute;
          inset: 0 0 27px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .chart-lines div {
          border-top: 1px dashed #e8ece7;
        }

        .bar-container {
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          position: relative;
          z-index: 2;
        }

        .bar {
          width: 26px;
          background: #72a567;
          border-radius: 5px 5px 0 0;
          position: relative;
          min-height: 20px;
        }

        .bar span {
          position: absolute;
          top: calc(100% + 8px);
          width: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          color: #8b948e;
          text-align: center;
        }

        /* Quick actions */
        .quick-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .quick-actions button {
          border: 1px solid #e5eae4;
          background: #fafcf9;
          border-radius: 10px;
          padding: 15px 8px;
          cursor: pointer;
          text-align: center;
          transition: .2s;
        }

        .quick-actions button:hover {
          transform: translateY(-2px);
          border-color: #9bbb91;
        }

        .quick-actions button div {
          font-size: 23px;
          margin-bottom: 7px;
        }

        .quick-actions button span {
          font-size: 11px;
          color: #526057;
        }

        /* Orders */
        .view-all {
          border: none;
          background: transparent;
          color: #4b8249;
          font-size: 11px;
          cursor: pointer;
          font-weight: 600;
        }

        .orders-table {
          width: 100%;
        }

        .table-head,
        .table-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr .8fr 1fr;
          gap: 10px;
          align-items: center;
        }

        .table-head {
          background: #f7f9f6;
          padding: 11px 10px;
          border-radius: 7px;
          color: #8a938c;
          font-size: 10px;
        }

        .table-row {
          padding: 13px 10px;
          border-bottom: 1px solid #eef1ed;
          font-size: 11px;
          color: #58645b;
        }

        .order-id {
          color: #39713f;
          font-weight: 600;
        }

        .status {
          font-style: normal;
          display: inline-block;
          padding: 5px 8px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 600;
        }

        .delivered {
          background: #e5f5e5;
          color: #438047;
        }

        .processing {
          background: #fff1d9;
          color: #b37b25;
        }

        .pending {
          background: #fce7e5;
          color: #b9564b;
        }

        /* Insights */
        .insight {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid #edf0ec;
        }

        .insight-icon {
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: #f0f5ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .insight strong {
          font-size: 12px;
        }

        .insight p {
          margin: 4px 0 0;
          color: #8a938c;
          font-size: 10px;
          line-height: 1.4;
        }

        .insight-btn {
          width: 100%;
          margin-top: 16px;
          border: none;
          background: #edf5eb;
          color: #4a7d45;
          padding: 10px;
          border-radius: 7px;
          font-size: 11px;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 750px) {
          .farmer-sidebar {
            width: 70px;
            padding: 15px 8px;
          }

          .sidebar-logo h2,
          .sidebar-logo span,
          .farmer-profile div:not(.profile-avatar),
          .sidebar-item span,
          .logout-btn span {
            display: none;
          }

          .sidebar-logo {
            justify-content: center;
            padding: 5px 0 20px;
          }

          .farmer-profile {
            justify-content: center;
          }

          .sidebar-item,
          .logout-btn {
            justify-content: center;
          }

          .farmer-main {
            margin-left: 70px;
            width: calc(100% - 70px);
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .header-user {
            display: none;
          }

          .banner-illustration {
            display: none;
          }

          .welcome-banner h2 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default FarmerDashboard;