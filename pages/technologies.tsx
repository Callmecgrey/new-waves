import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Technologies() {
  return (
    <>
      <Head>
        <title>Technologies - Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore the cutting-edge technologies we utilize."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Our Technologies</h1>
          {/* Add your technologies content here */}
        </section>
      </main>
    </>
  );
}
