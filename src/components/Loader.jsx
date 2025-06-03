import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-primary rounded-full animate-smoothBounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-primary rounded-full animate-smoothBounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-primary rounded-full animate-smoothBounce"></div>
    </div>
  </div>
);

export default Loader;
