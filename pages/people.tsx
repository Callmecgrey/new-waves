import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function People() {
  return (
    <>
      <Head>
        <title>People - Linconwaves Innovation</title>
        <meta
          name="description"
          content="Meet the talented team behind our innovative solutions."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Our People</h1>
          {/* Add your team content here */}
        </section>
      </main>
    </>
  );
}
