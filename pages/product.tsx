import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - Linconwaves Innovation</title>
        <meta
          name="description"
          content="Discover our innovative products that are shaping the future."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Our Products</h1>
          {/* Add your product content here */}
        </section>
      </main>
    </>
  );
}
