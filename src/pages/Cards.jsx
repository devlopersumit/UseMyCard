import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { FaCreditCard, FaTrash } from 'react-icons/fa'
import './CSS/Cards.css'

export default function Cards() {
  const { user } = useAuth()
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCards()
  }, [user.id])

  async function fetchCards() {
    try {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setCards(data || [])
    } catch (error) {
      console.error('Error fetching cards:', error)
      setError('Failed to load cards. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteCard(cardId) {
    if (!window.confirm('Are you sure you want to delete this card?')) return

    try {
      const { error } = await supabase
        .from('cards')
        .delete()
        .eq('id', cardId)
        .eq('user_id', user.id)

      if (error) throw error
      setCards(cards.filter(card => card.id !== cardId))
    } catch (error) {
      console.error('Error deleting card:', error)
      setError('Failed to delete card. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="cards-loading">
        <div className="loading-spinner"></div>
        <p>Loading your cards...</p>
      </div>
    )
  }

  return (
    <div className="cards-page">
      <div className="cards-header">
        <h1>My Cards</h1>
        <a href="/add-card" className="add-card-button">
          Add New Card
        </a>
      </div>

      {error && <div className="error-message">{error}</div>}

      {cards.length === 0 ? (
        <div className="empty-state">
          <FaCreditCard className="empty-icon" />
          <h2>No Cards Added Yet</h2>
          <p>Start by adding your first card to share with others.</p>
          <a href="/add-card" className="add-card-button">
            Add Your First Card
          </a>
        </div>
      ) : (
        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="card-item">
              <div className="card-content">
                <h3>{card.card_name}</h3>
                <p className="bank-name">{card.bank_name}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteCard(card.id)}
                title="Delete card"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 