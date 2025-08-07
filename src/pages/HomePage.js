import React, { useEffect, useRef, useState } from 'react';

const HomePage = ({ onCardClick }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  const cards = [
    {
      id: 'system1',
      title: 'System Management',
      description: 'Manage and configure your systems',
      icon: 'fas fa-server',
      theme: 'dark-green'
    },
    {
      id: 'system2',
      title: 'Security Center',
      description: 'Monitor and enhance security protocols',
      icon: 'fas fa-shield-alt',
      theme: 'red'
    },
    {
      id: 'system3',
      title: 'Data Analytics',
      description: 'Analyze and visualize your data',
      icon: 'fas fa-database',
      theme: 'dark-green'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (cardId) => {
    // Add click animation
    const cardElement = cardsRef.current.find(card => 
      card && card.dataset.system === cardId
    );
    if (cardElement) {
      cardElement.style.transform = 'scale(0.98)';
      setTimeout(() => {
        cardElement.style.transform = '';
      }, 150);
    }
    
    onCardClick(cardId);
  };

  return (
    <div className="page active">
      <h1>Welcome to Dashboard</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            data-system={card.id}
            className={`card ${card.theme} ${visibleCards.includes(index) ? 'visible' : ''}`}
            onClick={() => handleCardClick(card.id)}
            style={{
              opacity: visibleCards.includes(index) ? 1 : 0,
              transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease-in-out ${index * 0.1}s`
            }}
          >
            <div className="card-icon">
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="card-btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;