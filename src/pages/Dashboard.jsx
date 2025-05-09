import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { FaCreditCard, FaHistory } from 'react-icons/fa'
import './CSS/Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalCards: 0,
    totalLogs: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch total cards
        const { count: cardsCount } = await supabase
          .from('cards')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id)

        // Fetch total logs
        const { count: logsCount } = await supabase
          .from('logs')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id)

        setStats({
          totalCards: cardsCount || 0,
          totalLogs: logsCount || 0,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [user.id])

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, {user.user_metadata?.name || 'User'} 👋</h1>
        <p>Here's an overview of your card usage</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaCreditCard />
          </div>
          <div className="stat-content">
            <h3>Total Cards</h3>
            <p className="stat-value">{stats.totalCards}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaHistory />
          </div>
          <div className="stat-content">
            <h3>Usage Logs</h3>
            <p className="stat-value">{stats.totalLogs}</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <a href="/add-card" className="action-card">
            <h3>Add New Card</h3>
            <p>Register a new card to share with others</p>
          </a>
          <a href="/cards" className="action-card">
            <h3>View My Cards</h3>
            <p>See all your registered cards</p>
          </a>
          <a href="/logs" className="action-card">
            <h3>View Usage Logs</h3>
            <p>Check who used your cards</p>
          </a>
        </div>
      </div>
    </div>
  )
} 