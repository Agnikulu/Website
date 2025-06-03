import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PublicationsSection from './components/PublicationsSection';
import Cursor from './components/Cursor';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-background">
        <div className="text-neon-cyan font-mono text-xl animate-pulse">
          Initializing<span className="animate-pulse">.</span>
          <span className="animate-pulse delay-100">.</span>
          <span className="animate-pulse delay-200">.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      <Cursor />
      <Navbar />

      <main>
        <HeroSection />
        <PublicationsSection />
      </main>
    </div>
  );
};

export default App;
