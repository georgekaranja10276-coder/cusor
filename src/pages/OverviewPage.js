import React from 'react';

const OverviewPage = () => {
  const overviewData = [
    {
      id: 'current',
      title: 'Current Systems',
      number: 24,
      description: 'Active systems running smoothly',
      icon: 'fas fa-check-circle',
      type: 'current'
    },
    {
      id: 'pending',
      title: 'Pending/Denied',
      number: 8,
      description: 'Systems awaiting approval',
      icon: 'fas fa-clock',
      type: 'pending'
    }
  ];

  return (
    <div className="page active">
      <h1>System Overview</h1>
      <div className="overview-cards">
        {overviewData.map((item) => (
          <div key={item.id} className={`overview-card ${item.type}`}>
            <div className="card-header">
              <h3>{item.title}</h3>
              <i className={item.icon}></i>
            </div>
            <div className="card-content">
              <div className="number">{item.number}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewPage;