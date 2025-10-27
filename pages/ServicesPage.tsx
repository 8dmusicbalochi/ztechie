import React from 'react';

const services = [
  {
    name: 'Software Development',
    description: 'We design and develop custom software tailored to your business needs — from desktop applications to cloud-based systems.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    name: 'IT Support & Maintenance',
    description: 'Our team ensures your systems run smoothly with 24/7 support, troubleshooting, and security management.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    name: 'Web & App Development',
    description: 'Get a powerful website or mobile app that represents your brand and delivers an excellent user experience.',
    icon: 'M10 20l4-16m4 4l-4 4-4-4 4-4'
  },
  {
    name: 'Network & Security Solutions',
    description: 'We help businesses set up secure, high-performance networks to keep data safe and systems optimized.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500">
            Comprehensive technology solutions to meet your business needs and drive growth.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.name} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4">
                     <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                        </svg>
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900">{service.name}</h2>
                  </div>
                  <p className="mt-4 text-lg text-slate-500">
                    {service.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img src={`https://picsum.photos/seed/service${index + 1}/600/400`} alt={service.name} className="rounded-lg shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
