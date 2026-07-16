import { useState, useEffect } from 'react';
import './style/cinematic-fade.css';

export default function CinematicFade() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fade-overlay ${isLoaded ? 'hidden-overlay' : ''}`}></div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      </div>
    </>
  );
}