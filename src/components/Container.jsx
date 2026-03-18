import React from 'react';

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-2 ${className}`}>
      {children}
    </div>
  );
}