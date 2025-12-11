import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaEnvelope, FaExclamationCircle } from 'react-icons/fa'
import { Container, SectionTitle, Card, Button } from '../components/ui'

const ReviewCard = ({ review, index, onEdit, onDelete, onApprove, onReject, isPending = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className={`p-6 h-full flex flex-col hover:border-accent-primary/30 transition-all duration-300 relative ${isPending ? 'border-yellow-500/30 bg-yellow-500/5' : ''}`}>
        {/* Admin Actions - Only visible in admin mode */}
        {onEdit && onDelete && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {isPending && onApprove && onReject && (
              <>
                <button
                  onClick={() => onApprove(review)}
                  className="w-8 h-8 rounded-lg bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center text-green-400 transition-colors"
                  title="Approve"
                >
                  <FaCheck size={14} />
                </button>
                <button
                  onClick={() => onReject(review.id)}
                  className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center text-red-400 transition-colors"
                  title="Reject"
                >
                  <FaTimes size={14} />
                </button>
              </>
            )}
            {!isPending && (
              <>
                <button
                  onClick={() => onEdit(review)}
                  className="w-8 h-8 rounded-lg bg-dark-700 hover:bg-accent-primary/20 flex items-center justify-center text-gray-400 hover:text-accent-primary transition-colors"
                >
                  <FaEdit size={14} />
                </button>
                <button
                  onClick={() => onDelete(review.id)}
                  className="w-8 h-8 rounded-lg bg-dark-700 hover:bg-red-500/20 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                >
                  <FaTrash size={14} />
                </button>
              </>
            )}
          </div>
        )}

        {isPending && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
            Pending Approval
          </div>
        )}

        {/* Quote Icon */}
        <div className="mb-4">
          <FaQuoteLeft className="text-3xl text-accent-primary/30" />
        </div>

        {/* Review Text */}
        <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
          "{review.review}"
        </p>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
            />
          ))}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-dark-600/50">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full border-2 border-accent-primary/30 object-cover"
            onError={(e) => {
              e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`
            }}
          />
          <div className="flex-1">
            <h4 className="text-white font-semibold">{review.name}</h4>
            <p className="text-gray-400 text-sm">{review.role || 'Client'}</p>
            {review.email && (
              <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                <FaEnvelope size={10} />
                {review.email}
              </p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Public Review Form (for visitors)
const PublicReviewForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    avatar: '',
    rating: 5,
    review: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.review) {
      alert('Please fill in name and review')
      return
    }
    await onSubmit(formData)
    // Reset form after submission
    setFormData({
      name: '',
      role: '',
      email: '',
      avatar: '',
      rating: 5,
      review: '',
    })
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-white mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Role/Title</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="CEO, Company Name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Avatar URL (optional)</label>
          <input
            type="url"
            value={formData.avatar}
            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFormData({ ...formData, rating })}
                className={`p-2 rounded-lg transition-colors ${
                  formData.rating >= rating
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                <FaStar />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Review *</label>
          <textarea
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none resize-none"
            placeholder="Write your review here..."
          />
        </div>

        <Button type="submit" size="sm" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </Button>
        <p className="text-gray-500 text-xs text-center">
          Your review will be reviewed before being published.
        </p>
      </form>
    </Card>
  )
}

// Admin Review Form (for editing)
const AdminReviewForm = ({ review, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: review?.name || '',
    role: review?.role || '',
    email: review?.email || '',
    avatar: review?.avatar || '',
    rating: review?.rating || 5,
    review: review?.review || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.review) {
      alert('Please fill in name and review')
      return
    }
    onSave(formData)
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-300 mb-2 text-sm">Role/Title</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="CEO, Company Name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Avatar URL</label>
          <input
            type="url"
            value={formData.avatar}
            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFormData({ ...formData, rating })}
                className={`p-2 rounded-lg transition-colors ${
                  formData.rating >= rating
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                <FaStar />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 text-sm">Review *</label>
          <textarea
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none resize-none"
            placeholder="Write your review here..."
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" size="sm">
            {review ? 'Update Review' : 'Add Review'}
          </Button>
          <Button type="button" variant="secondary" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}

const Reviews = () => {
  const [approvedReviews, setApprovedReviews] = useState([])
  const [pendingReviews, setPendingReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingReview, setEditingReview] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showPublicForm, setShowPublicForm] = useState(false)
  const [pendingPage, setPendingPage] = useState(1)
  const reviewsPerPage = 6

  // API base URL
  const API_BASE = '/api/reviews'

  // Fetch reviews from API
  const fetchReviews = async (useAdminMode = false) => {
    try {
      setIsLoading(true)
      const adminPassword = useAdminMode ? (process.env.REACT_APP_ADMIN_PASSWORD || 'mazharchutiya123') : null
      const url = adminPassword 
        ? `${API_BASE}?adminPassword=${encodeURIComponent(adminPassword)}`
        : API_BASE
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.success) {
        setApprovedReviews(data.approved || [])
        setPendingReviews(data.pending || [])
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
      // Fallback to empty arrays on error
      setApprovedReviews([])
      setPendingReviews([])
    } finally {
      setIsLoading(false)
    }
  }

  // Load reviews from API on mount
  useEffect(() => {
    // Check if admin mode is enabled
    const adminMode = localStorage.getItem('portfolio-admin-mode') === 'true'
    setIsAdmin(adminMode)
    
    fetchReviews(adminMode)
  }, [])

  // Refetch reviews when admin mode changes
  useEffect(() => {
    fetchReviews(isAdmin)
  }, [isAdmin])

  // Keyboard shortcut for admin mode (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        if (!isAdmin) {
          const password = prompt('Enter admin password:')
          if (password === 'mazharchutiya123') {
            setIsAdmin(true)
            localStorage.setItem('portfolio-admin-mode', 'true')
            alert('Admin mode enabled!')
          } else if (password) {
            alert('Incorrect password')
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAdmin])

  // Public user submits review
  const handlePublicSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch(`${API_BASE}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Clone response to read it safely
      const responseClone = response.clone()
      let data
      
      try {
        data = await response.json()
      } catch (jsonError) {
        // If JSON parsing fails, try to read as text from the clone
        try {
          const text = await responseClone.text()
          console.error('Response text (not JSON):', text)
          alert(`Server error: ${response.status} ${response.statusText}. Response: ${text.substring(0, 100)}`)
        } catch (textError) {
          console.error('Error reading response:', textError)
          alert(`Server error: ${response.status} ${response.statusText}. Please check the console for details.`)
        }
        return
      }

      if (response.ok && data.success) {
        alert('Thank you! Your review has been submitted and is pending approval. You should receive a confirmation email shortly.')
        setShowPublicForm(false)
        // Refresh reviews to show the new pending review (if admin)
        if (isAdmin) {
          await fetchReviews()
        }
      } else {
        alert(data.error || data.message || 'There was an error submitting your review. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      alert(`Network error: ${error.message}. Please check your connection and try again.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Admin actions
  const handleAdd = () => {
    setEditingReview(null)
    setShowForm(true)
  }

  const handleEdit = (review) => {
    setEditingReview(review)
    setShowForm(true)
  }

  const handleSave = async (formData) => {
    if (editingReview) {
      // For now, editing is not implemented in API - you can add it later
      alert('Edit functionality will be added soon. For now, please delete and recreate the review.')
      setShowForm(false)
      setEditingReview(null)
      return
    } else {
      // Add new review directly (admin only) - submit as approved
      try {
        const response = await fetch(`${API_BASE}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          // Immediately approve it
          await handleApprove({ id: data.reviewId })
        } else {
          alert(data.error || 'Error adding review')
        }
      } catch (error) {
        console.error('Error adding review:', error)
        alert('Error adding review')
      }
    }
    setShowForm(false)
    setEditingReview(null)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) {
      return
    }

    try {
      const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'mazharchutiya123'
      const response = await fetch(`${API_BASE}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewId: id,
          adminPassword,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        alert('Review deleted successfully!')
        await fetchReviews()
      } else {
        alert(data.error || 'Error deleting review')
      }
    } catch (error) {
      console.error('Error deleting review:', error)
      alert('Error deleting review')
    }
  }

  const handleApprove = async (review) => {
    try {
      const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'mazharchutiya123'
      const response = await fetch(`${API_BASE}/approve`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewId: review.id,
          adminPassword,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        alert('Review approved and published!')
        await fetchReviews()
      } else {
        alert(data.error || 'Error approving review')
      }
    } catch (error) {
      console.error('Error approving review:', error)
      alert('Error approving review')
    }
  }

  const handleReject = async (id) => {
    if (!window.confirm('Are you sure you want to reject this review?')) {
      return
    }

    // Reject is same as delete
    await handleDelete(id)
  }

  const handleBulkApprove = async () => {
    if (!window.confirm(`Are you sure you want to approve all ${pendingReviews.length} pending reviews?`)) {
      return
    }

    try {
      const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'mazharchutiya123'
      let successCount = 0
      let failCount = 0

      for (const review of pendingReviews) {
        try {
          const response = await fetch(`${API_BASE}/approve`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reviewId: review.id,
              adminPassword,
            }),
          })

          if (response.ok) {
            successCount++
          } else {
            failCount++
          }
        } catch (error) {
          failCount++
        }
      }

      alert(`Approved ${successCount} reviews${failCount > 0 ? `, ${failCount} failed` : ''}`)
      await fetchReviews()
    } catch (error) {
      console.error('Error bulk approving:', error)
      alert('Error approving reviews')
    }
  }

  const handleBulkReject = async () => {
    if (!window.confirm(`Are you sure you want to reject all ${pendingReviews.length} pending reviews?`)) {
      return
    }

    try {
      const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'mazharchutiya123'
      let successCount = 0
      let failCount = 0

      for (const review of pendingReviews) {
        try {
          const response = await fetch(`${API_BASE}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reviewId: review.id,
              adminPassword,
            }),
          })

          if (response.ok) {
            successCount++
          } else {
            failCount++
          }
        } catch (error) {
          failCount++
        }
      }

      alert(`Rejected ${successCount} reviews${failCount > 0 ? `, ${failCount} failed` : ''}`)
      await fetchReviews()
    } catch (error) {
      console.error('Error bulk rejecting:', error)
      alert('Error rejecting reviews')
    }
  }

  // Pagination for pending reviews
  const totalPendingPages = Math.ceil(pendingReviews.length / reviewsPerPage)
  const paginatedPendingReviews = pendingReviews.slice(
    (pendingPage - 1) * reviewsPerPage,
    pendingPage * reviewsPerPage
  )

  const handleCancel = () => {
    setShowForm(false)
    setEditingReview(null)
  }

  return (
    <section id="reviews" className="py-20 md:py-32 relative">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <SectionTitle 
              title="Client Reviews" 
              subtitle="What people say about working with me"
            />
            {isAdmin && pendingReviews.length > 0 && (
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                  {pendingReviews.length}
                </div>
                <FaExclamationCircle className="text-yellow-500 text-2xl" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={() => {
                  setIsAdmin(false)
                  localStorage.removeItem('portfolio-admin-mode')
                }}
                className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                Exit Admin
              </button>
            )}
            {isAdmin ? (
              <Button
                onClick={handleAdd}
                icon={<FaPlus />}
                size="sm"
              >
                Add Review
              </Button>
            ) : (
              <Button
                onClick={() => setShowPublicForm(!showPublicForm)}
                variant="secondary"
                icon={<FaPlus />}
                size="sm"
              >
                {showPublicForm ? 'Cancel' : 'Leave a Review'}
              </Button>
            )}
          </div>
        </div>

        {/* Public Review Form */}
        <AnimatePresence>
          {showPublicForm && !isAdmin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <PublicReviewForm
                onSubmit={handlePublicSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Admin Add/Edit Form */}
        <AnimatePresence>
          {showForm && isAdmin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <AdminReviewForm
                review={editingReview}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pending Reviews (Admin Only) */}
        {isAdmin && pendingReviews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">Pending Reviews</h3>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30">
                  {pendingReviews.length} {pendingReviews.length === 1 ? 'Review' : 'Reviews'}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleBulkApprove}
                  size="sm"
                  variant="secondary"
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/30"
                >
                  <FaCheck className="mr-2" />
                  Approve All
                </Button>
                <Button
                  onClick={handleBulkReject}
                  size="sm"
                  variant="secondary"
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/30"
                >
                  <FaTimes className="mr-2" />
                  Reject All
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
              {paginatedPendingReviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  index={index}
                  isPending={true}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPendingPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  onClick={() => setPendingPage(p => Math.max(1, p - 1))}
                  disabled={pendingPage === 1}
                  size="sm"
                  variant="secondary"
                >
                  Previous
                </Button>
                <span className="text-gray-400 text-sm">
                  Page {pendingPage} of {totalPendingPages}
                </span>
                <Button
                  onClick={() => setPendingPage(p => Math.min(totalPendingPages, p + 1))}
                  disabled={pendingPage === totalPendingPages}
                  size="sm"
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
            )}

            {/* Note about database */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-400 text-sm">
                <FaExclamationCircle className="inline mr-2" />
                <strong>Note:</strong> Reviews are now stored in a database and visible across all devices. 
                All review submissions are also sent to your email ({'dexadoors@gmail.com'}) for backup.
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <FaQuoteLeft className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Loading reviews...</h3>
            </div>
          </Card>
        ) : approvedReviews.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4">
                <FaQuoteLeft className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No reviews yet</h3>
              <p className="text-gray-400 mb-4">
                Be the first to share your experience working with me!
              </p>
              <p className="text-gray-500 text-xs mt-6">
                (As this website was made in December of 2025)
              </p>
            </div>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approvedReviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  index={index}
                  onEdit={isAdmin ? handleEdit : null}
                  onDelete={isAdmin ? handleDelete : null}
                />
              ))}
            </div>
            <p className="text-gray-500 text-xs text-center mt-8">
              (As this website was made in December of 2025)
            </p>
          </>
        )}
      </Container>
    </section>
  )
}

export default Reviews
