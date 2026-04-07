import { Calendar, Clock, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PatientDashboard() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Patient Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Welcome back, John Doe. Here is your health overview.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3" style={{ marginBottom: '2rem' }}>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={24} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Upcoming Visits</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>2</h3>
          </div>
        </div>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', color: 'var(--soft-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={24} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Medical Reports</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>14</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        {/* Upcoming Appointments Widget */}
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Upcoming Appointments</h3>
            <Link to="/my-appointments" style={{ color: 'var(--primary-blue)', fontSize: '0.875rem', fontWeight: 500 }}>View All</Link>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--input-bg)', padding: '0.5rem', borderRadius: '8px', textAlign: 'center', minWidth: '60px', border: '1px solid var(--glass-border)' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--danger-red)', fontWeight: 700 }}>APR</span>
                  <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700 }}>12</span>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Dr. Sarah Smith</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>General Checkup &bull; 10:00 AM</p>
                </div>
              </div>
              <ChevronRight size={20} color="var(--text-secondary)" />
            </div>

            <div style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--input-bg)', padding: '0.5rem', borderRadius: '8px', textAlign: 'center', minWidth: '60px', border: '1px solid var(--glass-border)' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary-blue)', fontWeight: 700 }}>MAY</span>
                  <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700 }}>05</span>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Dr. Mark Johnson</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Dental Cleaning &bull; 02:30 PM</p>
                </div>
              </div>
              <ChevronRight size={20} color="var(--text-secondary)" />
            </div>
          </div>
          
          <Link to="/book-appointment" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
            Book New Appointment
          </Link>
        </div>

        {/* Quick Actions / Recent History Widget */}
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent History</h3>
            <Link to="/medical-history" style={{ color: 'var(--primary-blue)', fontSize: '0.875rem', fontWeight: 500 }}>View All</Link>
          </div>
          
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.1)', color: 'var(--soft-green)', borderRadius: '50%' }}>
                <FileText size={16} />
              </div>
              <div>
                <h4 style={{ fontWeight: 500, fontSize: '0.95rem' }}>Blood Test Results</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Uploaded by Dr. Smith on Mar 15, 2026</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)', borderRadius: '50%' }}>
                <Clock size={16} />
              </div>
              <div>
                <h4 style={{ fontWeight: 500, fontSize: '0.95rem' }}>Prescription Refill</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Approved on Feb 28, 2026</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
