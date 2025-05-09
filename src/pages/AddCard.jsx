import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import './CSS/AddCard.css'

export default function AddCard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    card_name: '',
    bank_name: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.from('cards').insert([
        {
          user_id: user.id,
          card_name: formData.card_name,
          bank_name: formData.bank_name,
        },
      ])

      if (error) throw error

      // Reset form and redirect to cards page
      setFormData({ card_name: '', bank_name: '' })
      navigate('/cards')
    } catch (error) {
      console.error('Error adding card:', error)
      setError('Failed to add card. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="add-card-page">
      <div className="add-card-header">
        <h1>Add New Card</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="add-card-form">
        <div className="form-group">
          <label htmlFor="card_name">Card Name</label>
          <input
            type="text"
            id="card_name"
            name="card_name"
            value={formData.card_name}
            onChange={handleChange}
            placeholder="Enter card name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bank_name">Bank Name</label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            value={formData.bank_name}
            onChange={handleChange}
            placeholder="Enter bank name"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate('/cards')}
            disabled={loading}
          >
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Adding Card...' : 'Add Card'}
          </button>
        </div>
      </form>
    </div>
  )
} 