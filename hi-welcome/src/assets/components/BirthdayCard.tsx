import React, { useEffect, useState } from 'react';
import './BirthdayCard.css';

const BirthdayCard: React.FC = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const colors = ['#ff9a9e', '#fad0c4', '#ffecd2', '#fcb69f', '#a18cd1', '#fbc2eb', '#84fab0', '#8fd3f4'];
    const newConfetti = [];
    for (let i = 0; i < 70; i++) {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        top: `-20px`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
      };
      newConfetti.push(<div key={i} className="confetti" style={style} />);
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="birthday-card">
      {confetti}
      <h1 className="birthday-header">Happy Birthday!</h1>
      <div className="cake-icon" title="Make a wish!">🎂</div>
      <div className="birthday-message">
        <p>Wishing you a fantastic day filled with joy, laughter, and everything you love!</p>
        <p>May this year bring you new opportunities, great success, and endless happiness.</p>
        <p><strong>Keep shining and coding amazing things! ✨</strong></p>
      </div>
    </div>
  );
};

export default BirthdayCard;
