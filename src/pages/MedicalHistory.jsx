import { FileText, Download } from 'lucide-react';

export default function MedicalHistory() {
  const history = [
    { id: 1, date: 'March 20, 2026', title: 'Annual Checkup', doctor: 'Dr. Emily Davis', desc: 'Patient is healthy. Recommended regular exercise and balanced diet.', type: 'General' },
    { id: 2, date: 'January 15, 2026', title: 'Blood Test Results', doctor: 'Lab Corp', desc: 'All vitals normal. Cholesterol slightly elevated.', type: 'Lab Report' },
    { id: 3, date: 'November 10, 2025', title: 'Dental Filling', doctor: 'Dr. Mark Johnson', desc: 'Filled cavity on lower right molar.', type: 'Procedure' },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Medical History</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Your complete medical records and history.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>

        {history.map((record) => (
          <div key={record.id} style={{ display: 'flex', gap: '1.5rem', zIndex: 1 }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--card-bg)', border: '2px solid var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', flexShrink: 0, boxShadow: '0 0 0 4px var(--bg-color)' }}>
              <FileText size={20} />
            </div>
            
            <div className="glass-card" style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>{record.date}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{record.title}</h3>
                </div>
                <span className="badge" style={{ background: 'var(--input-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>{record.type}</span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Physician:</strong> {record.doctor}</p>
              
              <div style={{ padding: '1rem', background: 'var(--input-bg)', borderRadius: '8px', border: '1px solid var(--glass-border)', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.95rem' }}>{record.desc}</p>
              </div>

              <button className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                <Download size={14} style={{ marginRight: '0.5rem' }}/> Download Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
