import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events - Linconwaves Innovation</title>
        <meta
          name="description"
          content="Stay updated with our latest events and happenings."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Our Events</h1>
          {/* Add your events content here */}
        </section>
      </main>
    </>
  );
}
