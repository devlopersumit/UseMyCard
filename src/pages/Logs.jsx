import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { FaHistory } from 'react-icons/fa'
import './CSS/Logs.css'

export default function Logs() {
  const { user } = useAuth()
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchLogs()
  }, [user.id])

  async function fetchLogs() {
    try {
      const { data, error } = await supabase
        .from('logs')
        .select(`
          *,
          cards (
            card_name,
            bank_name
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setLogs(data || [])
    } catch (error) {
      console.error('Error fetching logs:', error)
      setError('Failed to load logs. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="logs-loading">
        <div className="loading-spinner"></div>
        <p>Loading usage logs...</p>
      </div>
    )
  }

  return (
    <div className="logs-page">
      <div className="logs-header">
        <h1>Usage Logs</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      {logs.length === 0 ? (
        <div className="empty-state">
          <FaHistory className="empty-icon" />
          <h2>No Usage Logs Yet</h2>
          <p>When someone uses your card, it will appear here.</p>
        </div>
      ) : (
        <div className="logs-container">
          {logs.map((log) => (
            <div key={log.id} className="log-item">
              <div className="log-content">
                <div className="log-header">
                  <h3>{log.cards.card_name}</h3>
                  <span className="bank-name">{log.cards.bank_name}</span>
                </div>
                <div className="log-details">
                  <p className="amount">₹{log.amount}</p>
                  <p className="reason">{log.reason}</p>
                </div>
                <div className="log-footer">
                  <span className="timestamp">
                    {new Date(log.created_at).toLocaleString()}
                  </span>
                  <span className="user">Used by: {log.used_by}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 