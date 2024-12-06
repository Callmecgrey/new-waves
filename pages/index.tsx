// pages/index.tsx

import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import { ScrollSection } from '../components/ScrollSection';
import { Button } from '../components/ui/Button';

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
          <div className="relative flex items-center justify-center h-screen">
            <GeometricShape className="absolute top-0 left-0 w-40 h-40 z-10 opacity-50" />
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
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              at our core
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building the future of technology with innovative solutions and
            cutting-edge expertise.
          </p>
        </ScrollSection>

        {/* Team Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            The secret sauce:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              our team
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re obsessive about creating a place where talented,
            hard-working, and full of team spirit people can thrive.
          </p>
          <div className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 font-medium">
            4.8/5 Team satisfaction
          </div>
        </ScrollSection>

        {/* Technology Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            State-of-the-art{' '}
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              in-house technologies
            </div>
          </h2>
        </ScrollSection>

        {/* Product Section */}
        <ScrollSection>
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Crafted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              with care
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We strive to make each solution intuitive, efficient, and powerful
            under the hood.
          </p>
          <Button className="text-lg">Explore our products</Button>
        </ScrollSection>

        {/* Geometric Shape Background */}
        <GeometricShape />

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Values
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            {/* Follow Us Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">hello@linconwaves.com</li>
                <li className="text-gray-400">Support center</li>
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
