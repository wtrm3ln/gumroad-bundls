'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Insert your SVG path data here */}
          <svg height="24" viewBox="0 0 228 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M135.507 0.959511C130.797 0.959511 126.193 5.22467 125.664 11.3874V1.46756H118.899V31.3785H125.746V16.9004C125.746 12.8448 128.621 7.12377 135.507 7.12377V0.959511Z" fill="black"/>
            <path d="M207.326 26.5887V6.09617H211.292C216.581 6.09617 220.878 9.40142 220.878 16.1772C220.878 22.9529 216.581 26.5887 211.292 26.5887H207.326ZM200.55 31.3813H212.119C219.225 31.3813 227.984 26.754 227.984 16.1772C227.984 5.76564 219.225 1.46882 212.119 1.46882H200.55V31.3813Z" fill="black"/>
            <path d="M174.624 16.5029C174.624 11.0493 177.433 6.58717 182.061 6.58717C186.523 6.58717 189.002 11.0493 189.002 16.5029C189.002 21.9566 186.523 26.4187 182.061 26.4187C177.433 26.4187 174.624 21.9566 174.624 16.5029ZM167.683 16.8334C167.683 25.7576 172.31 32.0376 179.582 32.0376C184.87 32.0376 188.01 28.5671 189.663 22.9481V31.3765H196.437V1.46403H189.663V9.39663C188.175 4.10823 185.035 0.968246 180.078 0.968246C172.641 0.968246 167.683 7.744 167.683 16.8334Z" fill="black"/>
            <path d="M13.3863 32.0434C4.95787 32.0434 0 25.2676 0 16.8393C0 8.08035 5.45366 0.974068 15.8652 0.974068C26.6072 0.974068 30.243 8.24561 30.4083 12.3772H22.641C22.4757 10.0635 20.4925 6.59299 15.6999 6.59299C10.5768 6.59299 7.27155 11.0551 7.27155 16.5087C7.27155 21.9624 10.5768 26.4245 15.6999 26.4245C20.3273 26.4245 22.3104 22.7887 23.1367 19.1529H15.6999V16.1782H31.3049V31.3823H24.4588V21.7971C23.9631 25.2676 21.8146 32.0434 13.3863 32.0434Z" fill="black"/>
            <path d="M45.1848 32.0424C38.7396 32.0424 34.7733 27.7455 34.7733 19.1519V1.46882H41.7143V19.1519C41.7143 23.614 43.8627 25.7624 47.4985 25.7624C54.6048 25.7624 57.249 17.0035 57.249 10.8888V1.46882H64.19V31.3813H57.4143V20.3087C56.0922 26.4234 52.4564 32.0424 45.1848 32.0424Z" fill="black"/>
            <path d="M105.668 0.956604C99.7462 0.956604 96.0104 6.67714 94.791 11.9665C94.5825 4.87812 91.0967 0.956604 85.5193 0.956604C80.7007 0.956604 76.2301 5.25383 75.069 12.052V1.46545H68.3027V31.3787H75.1558V20.6549C75.1558 17.9964 76.2641 7.08621 83.1629 7.08621C87.6319 7.08621 88.0978 11.1174 88.0978 16.6277V31.3787H94.9476V20.6549C94.9476 17.9964 96.1019 7.08621 103.001 7.08621C107.466 7.08621 107.927 11.1174 107.927 16.6277V31.3787H114.786V13.6852C114.818 5.19683 111.821 0.956604 105.668 0.956604Z" fill="black"/>
            <path d="M150.21 0.956604C141.338 0.956604 135.327 7.91299 135.327 16.4991C135.327 25.9597 141.044 32.0414 150.21 32.0414C159.082 32.0414 165.2 25.0852 165.2 16.4991C165.2 7.03848 159.372 0.956604 150.21 0.956604ZM150.21 26.7467C145.045 26.7467 141.699 22.3742 141.699 16.4991C141.699 10.624 145.057 6.25131 150.21 6.25131C155.363 6.25131 158.585 10.624 158.585 16.4991C158.585 22.3742 155.359 26.7467 150.21 26.7467Z" fill="black"/>
          </svg>
          {/* This is a placeholder rectangle. Replace it with your actual SVG content */}
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search Bundls"
            className="bg-black border border-gray-500 text-white px-4 h-[48px] rounded-md w-full"
          />
          <button className="border border-gray-700 h-[48px] text-black px-4 py-2 rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <p>Login</p>
          </button>
          <button className="bg-black h-[48px] text-white px-4 py-2 rounded-md whitespace-nowrap hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <p>Start Selling</p>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <input
            type="text"
            placeholder="Search Bundls"
            className="bg-black border border-gray-500 text-white px-4 h-[48px] rounded-md w-full"
          />
          <button className="border border-gray-700 h-[48px] text-black px-4 py-2 rounded-md w-full">
            <p>Login</p>
          </button>
          <button className="bg-black h-[48px] text-white px-4 py-2 rounded-md w-full">
            <p>Start Selling</p>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;