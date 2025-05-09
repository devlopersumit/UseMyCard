import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaHome, FaCreditCard, FaHistory, FaPlus, FaSignOutAlt } from 'react-icons/fa'
import './CSS/DashboardLayout.css'
import logo from "../assets/Updated-UseMyCard.png";

export default function DashboardLayout({ children }) {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FaHome /> },
    { path: '/cards', label: 'My Cards', icon: <FaCreditCard /> },
    { path: '/logs', label: 'Usage Logs', icon: <FaHistory /> },
    { path: '/add-card', label: 'Add Card', icon: <FaPlus /> },
  ]

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-navbar">
        <div className="navbar-brand">
          <Link to="/dashboard">
            <img src={logo} alt="UseMyCard" className="navbar-logo" />
            <span>UseMyCard</span>
          </Link>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </nav>

      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  )
} 