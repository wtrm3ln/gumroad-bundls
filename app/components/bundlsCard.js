'use client'
import React, { useState } from 'react';
import BundlModal from './bundlModal';

const BundlsCard = ({ 
  title, 
  description, 
  username, 
  productCount, 
  price, 
  category, 
  products,
  mainColor = 'bg-custom-gold', // Default main color
  accentColor = 'bg-custom-green' // Default accent color
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative group w-full cursor-pointer">
        <div onClick={handleCardClick} className="relative flex flex-col sm:flex-row z-30 block bg-white border border-black h-auto sm:h-[300px] rounded-sm shadow-md transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 sm:group-hover:-translate-x-4 sm:group-hover:-translate-y-4">
            
            <div className={`w-full sm:w-1/3 h-32 sm:h-auto ${mainColor} border-b sm:border-b-0 sm:border-r border-black`}></div>

            <div className="w-full sm:w-2/3 p-4">
            <div className="flex items-center mb-2">
              <div className="bg-gray-200 rounded-full p-1 mr-2">
                <svg className="w-4 h-4 text-black fill-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <span className="text-gray-700 underline text-sm">{username}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <p className="mb-4 font-normal text-gray-700">{description}</p>

            <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 mb-4">
            <p className="mb-4 text-md text-black">{category}</p>
              <span className="text-md text-black">{productCount} products</span>
            </div>

            <div className={`bg-primary px-3 py-2 inline-block sm:absolute sm:bottom-10 sm:right-10`}>
                <span className="text-md text-black">${price}</span>
                <div className={`hidden sm:block absolute top-0 right-0 bg-primary z-100 w-3 h-full transform translate-x-full`}
                     style={{clipPath: 'polygon(0 0, 0% 100%, 100% 50%)'}}></div>
              </div>

            </div>

          </div>
        
        {/* Middle card (first underlying div) */}
        <div className={`border border-black absolute inset-0 z-20 ${mainColor} rounded-sm shadow-md transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2`}>
        </div>

        {/* Bottom card (second underlying div) */}
        <div className={`border border-black absolute inset-0 z-10 ${accentColor} rounded-sm shadow-md`}>
        </div>
      </div>
      
      {isModalOpen && (
        <BundlModal
          title={title}
          description={description}
          username={username}
          productCount={productCount}
          price={price}
          category={category}
          products={products}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BundlsCard;