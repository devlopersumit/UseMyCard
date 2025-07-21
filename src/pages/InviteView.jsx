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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F0FF] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-[#907CE2] mb-6 text-center">
            {authMode === 'login' ? 'Login to View Shared Card' : 'Sign Up to View Shared Card'}
          </h2>
          {authMode === 'login' ? (
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
          ) : (
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