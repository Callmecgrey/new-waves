// pages/privacy-policy.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Read our privacy policy to learn how Linconwaves Innovation collects, uses, and protects your information."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Policy
            </span>
          </h1>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. This Privacy Policy outlines the
              types of information we collect, how we use it, and how we protect
              your data.
            </p>
            <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
            <p className="mb-4">
              We may collect personal information such as your name, email
              address, and any other information you provide when using our
              services.
            </p>
            <h3 className="text-2xl font-bold mb-4">How We Use Your Data</h3>
            <p className="mb-4">
              We use your information to provide, improve, and personalize our
              services, as well as to communicate with you.
            </p>
            <h3 className="text-2xl font-bold mb-4">Protecting Your Information</h3>
            <p className="mb-4">
              We implement robust security measures to safeguard your data from
              unauthorized access, alteration, or disclosure.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
