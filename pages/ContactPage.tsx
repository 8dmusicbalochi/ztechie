import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };
  
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const InfoItem: React.FC<{ icon: React.ReactElement, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-medium text-slate-900">{title}</h3>
            <p className="mt-1 text-slate-500">{children}</p>
        </div>
    </div>
);

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let's Connect!
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500">
            Ready to start your next project? Our team is here to help.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
                <InfoItem
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="Our Address"
                >
                    Turbat, Balochistan, Pakistan
                </InfoItem>
                <InfoItem
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Email Us"
                >
                    <a href="mailto:info@ztechie.com" className="text-blue-600 hover:underline">info@ztechie.com</a>
                </InfoItem>
                <InfoItem
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                    title="Call Us"
                >
                    +92 322 204 0775
                </InfoItem>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border border-slate-300 rounded-md" placeholder="Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
                {status && <p className="text-center text-green-600">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
