'use client';
// This performs a page transition to the new URL. Temporarty due to next js app folder issue https://github.com/framer/motion/issues/1850

import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
    return () => {
      setFade(false);
    };
  }, []);
  return (
    <div
       className={`
        ${fade ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'} 
        'transition duration-500 ease-out flex flex-col items-center justify-center min-h-screen w-full '
       `} 
    >
      {children}
    </div>
  );
}