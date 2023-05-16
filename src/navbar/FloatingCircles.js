import React, { useEffect } from 'react';
import './floatingcircles.scss';

const FloatingCircles = () => {
  useEffect(() => {
    // Tutaj możesz dodać kod inicjalizujący fullPage.js lub inny odpowiedni kod zależny od biblioteki, który integruje animacje z sekcjami Twojej strony.
    // Przykładowo, możesz użyć fullPage.js API, aby zawrzeć animację w odpowiedniej sekcji.

    return () => {
      // Tutaj możesz dodać kod do czyszczenia zasobów lub odłączenia animacji, gdy komponent jest odmontowywany.
    };
  }, []);

  const renderCircles = () => {
    const circles = [];
    const numCircles = 50; // liczba kółek/kropek

    for (let i = 0; i < numCircles; i++) {
      circles.push(<div key={i} className="circle"></div>);
    }

    return circles;
  };

  return <div className="floating-circles">{renderCircles()}</div>;
};

export default FloatingCircles;