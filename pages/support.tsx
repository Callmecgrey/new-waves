// pages/support.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SupportCenter() {
  return (
    <>
      <Head>
        <title>Support Center | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Get support for Linconwaves Innovation services by contacting our support team directly."
        />
        <meta property="og:title" content="Support Center | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Get support for Linconwaves Innovation services by contacting our support team directly."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Support{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Center
            </span>
          </h1>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Need{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Assistance?
              </span>
            </h2>
            <p className="text-lg md:text-xl mb-12">
              Our support team is here to help you with any questions or issues you may have. Click the button below to
              contact us directly.
            </p>
            <a
              href="mailto:support@linconwavesinnovation.com?subject=Support%20Request&body=Hello%2C%20I%20need%20assistance%20with..."
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
