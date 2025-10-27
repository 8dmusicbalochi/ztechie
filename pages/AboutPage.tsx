import React from 'react';

const teamMembers = [
  { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://picsum.photos/seed/person1/400/400' },
  { name: 'John Smith', role: 'CTO', image: 'https://picsum.photos/seed/person2/400/400' },
  { name: 'Emily White', role: 'Lead Developer', image: 'https://picsum.photos/seed/person3/400/400' },
  { name: 'Michael Brown', role: 'Head of IT Support', image: 'https://picsum.photos/seed/person4/400/400' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500">
            At Ztechie, we’re passionate about turning ideas into technology that works. Our team of skilled developers and IT professionals deliver reliable, efficient, and scalable solutions that empower businesses to reach their full potential.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                <strong>Mission:</strong> To provide high-quality technology services that simplify business operations and drive digital transformation.
              </p>
              <p className="mt-4 text-lg text-slate-500">
                <strong>Vision:</strong> To be a trusted technology partner for small and large businesses across the globe.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img className="rounded-lg shadow-xl" src="https://picsum.photos/seed/office/600/500" alt="Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              The driving force behind our success.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={member.image} alt={member.name} />
                <h3 className="mt-6 text-xl font-medium text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
