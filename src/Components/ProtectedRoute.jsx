import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './CSS/ProtectedRoute.css'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
} 