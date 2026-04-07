import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ toggleSidebar }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar glass-panel" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn btn-outline" style={{ padding: '0.5rem', border: 'none' }} onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>Dashboard</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <button className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', position: 'relative' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', top: 0, right: 0, background: 'var(--danger-red)', 
            width: '10px', height: '10px', borderRadius: '50%'
          }}></span>
        </button>

        <button className="btn btn-primary" style={{ padding: '0.5rem', borderRadius: '50%' }} onClick={() => navigate('/profile')}>
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}
