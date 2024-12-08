// pages/terms-of-service.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Linconwaves Innovation's website and services."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Terms of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Service
            </span>
          </h1>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300">
            <h2 className="text-3xl font-bold mb-6">Agreement to Terms</h2>
            <p className="mb-4">
              By using our website or services, you agree to comply with these
              Terms of Service. Please read them carefully before proceeding.
            </p>
            <h3 className="text-2xl font-bold mb-4">Use of Services</h3>
            <p className="mb-4">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms.
            </p>
            <h3 className="text-2xl font-bold mb-4">Intellectual Property</h3>
            <p className="mb-4">
              All content, trademarks, and intellectual property displayed on
              our website are owned by Linconwaves Innovation and are protected
              by law.
            </p>
            <h3 className="text-2xl font-bold mb-4">Limitation of Liability</h3>
            <p className="mb-4">
              We are not responsible for any damages resulting from the use of
              our services to the extent permitted by law.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
