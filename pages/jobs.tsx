// pages/jobs.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Jobs() {
  const jobs = [
    {
      title: 'Full-Stack Developer',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'We are looking for a skilled Full-Stack Developer to join our dynamic team. You’ll work on cutting-edge technologies to build scalable solutions.',
      link: '/jobs/full-stack-developer',
    },
    {
      title: 'AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description:
        'Join us as an AI Engineer and help design and deploy AI-powered solutions that transform industries.',
      link: '/jobs/ai-engineer',
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Contract',
      description:
        'We’re looking for a creative UX/UI Designer to design intuitive and user-friendly interfaces for our applications.',
      link: '/jobs/ux-ui-designer',
    },
    {
      title: 'Cloud Architect',
      location: 'New York, NY',
      type: 'Full-Time',
      description:
        'As a Cloud Architect, you’ll design and manage scalable cloud-based infrastructures for enterprise-level solutions.',
      link: '/jobs/cloud-architect',
    },
  ];

  return (
    <>
      <Head>
        <title>Jobs | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore career opportunities at Linconwaves Innovation. Join our team and help shape the future of technology."
        />
        <meta property="og:title" content="Jobs | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Explore career opportunities at Linconwaves Innovation. Join our team and help shape the future of technology."
        />
        <meta property="og:image" content="/images/og-jobs.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Career
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              At Linconwaves Innovation, we’re shaping the future of technology.
              Join our team and make an impact!
            </p>
          </div>
        </section>

        {/* Available Positions Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Available{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Positions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-400">{job.location}</p>
                  <p className="text-gray-400 mb-4">{job.type}</p>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <a
                    href={job.link}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Team
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Don’t see a position that fits your profile? Send us your resume
              and we’ll reach out when we have something for you.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition shadow-lg"
            >
              Submit Your Resume
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
