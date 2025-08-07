import React from 'react';

const Navbar = ({ currentPage, isCollapsed, onPageChange, onMenuToggle }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'form', label: 'Forms', icon: 'fas fa-file-alt' },
    { id: 'overview', label: 'Overview', icon: 'fas fa-chart-bar' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
  ];

  const logoSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzFmNGUzYSIvPgo8cGF0aCBkPSJNMTIgMjBMMTggMjZMMjggMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-header">
        <div className="logo">
          <img src={logoSvg} alt="Logo" />
          <span className="logo-text">Dashboard</span>
        </div>
        <button 
          className="menu-toggle" 
          onClick={onMenuToggle}
          style={{ display: isCollapsed ? 'block' : 'none' }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href="#"
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(item.id);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;