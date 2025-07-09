import React, { useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';

export default function Login() {
  const { user, signIn, signOut } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await signIn(email);
      setMessage('Check your email for the login link!');
    } catch (err) {
      setMessage('Error sending magic link.');
    }
  };

  if (user) {
    return (
      <div className="text-center my-8">
        <p>Signed in as {user.email}</p>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 p-4 bg-white rounded shadow">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
      {message && <p className="mt-2 text-center text-green-600">{message}</p>}
    </form>
  );
} 