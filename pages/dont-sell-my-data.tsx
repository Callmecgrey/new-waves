// pages/do-not-sell-my-data.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DoNotSellMyData() {
  return (
    <>
      <Head>
        <title>Do Not Sell My Data | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Learn about your data rights and how you can request that Linconwaves Innovation does not sell your personal data."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Do Not Sell{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              My Data
            </span>
          </h1>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300">
            <h2 className="text-3xl font-bold mb-6">Your Data Rights</h2>
            <p className="mb-4">
              At Linconwaves Innovation, we respect your data privacy. Under
              applicable laws, you have the right to request that we do not sell
              your personal data.
            </p>
            <h3 className="text-2xl font-bold mb-4">How to Submit a Request</h3>
            <p className="mb-4">
              To exercise your rights, please contact us via our support page or
              send an email to <span className="text-blue-400">privacy@linconwaves.com</span>.
            </p>
            <h3 className="text-2xl font-bold mb-4">Verification Process</h3>
            <p className="mb-4">
              To ensure your data security, we may ask you to verify your
              identity before processing your request.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
