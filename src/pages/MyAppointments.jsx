import { Search, Filter } from 'lucide-react';

export default function MyAppointments() {
  const appointments = [
    { id: 1, doctor: 'Dr. Sarah Smith', specialization: 'Cardiology', date: '2026-04-12', time: '10:00 AM', status: 'Approved' },
    { id: 2, doctor: 'Dr. Mark Johnson', specialization: 'Dentistry', date: '2026-05-05', time: '02:30 PM', status: 'Pending' },
    { id: 3, doctor: 'Dr. Emily Davis', specialization: 'General', date: '2026-03-20', time: '11:15 AM', status: 'Approved' },
    { id: 4, doctor: 'Dr. John Miller', specialization: 'Neurology', date: '2026-03-10', time: '09:00 AM', status: 'Rejected' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>My Appointments</h1>
          <p style={{ color: 'var(--text-secondary)' }}>View and manage your appointments.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, position: 'relative', minWidth: '200px' }}>
          <Search size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input type="text" className="form-control" placeholder="Search by doctor or specialization..." style={{ paddingLeft: '2.5rem' }} />
        </div>
        <button className="btn btn-outline" style={{ background: 'var(--input-bg)' }}>
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="glass-panel" style={{ overflow: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialization</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(app => (
              <tr key={app.id}>
                <td style={{ fontWeight: 500 }}>{app.doctor}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{app.specialization}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>
                  <span className={`badge badge-${app.status.toLowerCase()}`}>{app.status}</span>
                </td>
                <td>
                  {app.status !== 'Rejected' && (
                    <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem' }}>
                      Reschedule
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
