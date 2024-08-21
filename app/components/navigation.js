'use client'
import React, { useState } from 'react';

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState('All');
  const navItems = [
    'All',
    'Design',
    'Drawing & Painting',
    '3D',
    'Self Improvement',
    'Music & Sound Design',
    'Films',
    'Software Development',
    'More',
  ];

  return (
    <nav className="text-white text-sm flex justify-start space-x-2">
      {navItems.map((item, index) => (
        <button
          className={`px-4 py-2 rounded-full ${selectedItem === item ? 'bg-black' : ''}`}
          key={index}
          onClick={() => setSelectedItem(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;