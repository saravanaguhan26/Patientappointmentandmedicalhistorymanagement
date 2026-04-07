import { Link } from 'react-router-dom';
import { Activity, CalendarCheck, ShieldCheck, HeartPulse } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar for Landing */}
      <nav className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderRadius: 0, border: 'none', borderBottom: '1px solid var(--glass-border)'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)' }}>
          <Activity size={28} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>SmartCare</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login" className="btn btn-outline">Log In</Link>
          <Link to="/login" className="btn btn-primary">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(16,185,129,0.05) 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-approved" style={{ marginBottom: '1rem' }}>Modern Healthcare Solution</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            Your Health,<br/><span style={{ color: 'var(--primary-blue)' }}>Managed Securely.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Book appointments seamlessly, access your medical history anytime, and connect with top doctors through our intuitive dashboard.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/login" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Book an Appointment
            </Link>
            <a href="#features" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '5rem 2rem', background: 'var(--bg-color)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem' }}>Why Choose SmartCare?</h2>
        <div className="grid grid-cols-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', margin: '0 auto 1.5rem auto' }}>
              <CalendarCheck size={30} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Easy Appointments</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Book, reschedule, or cancel your doctor's appointments with just a few clicks.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--soft-green)', margin: '0 auto 1.5rem auto' }}>
              <HeartPulse size={30} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Medical Records</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Access your complete medical history intuitively organized in one secure place.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--danger-red)', margin: '0 auto 1.5rem auto' }}>
              <ShieldCheck size={30} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Highly Secure</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Your data is encrypted and accessible only by you and your authorized healthcare providers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'var(--sidebar-bg)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>&copy; 2026 SmartCare Medical Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}
