import { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export default function BookAppointment() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Book Appointment</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Schedule a visit with your preferred doctor.</p>
      </div>

      {success && (
        <div style={{ padding: '1rem', background: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-approved" style={{ margin: 0 }}>Success</span> Appointment request sent successfully!
        </div>
      )}

      <div className="glass-card">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2" style={{ marginBottom: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label"><User size={14} style={{ display: 'inline', marginRight: '4px' }}/> Select Doctor</label>
              <select className="form-control" required defaultValue="">
                <option value="" disabled>Choose a specialist...</option>
                <option value="1">Dr. Sarah Smith (Cardiology)</option>
                <option value="2">Dr. Mark Johnson (Dentistry)</option>
                <option value="3">Dr. Emily Davis (General)</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Consultation Type</label>
              <select className="form-control" required defaultValue="in-person">
                <option value="in-person">In-Person Visit</option>
                <option value="video">Video Consultation</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2" style={{ marginBottom: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label"><Calendar size={14} style={{ display: 'inline', marginRight: '4px' }}/> Preferred Date</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label"><Clock size={14} style={{ display: 'inline', marginRight: '4px' }}/> Preferred Time</label>
              <input type="time" className="form-control" required />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Reason for Visit</label>
            <textarea className="form-control" rows="4" placeholder="Briefly describe your symptoms or reason for consulting..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
}
