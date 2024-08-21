import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import BundlsCard from './components/bundlsCard';

export default function Bundls() {
  const bundleData = [
    {
      title: '102 Creators Who\'ve Each Earned Over $100,000 Share Tips',
      description:
        'We asked 102 creators who\'ve earned over $100,000 each from selling digital products what their best tip was for aspiring creators. Read them all in this article.',
    },
    {
      title: 'Five Ways Digital Artists Make Money Online',
      description:
        'Making money as a Digital Artist is a dream for many artists. Read this article to learn the 5 actionable ways digital artists can make money online.',
    },
  ];

  return (
    <div>
      <div className="bg-primary py-10 px-14 space-y-7">
      <Header />
      <Navigation />
      <h1 className="text-black text-3xl">Bundls</h1>
      </div>
      <div className="py-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {bundleData.map((bundle, index) => (
          <BundlsCard
            key={index}
            title={bundle.title}
            description={bundle.description}
          />
        ))}
      </div>
    </div>
  );
};