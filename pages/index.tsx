// pages/index.tsx

import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import { ScrollSection } from '../components/ScrollSection';
import { Button } from '../components/ui/Button';
import Link from 'next/link'; // Import Link for navigation

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
          {/* Geometric Shape Background */}
          <GeometricShape />
          <div className="relative flex items-center justify-center h-screen">
            <h1 className="relative z-20 text-6xl md:text-8xl font-bold">
              <span className="text-white">Limitations.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                No.
              </span>
            </h1>
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
          {/* Wrap the Button with Link to make it clickable */}
          <Link href="/products" passHref>
            <Button className="text-lg">Explore our products</Button>
          </Link>
        </ScrollSection>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" passHref>
                    <a className="text-gray-400 hover:text-white">
                      About us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/values" passHref>
                    <a className="text-gray-400 hover:text-white">
                      Values
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" passHref>
                    <a className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow Us Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/company/linconwaves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/linconwaves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/linconwaves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" passHref>
                    <a className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" passHref>
                    <a className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" passHref>
                    <a className="text-gray-400 hover:text-white">
                      Cookie Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <a href="mailto:hello@linconwaves.com" className="hover:text-white">
                    hello@linconwaves.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <Link href="/support-center" passHref>
                    <a className="hover:text-white">
                      Support center
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8">
            <div className="max-w-7xl mx-auto px-4 py-6 text-gray-400 text-sm">
              © 2024 Linconwaves Innovation. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
