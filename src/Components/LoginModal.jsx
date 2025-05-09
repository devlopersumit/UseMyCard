import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FaGoogle } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import './CSS/LoginModal.css'

export default function LoginModal({ isOpen, onClose }) {
  const { signIn, signInWithGoogle } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { error } = await signIn(formData);
      if (error) throw error;
      onClose();
    } catch (error) {
      console.error('Login failed:', error);
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Login failed. Please try again.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const { error } = await signInWithGoogle();
      if (error) throw error;
      onClose();
    } catch (error) {
      console.error('Google login failed:', error);
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Google login failed. Please try again.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="modal-container" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="modal-backdrop" />
        </Transition.Child>

        <div className="modal-container">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="modal-panel">
              <div className="modal-header">
                <Dialog.Title as="h3" className="modal-title">
                  Login
                </Dialog.Title>
                <button 
                  onClick={onClose} 
                  className="close-button"
                  disabled={isLoading}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {errors.submit && (
                <div className="error-message">
                  {errors.submit}
                </div>
              )}

              <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                  {errors.password && (
                    <span className="error-text">{errors.password}</span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="primary-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>

                <div className="divider">
                  <div className="divider-line" />
                  <div className="divider-text">Or continue with</div>
                </div>

                <button 
                  type="button" 
                  className="secondary-button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <FaGoogle className="h-5 w-5" />
                  {isLoading ? 'Signing in...' : 'Sign in with Google'}
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
} 