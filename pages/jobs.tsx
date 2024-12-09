// pages/jobs.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for client-side navigation
import { useState } from 'react';

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
  link: string;
  department: string;
}

export default function Jobs() {
  const jobs: Job[] = [
    {
      title: 'Full-Stack Developer',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'We are looking for a skilled Full-Stack Developer to join our dynamic team. You’ll work on cutting-edge technologies to build scalable solutions.',
      link: '/jobs/full-stack-developer',
      department: 'Engineering',
    },
    {
      title: 'AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description:
        'Join us as an AI Engineer and help design and deploy AI-powered solutions that transform industries.',
      link: '/jobs/ai-engineer',
      department: 'Engineering',
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Contract',
      description:
        'We’re looking for a creative UX/UI Designer to design intuitive and user-friendly interfaces for our applications.',
      link: '/jobs/ux-ui-designer',
      department: 'Design',
    },
    {
      title: 'Cloud Architect',
      location: 'New York, NY',
      type: 'Full-Time',
      description:
        'As a Cloud Architect, you’ll design and manage scalable cloud-based infrastructures for enterprise-level solutions.',
      link: '/jobs/cloud-architect',
      department: 'Engineering',
    },
    // Add more jobs as needed
  ];

  // State for selected tab
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  // Get unique departments
  const departments = Array.from(new Set(jobs.map((job) => job.department))).sort();

  // Add 'All' to departments
  const allDepartments = ['All', ...departments];

  // Filter jobs based on selected department
  const filteredJobs =
    selectedDepartment === 'All'
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <>
      <Head>
        <title>Jobs | Linconwaves Innovation</title>
        <meta name="description" content="Available jobs at Linconwaves Innovation" />
        <meta property="og:title" content="Jobs | Linconwaves Innovation" />
        <meta property="og:description" content="Available jobs at Linconwaves Innovation" />
        <meta property="og:image" content="/images/og-jobs.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Open Job{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Roles
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore Available Job Roles at Linconwaves
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

            {/* Tabs for Departments */}
            <div className="flex justify-center mb-12 space-x-4">
              {allDepartments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  } transition`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative w-full h-48 mb-6">
                    <Image
                      src={`/images/jobs/${job.title.toLowerCase().replace(/ /g, '-')}.jpg`}
                      alt={job.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-400">{job.location}</p>
                  <p className="text-gray-400 mb-4">{job.type}</p>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <Link
                    href={job.link}
                    className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition"
                  >
                    Apply Now
                  </Link>
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
              Don’t see a position that fits your profile? Send us your resume and we’ll reach out when we have something for you.
            </p>
            <a
              href="mailto:hr@linconwavesinnovation.com?subject=Job%20Inquiry&body=Do%20you%20perhaps%20have%20an%20open%20role%20for%20____"
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
