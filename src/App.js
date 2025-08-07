import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import OverviewPage from './pages/OverviewPage';
import UserAvatar from './components/UserAvatar';
import Notification from './components/Notification';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const [notification, setNotification] = useState(null);
  const [selectedSystem, setSelectedSystem] = useState('');

  // Update navbar state based on current page
  useEffect(() => {
    if (currentPage === 'home') {
      setIsNavbarCollapsed(false);
    } else {
      setTimeout(() => {
        setIsNavbarCollapsed(true);
      }, 100);
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (system) => {
    setSelectedSystem(system);
    setCurrentPage('form');
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleFormSubmit = (formData) => {
    showNotification('Form submitted successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('overview');
    }, 1000);
  };

  const handleMenuToggle = () => {
    if (isNavbarCollapsed) {
      setIsNavbarCollapsed(false);
      // Auto-collapse after 3 seconds if not on home page
      if (currentPage !== 'home') {
        setTimeout(() => {
          setIsNavbarCollapsed(true);
        }, 3000);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // ESC key to collapse navbar if not on home page
      if (e.key === 'Escape' && currentPage !== 'home') {
        setIsNavbarCollapsed(true);
      }
      
      // Alt + H for home, Alt + F for form, Alt + O for overview
      if (e.altKey) {
        switch(e.key.toLowerCase()) {
          case 'h':
            setCurrentPage('home');
            break;
          case 'f':
            setCurrentPage('form');
            break;
          case 'o':
            setCurrentPage('overview');
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onCardClick={handleCardClick} />;
      case 'form':
        return (
          <FormPage
            selectedSystem={selectedSystem}
            onFormSubmit={handleFormSubmit}
          />
        );
      case 'overview':
        return <OverviewPage />;
      case 'settings':
        return (
          <div className="page">
            <h1>Settings</h1>
            <p>Settings page coming soon!</p>
          </div>
        );
      default:
        return <HomePage onCardClick={handleCardClick} />;
    }
  };

  return (
    <div className="App">
      <Navbar
        currentPage={currentPage}
        isCollapsed={isNavbarCollapsed}
        onPageChange={handlePageChange}
        onMenuToggle={handleMenuToggle}
      />
      
      <main className={`main-content ${isNavbarCollapsed ? 'expanded' : ''}`}>
        <UserAvatar 
          initials="JD" 
          onClick={() => showNotification('User profile functionality coming soon!', 'info')} 
        />
        {renderCurrentPage()}
      </main>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;