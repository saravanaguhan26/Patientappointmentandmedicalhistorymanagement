import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Clock, FileText, Users, Activity, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Let's create a combined sidebar for demo purposes that shows all links. 
  // In a real app, this would be filtered by role.
  const menuItems = [
    { name: 'Patient Dashboard', path: '/patient-dashboard', icon: Home },
    { name: 'Book Appointment', path: '/book-appointment', icon: Calendar },
    { name: 'My Appointments', path: '/my-appointments', icon: Clock },
    { name: 'Medical History', path: '/medical-history', icon: FileText },
    { name: 'Doctor Dashboard', path: '/doctor-dashboard', icon: Activity },
    { name: 'Admin Dashboard', path: '/admin-dashboard', icon: Users },
    { name: 'Profile', path: '/profile', icon: Settings },
  ];

  return (
    <aside 
      className={`glass-panel ${isOpen ? 'open' : ''}`}
      style={{
        width: '260px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        marginRight: isOpen ? '0' : '-260px',
        zIndex: 50
      }}
    >
      <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <Activity size={20} />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-blue)', margin: 0 }}>SmartCare</h2>
      </div>

      <div style={{ padding: '1.5rem 1rem', flex: 1, overflowY: 'auto' }}>
        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem', paddingLeft: '0.5rem' }}>Menu</p>
        
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  color: currentPath === item.path ? 'var(--primary-blue)' : 'var(--text-primary)',
                  backgroundColor: currentPath === item.path ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                  fontWeight: currentPath === item.path ? 600 : 500,
                  transition: 'all 0.2s ease'
                }}
                onClick={() => { if (window.innerWidth <= 768) setIsOpen(false); }}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
        <Link to="/login" style={{
            display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--danger-red)', padding: '0.75rem 1rem', borderRadius: '8px', fontWeight: 500
          }}>
          <LogOut size={20} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
