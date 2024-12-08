// pages/people.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function People() {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      title: 'CEO & Founder',
      description: 'Visionary leader passionate about innovation and growth.',
      image: '/images/alice.jpg',
    },
    {
      name: 'Bob Smith',
      title: 'CTO',
      description: 'Tech enthusiast driving cutting-edge solutions.',
      image: '/images/bob.jpg',
    },
    {
      name: 'Charlie Lee',
      title: 'Lead Developer',
      description: 'Crafting scalable software solutions with precision.',
      image: '/images/charlie.jpg',
    },
    {
      name: 'Diana Evans',
      title: 'AI Specialist',
      description: 'Harnessing AI to solve tomorrow’s challenges today.',
      image: '/images/diana.jpg',
    },
  ];

  const otherTeamMembers = [
    {
      name: 'Emily Watson',
      title: 'UX Designer',
      image: '/images/emily.jpg',
    },
    {
      name: 'James Carter',
      title: 'Data Scientist',
      image: '/images/james.jpg',
    },
    {
      name: 'Sophia Williams',
      title: 'Marketing Lead',
      image: '/images/sophia.jpg',
    },
    {
      name: 'Michael Brown',
      title: 'Cloud Engineer',
      image: '/images/michael.jpg',
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
        <meta
          property="og:title"
          content="People | Linconwaves Innovation"
        />
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
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } space-y-6 md:space-y-0 md:space-x-6 md:space-x-reverse`}
                >
                  {/* Team Member Image */}
                  <div className="relative w-full md:w-1/3 h-64 md:h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-400 mb-4">{member.title}</p>
                    <p className="text-gray-300">{member.description}</p>
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
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-lg text-gray-400">{member.title}</p>
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
            <Link href="/jobs" passHref>
              <a className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-blue-600 transition shadow-lg">
                View Open Positions
              </a>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
