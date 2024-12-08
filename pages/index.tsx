// pages/index.tsx

import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollSection } from '../components/ScrollSection';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

const GeometricShape = dynamic(() => import('../components/GeometricShape'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Linconwaves Innovation</title>
        <meta
          name="description"
          content="Building the future of technology with innovative solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Building the future of technology with innovative solutions."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta
          property="og:url"
          content="https://www.linconwavesinnovation.com"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main className="bg-black text-white pt-16 relative">
        <Navbar />

        {/* Hero Section */}
        <ScrollSection>
          {/* Wrapped GeometricShape and Hero Content in a Relative Container */}
          <div className="relative w-full h-screen overflow-hidden">
            {/* Geometric Shape on Top */}
            <GeometricShape />
            <div className="relative flex items-center justify-center h-full z-10">
              <h1 className="relative z-10 text-6xl md:text-8xl font-bold">
                <span className="text-white">Limitations.</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  No.
                </span>
              </h1>
            </div>
          </div>
        </ScrollSection>

        {/* Engineering Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            Innovation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Driven by Code
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses with scalable software solutions and unparalleled technical expertise.
          </p>
        </ScrollSection>

        {/* Team Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            Our Secret Weapon:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              our team
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re dedicated to fostering a collaborative environment where talented and innovative individuals can excel and drive our projects forward.
          </p>
          <div className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 font-medium">
            4.8/5 Team Morale
          </div>
        </ScrollSection>

        {/* Technology Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            Next-Gen{' '}
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              in-house technologies
            </div>
          </h2>
        </ScrollSection>

        {/* Product Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Engineered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              with precision
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We design each solution to be intuitive, efficient, and robust, ensuring seamless performance and exceptional user experiences.
          </p>
          {/* Wrapped Button with Link to make it clickable */}
          <Link href="/products" passHref>
            <Button className="text-lg">Explore our products</Button>
          </Link>
        </ScrollSection>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
