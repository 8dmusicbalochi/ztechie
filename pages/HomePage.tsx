import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business requirements and drive growth.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    name: 'IT Support & Maintenance',
    description: '24/7 monitoring and support to keep your systems running smoothly and securely.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    name: 'Web & App Development',
    description: 'Engaging and responsive applications for a superior user experience on any device.',
    icon: 'M10 20l4-16m4 4l-4 4-4-4 4-4'
  },
];

const featuredProjects = [
  { id: 1, title: 'Smart Invoice App', category: 'Web Application', image: 'https://picsum.photos/seed/project1/600/400' },
  { id: 2, title: 'HelpDesk Pro', category: 'IT Support', image: 'https://picsum.photos/seed/project2/600/400' },
  { id: 3, title: 'BizConnect CRM', category: 'System Integration', image: 'https://picsum.photos/seed/project3/600/400' },
];

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              {/* This space is for the header, which is in a separate component */}
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Innovative Technology</span>{' '}
                  <span className="block text-blue-500 xl:inline">Solutions for Your Business</span>
                </h1>
                <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  At Ztechie, we deliver reliable, efficient, and scalable technology solutions that empower businesses to reach their full potential.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://picsum.photos/seed/hero/1200/800" alt="Technology" />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A Better Way to Grow Your Business
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              We provide a wide range of services to help you succeed in the digital world.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
             {services.map((service) => (
                <div key={service.name} className="p-6 bg-slate-50 rounded-lg shadow-md text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white mx-auto">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                        </svg>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.name}</h3>
                    <p className="mt-2 text-slate-500">{service.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Work</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              Here's a glimpse of the solutions we've successfully delivered to our clients.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((item) => (
              <div key={item.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img className="h-56 w-full object-cover" src={item.image} alt={item.title} />
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-600">Start your project with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;