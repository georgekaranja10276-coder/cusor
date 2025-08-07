import React, { useState, useEffect } from 'react';

const FormPage = ({ selectedSystem, onFormSubmit }) => {
  const [systemSelect, setSystemSelect] = useState(selectedSystem || '');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    systemName: '',
    description: '',
    priority: 'medium',
    deadline: ''
  });

  const systemOptions = [
    { value: 'system1', label: 'System Management' },
    { value: 'system2', label: 'Security Center' },
    { value: 'system3', label: 'Data Analytics' }
  ];

  useEffect(() => {
    if (selectedSystem) {
      setSystemSelect(selectedSystem);
      setShowForm(true);
    }
  }, [selectedSystem]);

  useEffect(() => {
    if (systemSelect && !showForm) {
      setShowForm(true);
    } else if (!systemSelect) {
      setShowForm(false);
    }
  }, [systemSelect, showForm]);

  const handleSystemChange = (e) => {
    setSystemSelect(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      system: systemSelect,
      ...formData
    };
    onFormSubmit(submitData);
    
    // Reset form
    setFormData({
      systemName: '',
      description: '',
      priority: 'medium',
      deadline: ''
    });
    setSystemSelect('');
    setShowForm(false);
  };

  return (
    <div className="page active">
      <h1>System Configuration</h1>
      
      <div className="search-container">
        <select
          className="system-select"
          value={systemSelect}
          onChange={handleSystemChange}
        >
          <option value="">Select a system...</option>
          {systemOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {showForm && (
        <div 
          className="form-container"
          style={{
            opacity: showForm ? 1 : 0,
            transform: showForm ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="systemName">System Name</label>
              <input
                type="text"
                id="systemName"
                name="systemName"
                value={formData.systemName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority Level</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormPage;