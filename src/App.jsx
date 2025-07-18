import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import DashboardNavbar from "./Components/DashboardNavbar";

//Landing Page Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturesCard from "./Components/FeaturesCard";
import UseMyCardWorking from "./Components/UseMyCardWorking";
import CardBenefit from "./Components/CardBenefit";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import MyCards from "./pages/MyCards";
import UsageLogs from "./pages/UsageLogs";
import AddCard from "./pages/AddCard";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

// Home component to organize landing page
const Home = () => (
  <>
    <Hero />
    <FeaturesCard />
    <UseMyCardWorking />
    <CardBenefit />
    <FAQ />
    <Footer />
  </>
);

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  // List of dashboard/protected routes
  const dashboardRoutes = [
    "/dashboard",
    "/my-cards",
    "/usage-logs",
    "/add-card"
  ];
  const isDashboardPage = dashboardRoutes.some((route) => location.pathname.startsWith(route));

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <>
      {isDashboardPage ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-cards"
          element={
            <ProtectedRoute>
              <MyCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usage-logs"
          element={
            <ProtectedRoute>
              <UsageLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-card"
          element={
            <ProtectedRoute>
              <AddCard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
