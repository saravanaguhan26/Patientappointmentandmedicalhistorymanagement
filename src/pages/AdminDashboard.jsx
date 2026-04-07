import { Shield, Users, Calendar, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const users = [
    { id: 1, name: 'John Doe', role: 'Patient', status: 'Active' },
    { id: 2, name: 'Dr. Sarah Smith', role: 'Doctor', status: 'Active' },
    { id: 3, name: 'Alice Johnson', role: 'Patient', status: 'Inactive' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Admin Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)' }}>System overview and management.</p>
      </div>

      <div className="grid grid-cols-4" style={{ marginBottom: '2rem' }}>
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37,99,235,0.1)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <Users size={20} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>4,289</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Total Patients</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', color: 'var(--soft-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <Activity size={20} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>156</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Total Doctors</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', color: 'var(--warning-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <Calendar size={20} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>892</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Appointments</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', color: 'var(--danger-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <Shield size={20} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>System Status</p>
        </div>
      </div>

      <div className="glass-panel" style={{ overflow: 'auto' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent Users</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={{ color: 'var(--text-secondary)' }}>#{user.id}</td>
                <td style={{ fontWeight: 500 }}>{user.name}</td>
                <td><span className="badge" style={{ background: 'var(--input-bg)', border: '1px solid var(--glass-border)' }}>{user.role}</span></td>
                <td>
                  <span className={`badge ${user.status === 'Active' ? 'badge-approved' : 'badge-rejected'}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem' }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
