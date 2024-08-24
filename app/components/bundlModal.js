import React from 'react';

const BundlModal = ({ title, description, username, productCount, price, category, products, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-20 py-4 bg-opacity-90 text-black">
      <div className="relative bg-white w-full h-full overflow-y-auto p-8">
        <button onClick={onClose} className="absolute right-4 top-4 z-55 text-black text-6xl">&times;</button>
        
        {/* Bundl card details */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-2">{description}</p>

          <div className="flex items-center mb-2">
              <div className="bg-gray-200 rounded-full p-1 mr-2">
                <svg className="w-4 h-4 text-black fill-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <span className="text-gray-700 underline text-sm">{username}</span>
            </div>

          <p className="mb-2">Category: {category}</p>
          <p className="mb-2">Products: {productCount}</p>
          <p className="text-2xl font-bold text-green-600">${price}</p>
        </div>
        
        {/* Grid of product cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="relative bg-black rounded-sm overflow-hidden shadow-lg text-white">
              
              <div className="h-48 bg-bggray border-b border-bggray"></div>
              
              <div className="p-4 h-48">
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{product.description}</p>

                <div className="absolute bottom-0 right-0 left-0 flex border border-bggray divide-x divide-bggray justify-between items-center">
                  <span className="text-sm ml-4 text-gray-400">{product.author}</span>

                    <div className="p-4">
                    <div className="bg-pink-400 text-white px-2 py-1 text-sm font-bold">
                      ${product.price}
                    </div>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BundlModal;