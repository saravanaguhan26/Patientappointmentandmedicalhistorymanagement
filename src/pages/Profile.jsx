import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Profile() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>My Profile</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Update your personal details.</p>
      </div>

      {success && (
        <div style={{ padding: '1rem', background: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-approved" style={{ margin: 0 }}>Success</span> Profile updated successfully.
        </div>
      )}

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--input-bg)', border: '2px dashed var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ textAlign: 'center' }}>
                <Camera size={32} style={{ margin: '0 auto', opacity: 0.5 }} />
                <span style={{ fontSize: '0.75rem', marginTop: '0.5rem', display: 'block' }}>Upload</span>
              </div>
            </div>
            <button className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>Change Picture</button>
          </div>

          <form onSubmit={handleSubmit} style={{ flex: 1 }}>
            <div className="grid grid-cols-2">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" defaultValue="John" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" defaultValue="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" defaultValue="+1 234 567 890" />
            </div>

            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" defaultValue="123 Health Ave, Medical District, NY 10001"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
