import React from "react";

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}
