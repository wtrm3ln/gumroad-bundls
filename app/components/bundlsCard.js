import React from 'react';
import Link from 'next/link';

const BundlsCard = ({ title, description }) => {
  return (
    <Link href="/" className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <p className="font-normal text-gray-700">{description}</p>
    </Link>
  );
};

export default BundlsCard;