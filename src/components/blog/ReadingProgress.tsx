
import React from 'react';

interface ReadingProgressProps {
  progress: number;
}

export const ReadingProgress = ({ progress }: ReadingProgressProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
