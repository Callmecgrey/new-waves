// pages/people.tsx

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';

export default function People() {
  const teamMembers = [
    {
      name: 'Olalekan Onaolapo',
      title: 'CEO & Founder',
      description: 'Visionary leader passionate about innovation and growth.',
      image: '/images/olalekan.jpg',
      linkedin: 'https://www.linkedin.com/in/olalekan-onaolapo',
      location: 'Nicosia, Cyprus.',
    },
    {
      name: 'Oluwatumininu Haroun',
      title: 'Director',
      description: 'Tech enthusiast driving cutting-edge solutions.',
      image: '/images/tumininu.jpg',
      linkedin: 'https://www.linkedin.com/in/oluwatumininu-haroun',
      location: 'London, United Kingdom.',
    },
    {
      name: 'Eric Jin',
      title: 'Lead Developer',
      description: 'Crafting scalable software solutions with precision.',
      image: '/images/charlie.jpg',
      linkedin: 'https://www.linkedin.com/in/eric-jin',
      location: 'San Francisco, USA',
    },
    {
      name: 'Diana Evans',
      title: 'AI Specialist',
      description: 'Harnessing AI to solve tomorrow’s challenges today.',
      image: '/images/diana.jpg',
      linkedin: 'https://www.linkedin.com/in/diana-evans',
      location: 'London, UK',
    },
  ];

  const otherTeamMembers = [
    {
      name: 'Emily Watson',
      title: 'UX Designer',
      image: '/images/emily.jpg',
      linkedin: 'https://www.linkedin.com/in/emily-watson',
      location: 'New York, USA',
    },
    {
      name: 'James Carter',
      title: 'Data Scientist',
      image: '/images/james.jpg',
      linkedin: 'https://www.linkedin.com/in/james-carter',
      location: 'Toronto, Canada',
    },
    {
      name: 'Sophia Williams',
      title: 'Marketing Lead',
      image: '/images/sophia.jpg',
      linkedin: 'https://www.linkedin.com/in/sophia-williams',
      location: 'Sydney, Australia',
    },
    {
      name: 'Michael Brown',
      title: 'Cloud Engineer',
      image: '/images/michael.jpg',
      linkedin: 'https://www.linkedin.com/in/michael-brown',
      location: 'Berlin, Germany',
    },
  ];

  return (
    <>
      <Head>
        <title>People | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Meet the incredible team behind Linconwaves Innovation. Discover the people driving our vision forward."
        />
        <meta property="og:title" content="People | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Meet the incredible team behind Linconwaves Innovation. Discover the people driving our vision forward."
        />
        <meta property="og:image" content="/images/og-people.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Meet the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Innovators
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Behind every groundbreaking solution is an incredible team.
              Discover the people who bring innovation to life.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Team
              </span>
            </h2>

            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Team Member Image */}
                  <div className="relative w-full md:w-1/3 h-80 md:h-96">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s Profile Picture`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-400 mb-4">{member.title}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>

                    {/* LinkedIn and Location */}
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      {/* LinkedIn Link */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 transition"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                          {/* LinkedIn SVG Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.869 0-2.155 1.46-2.155 2.964v5.7h-3v-10h2.88v1.367h.041c.402-.76 1.385-1.562 2.846-1.562 3.046 0 3.612 2.005 3.612 4.615v5.583z" />
                          </svg>
                        </a>
                      )}

                      {/* Location */}
                      {member.location && (
                        <span className="text-gray-400 flex items-center">
                          {/* Location SVG Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 4c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                            />
                          </svg>
                          {member.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Team Members Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Other{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Team Members
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {otherTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  {/* Image */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s Profile Picture`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-lg text-gray-400">{member.title}</p>

                    {/* LinkedIn and Location */}
                    <div className="flex items-center space-x-4 mt-2">
                      {/* LinkedIn Link */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 transition"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                          {/* LinkedIn SVG Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.869 0-2.155 1.46-2.155 2.964v5.7h-3v-10h2.88v1.367h.041c.402-.76 1.385-1.562 2.846-1.562 3.046 0 3.612 2.005 3.612 4.615v5.583z" />
                          </svg>
                        </a>
                      )}

                      {/* Location */}
                      {member.location && (
                        <span className="text-gray-400 flex items-center">
                          {/* Location SVG Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 4c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                            />
                          </svg>
                          {member.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Team
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Are you ready to make an impact? We&apos;re always looking for talented
              individuals to join our team and help us shape the future.
            </p>
            {/* Using the Button component for the CTA */}
            <Button href="/jobs">
              View Open Positions
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
