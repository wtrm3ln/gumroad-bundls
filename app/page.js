import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import BundlsCard from './components/bundlsCard';

export default function Bundls() {
  const bundleData = [
    {
      username: 'Dr. Emily Chen',
      title: 'Med Student Essentials',
      description: 'A curated collection of digital resources for medical students, including study guides, anatomy flashcards, and clinical case simulations.',
      productCount: 15,
      price: 79.99,
      category: 'Education',
      stackCount: 5,
      mainColor: 'bg-custom-green',
      accentColor: 'bg-custom-yellow',
      products: [
        { name: 'Anatomy Flashcards', description: 'Interactive flashcards for anatomy', price: 19.99, author: 'AnatomyExpert' },
        { name: 'Study Guide', description: 'Comprehensive study guide for medical students', price: 29.99, author: 'StudyMaster' },
        { name: 'Clinical Case Simulations', description: 'Realistic case simulations for clinical practice', price: 39.99, author: 'CaseSimulator' },
        // Add more products as needed
      ]
    },
    {
      username: 'CryptoMaster',
      title: 'Crypto Starter Pack',
      description: 'Everything you need to start your journey in cryptocurrency, including e-books, video courses, and trading strategy guides.',
      productCount: 10,
      price: 49.99,
      category: 'Finance',
      stackCount: 2,
      mainColor: 'bg-custom-gold',
      accentColor: 'bg-custom-purple',
      products: [
        { name: 'Crypto Trading Guide', description: 'Learn to trade cryptocurrencies', price: 24.99, author: 'TradeGuru' },
        { name: 'Blockchain Basics', description: 'Understand the fundamentals of blockchain', price: 19.99, author: 'BlockchainPro' },
        { name: 'Crypto Investing Course', description: 'Learn to invest in cryptocurrencies', price: 34.99, author: 'InvestMaster' },
        // Add more products as needed
      ]
    },
    {
      username: 'SocialButterfly',
      title: 'How to Socialize Like a Pro',
      description: 'Boost your social skills with this bundle of e-books, conversation starters, and confidence-building audio courses.',
      productCount: 8,
      price: 39.99,
      category: 'Personal Development',
      stackCount: 4,
      mainColor: 'bg-custom-orange',
      accentColor: 'bg-custom-brown',
      products: [
        { name: 'Social Skills E-book', description: 'Learn to navigate social situations', price: 14.99, author: 'SocialExpert' },
        { name: 'Conversation Starters', description: 'Break the ice with ease', price: 9.99, author: 'IceBreaker' },
        { name: 'Confidence Audio Course', description: 'Build your confidence', price: 24.99, author: 'ConfidenceCoach' },
        // Add more products as needed
      ]
    },
    {
      username: 'FitnessFanatic',
      title: 'Home Workout Revolution',
      description: 'Transform your body with this comprehensive bundle of home workout videos, nutrition guides, and meal plans.',
      productCount: 20,
      price: 59.99,
      category: 'Health & Fitness',
      stackCount: 3,
      mainColor: 'bg-custom-red',
      accentColor: 'bg-custom-green',
      products: [
        { name: 'Home Workout Videos', description: 'Follow along with expert trainers', price: 29.99, author: 'WorkoutPro' },
        { name: 'Nutrition Guide', description: 'Learn to fuel your body', price: 19.99, author: 'NutritionExpert' },
        { name: 'Meal Plan', description: 'Healthy meal planning made easy', price: 24.99, author: 'MealPlanner' },
        // Add more products as needed
      ]
    },
    {
      username: 'TechGuru',
      title: 'Web Development Mastery',
      description: 'Learn to build modern web applications with this bundle of coding tutorials, project templates, and developer tools.',
      productCount: 25,
      price: 89.99,
      category: 'Technology',
      stackCount: 6,
      mainColor: 'bg-custom-purple',
      accentColor: 'bg-custom-yellow',
      products: [
        { name: 'Coding Tutorials', description: 'Learn to code from scratch', price: 39.99, author: 'CodeMaster' },
        { name: 'Project Templates', description: 'Start building projects immediately', price: 29.99, author: 'TemplateGuru' },
        { name: 'Developer Tools', description: 'Essential tools for web development', price: 49.99, author: 'DevToolsExpert' },
        // Add more products as needed
      ]
    },
    {
      username: 'ArtisticSoul',
      title: 'Digital Art Essentials',
      description: 'Unleash your creativity with this collection of digital brushes, textures, and video tutorials for aspiring digital artists.',
      productCount: 30,
      price: 69.99,
      category: 'Art & Design',
      stackCount: 4,
      mainColor: 'bg-custom-brown',
      accentColor: 'bg-custom-orange',
      products: [
        { name: 'Digital Brushes', description: 'Custom brushes for digital art', price: 19.99, author: 'BrushMaster' },
        { name: 'Textures', description: 'Unique textures for digital art', price: 14.99, author: 'TextureGuru' },
        { name: 'Video Tutorials', description: 'Learn digital art techniques', price: 29.99, author: 'ArtTutor' },
        // Add more products as needed
      ]
    },
    {
      username: 'LanguageLover',
      title: 'Spanish Fluency Fast-Track',
      description: 'Achieve Spanish fluency quickly with this comprehensive bundle of language learning resources, including audio lessons and interactive exercises.',
      productCount: 12,
      price: 54.99,
      category: 'Language Learning',
      stackCount: 3,
      mainColor: 'bg-custom-green',
      accentColor: 'bg-custom-red',
      products: [
        { name: 'Audio Lessons', description: 'Learn Spanish through audio', price: 24.99, author: 'AudioLinguist' },
        { name: 'Interactive Exercises', description: 'Practice your Spanish skills', price: 19.99, author: 'ExerciseExpert' },
        { name: 'Language Guide', description: 'Comprehensive guide to Spanish', price: 29.99, author: 'GuideMaster' },
        // Add more products as needed
      ]
    },
    {
      username: 'BusinessMogul',
      title: 'Startup Success Kit',
      description: 'Launch your startup with confidence using this bundle of business plan templates, financial models, and entrepreneurship courses.',
      productCount: 18,
      price: 99.99,
      category: 'Business',
      stackCount: 5,
      mainColor: 'bg-custom-yellow',
      accentColor: 'bg-custom-purple',
      products: [
        { name: 'Business Plan Templates', description: 'Create a professional business plan', price: 39.99, author: 'PlanPro' },
        { name: 'Financial Models', description: 'Manage your finances with ease', price: 49.99, author: 'FinanceGuru' },
        { name: 'Entrepreneurship Course', description: 'Learn to be a successful entrepreneur', price: 69.99, author: 'EntrepreneurMaster' },
        // Add more products as needed
      ]
    },
    {
      username: 'MindfulnessGuru',
      title: 'Zen Living Essentials',
      description: 'Find inner peace with this collection of meditation guides, mindfulness exercises, and relaxation audio tracks.',
      productCount: 10,
      price: 44.99,
      category: 'Wellness',
      stackCount: 2,
      mainColor: 'bg-custom-red',
      accentColor: 'bg-custom-green',
      products: [
        { name: 'Meditation Guides', description: 'Learn to meditate', price: 19.99, author: 'MeditationExpert' },
        { name: 'Mindfulness Exercises', description: 'Practice mindfulness', price: 14.99, author: 'MindfulnessCoach' },
        { name: 'Relaxation Audio', description: 'Unwind with soothing audio', price: 24.99, author: 'RelaxationGuru' },
        // Add more products as needed
      ]
    },
    {
      username: 'TravelEnthusiast',
      title: 'Global Explorer Pack',
      description: 'Plan your next adventure with this bundle of travel guides, language phrasebooks, and cultural etiquette tips for popular destinations.',
      productCount: 15,
      price: 59.99,
      category: 'Travel',
      stackCount: 4,
      mainColor: 'bg-custom-orange',
      accentColor: 'bg-custom-brown',
      products: [
        { name: 'Travel Guides', description: 'Explore new destinations', price: 29.99, author: 'TravelGuide' },
        { name: 'Language Phrasebooks', description: 'Learn key phrases', price: 19.99, author: 'PhrasebookPro' },
        { name: 'Cultural Etiquette Tips', description: 'Understand local customs', price: 24.99, author: 'EtiquetteExpert' },
        // Add more products as needed
      ]
    },
    {
      username: 'CulinaryWizard',
      title: 'Gourmet Cooking Masterclass',
      description: 'Elevate your cooking skills with this bundle of video recipes, ingredient guides, and professional chef techniques.',
      productCount: 22,
      price: 74.99,
      category: 'Cooking',
      stackCount: 3,
      mainColor: 'bg-custom-brown',
      accentColor: 'bg-custom-orange',
      products: [
        { name: 'Video Recipes', description: 'Learn to cook with video tutorials', price: 39.99, author: 'RecipeMaster' },
        { name: 'Ingredient Guides', description: 'Master ingredient selection', price: 29.99, author: 'IngredientGuru' },
        { name: 'Chef Techniques', description: 'Learn professional cooking techniques', price: 49.99, author: 'ChefPro' },
        // Add more products as needed
      ]
    },
    {
      username: 'GreenThumb',
      title: 'Urban Gardening Essentials',
      description: 'Transform your living space with this collection of indoor gardening guides, plant care tips, and decorative planter designs.',
      productCount: 14,
      price: 49.99,
      category: 'Home & Garden',
      stackCount: 3,
      mainColor: 'bg-custom-green',
      accentColor: 'bg-custom-yellow',
      products: [
        { name: 'Indoor Gardening Guides', description: 'Learn to garden indoors', price: 24.99, author: 'GardenGuru' },
        { name: 'Plant Care Tips', description: 'Keep your plants thriving', price: 19.99, author: 'PlantExpert' },
        { name: 'Decorative Planters', description: 'Enhance your home decor', price: 29.99, author: 'PlanterDesigner' },
        // Add more products as needed
      ]
    },
    {
      username: 'MusicMaestro',
      title: 'Guitar Hero Starter Kit',
      description: 'Start your journey to becoming a guitar virtuoso with this bundle of video lessons, chord charts, and backing tracks.',
      productCount: 20,
      price: 64.99,
      category: 'Music',
      stackCount: 4,
      mainColor: 'bg-custom-red',
      accentColor: 'bg-custom-green',
      products: [
        { name: 'Video Lessons', description: 'Learn to play guitar', price: 39.99, author: 'GuitarTutor' },
        { name: 'Chord Charts', description: 'Master guitar chords', price: 29.99, author: 'ChordMaster' },
        { name: 'Backing Tracks', description: 'Practice with backing tracks', price: 34.99, author: 'TrackPro' },
        // Add more products as needed
      ]
    },
    {
      username: 'WritingPro',
      title: 'Novel Writing Bootcamp',
      description: 'Craft your bestselling novel with this comprehensive bundle of writing guides, plot templates, and character development worksheets.',
      productCount: 16,
      price: 69.99,
      category: 'Writing',
      stackCount: 3,
      mainColor: 'bg-custom-purple',
      accentColor: 'bg-custom-yellow',
      products: [
        { name: 'Writing Guides', description: 'Learn to write a novel', price: 39.99, author: 'WritingGuru' },
        { name: 'Plot Templates', description: 'Develop your plot', price: 29.99, author: 'PlotMaster' },
        { name: 'Character Development Worksheets', description: 'Create compelling characters', price: 34.99, author: 'CharacterExpert' },
        // Add more products as needed
      ]
    },
    {
      username: 'ParentingExpert',
      title: 'Positive Parenting Toolkit',
      description: 'Navigate the challenges of parenthood with this collection of parenting guides, child development resources, and family activity ideas.',
      productCount: 18,
      price: 59.99,
      category: 'Parenting',
      stackCount: 4,
      mainColor: 'bg-custom-orange',
      accentColor: 'bg-custom-brown',
      products: [
        { name: 'Parenting Guides', description: 'Learn effective parenting techniques', price: 39.99, author: 'ParentingGuru' },
        { name: 'Child Development Resources', description: 'Understand child development', price: 29.99, author: 'ChildDevExpert' },
        { name: 'Family Activity Ideas', description: 'Bond with your family', price: 34.99, author: 'FamilyFunMaster' },
        // Add more products as needed
      ]
    },
  ];

  return (
    <div>
      <div className="bg-primary py-6 sm:py-10 px-4 sm:px-14 space-y-4 sm:space-y-7">
        <Header />
        <Navigation />
        <h1 className="text-black text-2xl sm:text-3xl">Bundls</h1>
      </div>
      <div className="flex-grow py-6 sm:py-8 px-4 sm:px-20 bg-bggray">
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {bundleData.map((bundle, index) => (
            <BundlsCard
              key={index}
              title={bundle.title}
              username={bundle.username}
              description={bundle.description}
              image={bundle.image}
              price={bundle.price}
              category={bundle.category}
              stackCount={bundle.stackCount}
              products={bundle.products}
              mainColor={bundle.mainColor}
              accentColor={bundle.accentColor}
              productCount={bundle.productCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};