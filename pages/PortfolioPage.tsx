import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, title: 'Smart Invoice App', category: 'Web Application', description: 'A web-based invoicing tool for small businesses, showcasing our commitment to quality, innovation, and user-friendly design.', image: 'https://picsum.photos/seed/project1/600/400' },
  { id: 2, title: 'HelpDesk Pro', category: 'IT Support', description: 'An IT support ticketing system for efficient client management, highlighting our expertise in creating robust business tools.', image: 'https://picsum.photos/seed/project2/600/400' },
  { id: 3, title: 'BizConnect CRM', category: 'System Integration', description: 'A customer relationship management system for a retail company, demonstrating our ability to deliver scalable enterprise solutions.', image: 'https://picsum.photos/seed/project3/600/400' },
  { id: 4, title: 'Corporate IT Infrastructure', category: 'IT Support', description: 'Designed and implemented a robust and secure IT infrastructure for a medium-sized enterprise.', image: 'https://picsum.photos/seed/project4/600/400' },
  { id: 5, title: 'CRM Integration', category: 'System Integration', description: 'Seamlessly connected sales, marketing, and support systems with a leading CRM platform.', image: 'https://picsum.photos/seed/project5/600/400' },
  { id: 6, title: 'SaaS Analytics Dashboard', category: 'Web Development', description: 'A powerful and interactive dashboard for a SaaS product, providing deep customer insights.', image: 'https://picsum.photos/seed/project6/600/400' },
];

// Get unique categories and add "All"
const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500">
            We take pride in our work. Explore some of the projects we've successfully delivered.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-200 text-slate-700 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex flex-col bg-slate-50 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img className="h-56 w-full object-cover" src={item.image} alt={item.title} />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base text-slate-500 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;