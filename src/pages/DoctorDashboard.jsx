import { Check, X, Users, Activity } from 'lucide-react';
import { useState } from 'react';

export default function DoctorDashboard() {
  const [requests, setRequests] = useState([
    { id: 1, patient: 'John Doe', reason: 'General checkup', date: '2026-04-12', time: '10:00 AM' },
    { id: 2, patient: 'Alice Smith', reason: 'Fever and cough', date: '2026-04-12', time: '11:30 AM' },
    { id: 3, patient: 'Michael Brown', reason: 'Follow-up for blood pressure', date: '2026-04-13', time: '09:00 AM' },
  ]);

  const handleAction = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Doctor Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your daily appointments and patient requests.</p>
      </div>

      <div className="grid grid-cols-3" style={{ marginBottom: '2rem' }}>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={24} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Total Patients</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>1,248</h3>
          </div>
        </div>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', color: 'var(--soft-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={24} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Appointments Today</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>8</h3>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Appointment Requests</h3>
        
        {requests.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>No pending requests.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {requests.map(req => (
              <div key={req.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--input-bg)' }}>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{req.patient}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{req.reason}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <span className="badge" style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--primary-blue)' }}>{req.date}</span>
                    <span className="badge" style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--soft-green)' }}>{req.time}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleAction(req.id)} className="btn btn-outline" style={{ padding: '0.5rem', color: 'var(--danger-red)', borderColor: 'var(--danger-red)' }} title="Reject">
                    <X size={20} />
                  </button>
                  <button onClick={() => handleAction(req.id)} className="btn btn-primary" style={{ padding: '0.5rem' }} title="Approve">
                    <Check size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
