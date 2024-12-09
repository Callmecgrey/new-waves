// pages/about.tsx

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Learn more about Linconwaves Innovation, our mission, values, and how we deliver transformative software and web solutions to drive growth."
        />
        <meta property="og:title" content="About Us | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Learn more about Linconwaves Innovation, our mission, values, and how we deliver transformative software and web solutions to drive growth."
        />
        <meta property="og:image" content="/images/og-about.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen bg-gradient-to-b from-black to-gray-900 text-center flex flex-col justify-center items-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Linconwaves
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Transforming businesses through innovative software and web
              solutions.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Who We Are
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Linconwaves Innovation is a private limited software company
              incorporated in England and Wales with company registration number
              <span className="text-blue-400"> 14152999</span>. We specialize in
              delivering business-changing software and web solutions that drive
              organizational growth, efficiency, and profitability.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              With a focus on innovation, we partner with businesses to create
              tailored solutions that address challenges and unlock potential.
              From scalable software to intuitive web platforms, we are
              dedicated to empowering organizations with cutting-edge
              technology.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-20 bg-black text-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-400">
                  To deliver innovative and transformative software solutions
                  that drive growth, efficiency, and profitability for
                  businesses worldwide. We aim to be a trusted partner in
                  empowering organizations with the tools they need to succeed
                  in the digital age.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-purple-400">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-400">
                  To be a global leader in technology-driven innovation,
                  reshaping industries and enabling businesses to reach their
                  fullest potential. We envision a future where technology
                  drives meaningful change and transforms the way businesses
                  operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Core Values
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  We embrace creativity and challenge the status quo to deliver
                  transformative solutions.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-400">
                  Together, we achieve more. Collaboration is at the heart of
                  everything we do.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-400">
                  We deliver exceptional results by maintaining the highest
                  standards of quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Be part of a team that’s driving meaningful change and delivering
              transformative solutions. Explore our career opportunities today.
            </p>
            <Link
              href="/careers"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-green-600 transition shadow-lg"
            >
              Explore Careers
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
