import './App.css'
import CardBenefits from './Components/CardBenfits'
import FeaturesCard from './Components/FeaturesCard'
import Hero from './Components/Hero'
import Navbar from './components/Navbar'
import UseMyCardWorking from './Components/UseMyCardworking'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './components/DashboardLayout'
import LoginModal from './Components/LoginModal'
import SignUpModal from './Components/SignUpModal'
import Dashboard from './pages/Dashboard'
import Cards from './pages/Cards'
import AddCard from './pages/AddCard'
import Logs from './pages/Logs'
import { useState } from 'react'

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Navbar
                    onLoginClick={() => setIsLoginModalOpen(true)}
                    onSignupClick={() => setIsSignUpModalOpen(true)}
                  />
                  <Hero
                    onLoginClick={() => setIsLoginModalOpen(true)}
                    onSignupClick={() => setIsSignUpModalOpen(true)}
                  />
                  <FeaturesCard />
                  <UseMyCardWorking />
                  <CardBenefits />
                  <FAQ />
                  <Footer />
                </>
              }
            />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/cards"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Cards />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-card"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <AddCard />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/logs"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Logs />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Auth Modals */}
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
          <SignUpModal
            isOpen={isSignUpModalOpen}
            onClose={() => setIsSignUpModalOpen(false)}
          />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
