// pages/careers.tsx

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore a career at Linconwaves Innovation. Discover our work areas, culture, team, and what makes us a great place to work."
        />
        <meta property="og:title" content="Careers | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Explore a career at Linconwaves Innovation. Discover our work areas, culture, team, and what makes us a great place to work."
        />
        <meta property="og:image" content="/images/og-careers.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen bg-gradient-to-b from-black to-gray-900 text-center flex flex-col justify-center items-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Your Career. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Your Future.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              At Linconwaves Innovation, we empower you to grow, lead, and
              innovate. Shape your future by joining our team.
            </p>
            <Link href="/jobs" passHref>
              <a className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-blue-600 transition shadow-lg">
                Explore Open Positions
              </a>
            </Link>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400">
            Scroll to explore
          </div>
        </section>

        {/* Work Areas Section */}
        <section className="py-20 bg-gray-800 text-center relative">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Discover Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Expertise
              </span>
            </h2>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:items-stretch">
                {/* Left Column */}
                <div className="flex-1 bg-gray-900 text-left p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                  <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                  <p className="text-gray-400 mb-6">
                    We craft intuitive and scalable web applications that drive
                    results.
                  </p>
                  <Link href="/work/web-development" passHref>
                    <a className="text-blue-500 hover:text-blue-400 underline">
                      Learn More
                    </a>
                  </Link>
                </div>
                {/* Right Column */}
                <div className="flex-1 bg-gray-700 text-left p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                  <h3 className="text-3xl font-bold mb-4">AI and Machine Learning</h3>
                  <p className="text-gray-400 mb-6">
                    Building AI-driven solutions that transform industries and
                    enhance decision-making.
                  </p>
                  <Link href="/work/ai-ml" passHref>
                    <a className="text-blue-500 hover:text-blue-400 underline">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture and Values Section */}
        <section className="py-20 bg-black text-gray-300 text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Join Us?
              </span>
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12">
              Our culture is built on creativity, collaboration, and passion for
              innovation. We take pride in fostering a workplace where everyone
              thrives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Collaborative Culture</h3>
                <p className="text-gray-400">
                  Work alongside talented individuals to achieve remarkable
                  outcomes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth Opportunities</h3>
                <p className="text-gray-400">
                  We provide the tools and resources to help you grow
                  personally and professionally.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovative Projects</h3>
                <p className="text-gray-400">
                  Be part of groundbreaking projects that push the boundaries
                  of technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Meet the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Team
              </span>
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-400">
              Our diverse and talented team is the heart of Linconwaves
              Innovation. Together, we achieve greatness.
            </p>
            <Link href="/people" passHref>
              <a className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-blue-600 transition shadow-lg">
                Learn More About Us
              </a>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Join the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Journey?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Explore open positions and become part of our growing team.
            </p>
            <Link href="/jobs" passHref>
              <a className="bg-gradient-to-r from-green-400 to-cyan-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-green-500 hover:to-cyan-600 transition shadow-lg">
                Explore Careers
              </a>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}