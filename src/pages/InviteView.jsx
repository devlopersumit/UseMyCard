import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function InviteView() {
  const { invite_code } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [card, setCard] = useState(null);
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  // Login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Signup form
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Check auth state
  useEffect(() => {
    let mounted = true;
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (mounted) setUser(user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      mounted = false;
      if (listener) listener.subscription.unsubscribe();
    };
  }, []);

  // Fetch card if logged in
  useEffect(() => {
    if (!user) return;
    async function fetchCard() {
      setLoading(true);
      setError('');
      setCard(null);
      // 1. Fetch invite link
      const { data: invite, error: inviteError } = await supabase
        .from('invite_links')
        .select('*')
        .eq('invite_code', invite_code)
        .single();
      if (inviteError || !invite) {
        setError('Invalid or expired invite link.');
        setLoading(false);
        return;
      }
      // 2. Fetch card details
      const { data: cardData, error: cardError } = await supabase
        .from('Card-Details')
        .select('*')
        .eq('id', invite.card_id)
        .single();
      if (cardError || !cardData) {
        setError('Card not found.');
        setLoading(false);
        return;
      }
      setCard({
        name: cardData.Card_Name,
        bank: cardData.Bank_Name,
        type: cardData.Card_Type,
        offer: cardData.Offer,
      });
      setLoading(false);
    }
    fetchCard();
  }, [invite_code, user]);

  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    }
    setAuthLoading(false);
  };

  // Handle signup form submit
  const handleSignup = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');
    if (signupPassword !== signupConfirm) {
      setError('Passwords do not match.');
      setAuthLoading(false);
      return;
    }
    const { error } = await supabase.auth.signUp({ email: signupEmail, password: signupPassword });
    if (error) {
      setError(error.message);
    }
    setAuthLoading(false);
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    setAuthLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      setError(error.message);
      setAuthLoading(false);
    }
    // On success, Supabase will redirect and update auth state
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F0FF] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-[#907CE2] mb-6 text-center">
            {authMode === 'login' ? 'Login to View Shared Card' : 'Sign Up to View Shared Card'}
          </h2>
          {authMode === 'login' ? (
            <>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={authLoading}
                />
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  disabled={authLoading}
                />
                <button
                  type="submit"
                  className="w-full bg-[#907CE2] hover:bg-[#7B68EE] text-white py-2 rounded-lg font-semibold transition-all duration-300"
                  disabled={authLoading}
                >
                  {authLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 bg-[#2563EB] text-white hover:text-black mt-4"
                disabled={authLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" fill="#FFC107"/><path d="M6.3 14.7l7 5.1C15.5 17.1 19.4 15 24 15c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3c-7.2 0-13.2 4.1-16.3 10.1z" fill="#FF3D00"/><path d="M24 43c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.7 34.9 27 36 24 36c-5.7 0-10.6-2.9-13.5-7.2l-6.6 5.1C7.8 39.1 15.3 43 24 43z" fill="#4CAF50"/><path d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2.1l-6.6 5.1C17.4 41.1 20.5 43 24 43c6.6 0 12-5.4 12-12 0-.8-.1-1.5-.2-2.2z" fill="#1976D2"/></g></svg>
                Login with Google
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleSignup} className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
                  placeholder="Email"
                  value={signupEmail}
                  onChange={e => setSignupEmail(e.target.value)}
                  required
                  disabled={authLoading}
                />
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={e => setSignupPassword(e.target.value)}
                  required
                  disabled={authLoading}
                />
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
                  placeholder="Confirm Password"
                  value={signupConfirm}
                  onChange={e => setSignupConfirm(e.target.value)}
                  required
                  disabled={authLoading}
                />
                <button
                  type="submit"
                  className="w-full bg-[#907CE2] hover:bg-[#7B68EE] text-white py-2 rounded-lg font-semibold transition-all duration-300"
                  disabled={authLoading}
                >
                  {authLoading ? 'Signing up...' : 'Sign Up'}
                </button>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 bg-[#2563EB] text-white hover:text-black mt-4"
                disabled={authLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" fill="#FFC107"/><path d="M6.3 14.7l7 5.1C15.5 17.1 19.4 15 24 15c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3c-7.2 0-13.2 4.1-16.3 10.1z" fill="#FF3D00"/><path d="M24 43c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.7 34.9 27 36 24 36c-5.7 0-10.6-2.9-13.5-7.2l-6.6 5.1C7.8 39.1 15.3 43 24 43z" fill="#4CAF50"/><path d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2.1l-6.6 5.1C17.4 41.1 20.5 43 24 43c6.6 0 12-5.4 12-12 0-.8-.1-1.5-.2-2.2z" fill="#1976D2"/></g></svg>
                Sign Up with Google
              </button>
            </>
          )}
          <div className="mt-4 text-center">
            {authMode === 'login' ? (
              <span>
                First time here?{' '}
                <button
                  className="text-[#907CE2] underline hover:text-[#7B68EE]"
                  onClick={() => { setAuthMode('signup'); setError(''); }}
                  disabled={authLoading}
                >
                  Sign Up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  className="text-[#907CE2] underline hover:text-[#7B68EE]"
                  onClick={() => { setAuthMode('login'); setError(''); }}
                  disabled={authLoading}
                >
                  Login
                </button>
              </span>
            )}
          </div>
          {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0FF] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-16">
        <h2 className="text-2xl font-bold text-[#907CE2] mb-6 text-center">Shared Card Details</h2>
        {loading ? (
          <div className="text-center text-[#907CE2] font-semibold">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">{error}</div>
        ) : card ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-[#907CE2]">{card.name}</span>
              <span className="text-xs bg-[#F0F0FF] text-[#373743] px-2 py-1 rounded">{card.type}</span>
            </div>
            <div className="text-gray-700 mb-1">Bank: <span className="font-medium">{card.bank}</span></div>
            {card.offer && (
              <div className="text-green-600 font-medium mb-2">Offer: {card.offer}</div>
            )}
            <div className="mt-6 text-center text-gray-400 text-xs">This card was shared with you via UseMyCard.</div>
          </div>
        ) : null}
      </div>
    </div>
  );
} 