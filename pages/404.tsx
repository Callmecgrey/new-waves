// pages/404.tsx

import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Linconwaves Innovation</title>
      </Head>
      <main className="bg-black text-white min-h-screen pt-16 flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link href="/" passHref>
            <a className="text-blue-500 hover:underline">Go back home</a>
          </Link>
        </div>
      </main>
    </>
  );
}
