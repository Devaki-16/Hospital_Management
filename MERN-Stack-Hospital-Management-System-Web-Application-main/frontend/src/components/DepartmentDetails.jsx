import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DepartmentDetails = () => {
  const navigate = useNavigate();
  const { departmentName } = useParams();

  // Data for all departments
  const doctorsData = {
    pediatrics: [
      { name: 'Dr. Smith', specialization: 'Child Specialist', experience: '10 years' },
      { name: 'Dr. Johnson', specialization: 'Infant Care', experience: '8 years' },
    ],
    orthopedics: [
      { name: 'Dr. Lee', specialization: 'Bone & Joint Specialist', experience: '12 years' },
      { name: 'Dr. Kim', specialization: 'Sports Injuries', experience: '9 years' },
    ],
    cardiology: [
      { name: 'Dr. Patel', specialization: 'Heart Specialist', experience: '15 years' },
      { name: 'Dr. Lopez', specialization: 'Cardiac Surgeon', experience: '14 years' },
    ],
    neurology: [
      { name: 'Dr. Adams', specialization: 'Neurosurgeon', experience: '13 years' },
      { name: 'Dr. Clark', specialization: 'Stroke Specialist', experience: '10 years' },
    ],
    oncology: [
      { name: 'Dr. D’Souza', specialization: 'Cancer Specialist', experience: '11 years' },
      { name: 'Dr. Wang', specialization: 'Radiation Oncology', experience: '9 years' },
    ],
    radiology: [
      { name: 'Dr. Watson', specialization: 'Radiologist', experience: '8 years' },
      { name: 'Dr. Gomez', specialization: 'Interventional Radiology', experience: '10 years' },
    ],
    'physical therapy': [
      { name: 'Dr. Miller', specialization: 'Physiotherapist', experience: '7 years' },
      { name: 'Dr. Wilson', specialization: 'Rehab Specialist', experience: '9 years' },
    ],
    dermatology: [
      { name: 'Dr. Taylor', specialization: 'Skin Specialist', experience: '12 years' },
      { name: 'Dr. Johnson', specialization: 'Cosmetic Dermatologist', experience: '8 years' },
    ],
    ent: [
      { name: 'Dr. Martinez', specialization: 'ENT Specialist', experience: '10 years' },
      { name: 'Dr. Lee', specialization: 'Audiologist', experience: '9 years' },
    ],
  };

  const deptKey = departmentName.toLowerCase();
  const currentDoctors = doctorsData[deptKey];

  return (
    <div
      style={{
        padding: '50px 20px',
        margin: '0 auto',
        maxWidth: '1000px',
        boxSizing: 'border-box',
      }}
    >
      {/* Department Title */}
      <h2
        style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '28px',
          textTransform: 'capitalize',
        }}
      >
        Department: {departmentName}
      </h2>

      {/* Doctors List */}
      {currentDoctors ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            padding: '0 10px',
          }}
        >
          {currentDoctors.map((doc, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f0f0f0',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3 style={{ margin: '0 0 10px' }}>{doc.name}</h3>
              <p style={{ margin: '4px 0' }}><strong>Specialization:</strong> {doc.specialization}</p>
              <p style={{ margin: '4px 0' }}><strong>Experience:</strong> {doc.experience}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>No doctors available for this department yet.</p>
      )}

      {/* Book Appointment Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          style={{
            padding: '14px 28px',
            backgroundColor: '#9083d5',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#7a6ed1')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#9083d5')}
          onClick={() => navigate('/login')}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetails;