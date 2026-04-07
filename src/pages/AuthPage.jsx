import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Activity, Shield } from 'lucide-react';

export default function AuthPage() {
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'patient') navigate('/patient-dashboard');
    else if (role === 'doctor') navigate('/doctor-dashboard');
    else navigate('/admin-dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', padding: '2rem' }}>
      <div className="glass-card animate-fade-in" style={{ maxWidth: '450px', width: '100%', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Log in to access your dashboard.</p>
        </div>

        <div style={{ display: 'flex', background: 'var(--input-bg)', borderRadius: '8px', padding: '0.25rem', marginBottom: '2rem', border: '1px solid var(--input-border)' }}>
          <button 
            style={{ flex: 1, padding: '0.5rem', background: role === 'patient' ? 'var(--primary-blue)' : 'transparent', color: role === 'patient' ? 'white' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => setRole('patient')}
          ><User size={16}/> Patient</button>
          <button 
            style={{ flex: 1, padding: '0.5rem', background: role === 'doctor' ? 'var(--primary-blue)' : 'transparent', color: role === 'doctor' ? 'white' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => setRole('doctor')}
          ><Activity size={16}/> Doctor</button>
          <button 
            style={{ flex: 1, padding: '0.5rem', background: role === 'admin' ? 'var(--primary-blue)' : 'transparent', color: role === 'admin' ? 'white' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => setRole('admin')}
          ><Shield size={16}/> Admin</button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Username / Email</label>
            <input type="text" className="form-control" placeholder="Enter your username" required />
          </div>
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: '1.1rem', padding: '0.85rem' }}>
            Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}
