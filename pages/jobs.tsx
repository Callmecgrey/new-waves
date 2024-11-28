import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Jobs() {
  return (
    <>
      <Head>
        <title>Jobs - Linconwaves Innovation</title>
        <meta
          name="description"
          content="Join our team and be a part of our innovative journey."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Careers at Linconwaves</h1>
          {/* Add your jobs/careers content here */}
        </section>
      </main>
    </>
  );
}
