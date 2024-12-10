// pages/blog.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/postsData';

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Blog | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore insights, updates, and innovations from Linconwaves Innovation on our blog. Stay informed about the latest in technology and business."
        />
        <meta property="og:title" content="Blog | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Explore insights, updates, and innovations from Linconwaves Innovation on our blog. Stay informed about the latest in technology and business."
        />
        <meta property="og:image" content="/images/og-blog.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen bg-gradient-to-b from-black to-gray-900 text-center flex flex-col justify-center items-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Updates
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Explore our blog for the latest trends, insights, and updates in
              technology, business, and innovation.
            </p>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Posts
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {post.image && (
                    <div className="relative w-full h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.date}</p>
                    {post.description && (
                      <p className="text-gray-300 mb-4">{post.description}</p>
                    )}
                    {/* Use Link instead of <a> for internal navigation */}
                    <Link
                      href={post.link}
                      className="text-blue-500 hover:text-blue-400 mt-4 inline-block underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Recent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Posts
              </span>
            </h2>

            <div className="space-y-8">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-2">{post.date}</p>
                  {/* Also fix recent posts links */}
                  <Link
                    href={post.link}
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Box */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-center">
          <div className="container mx-auto px-6 md:px-0 max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Know about it{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                First
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10">
              Never miss an update from us.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition shadow-lg w-full"
                >
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="bg-gray-800 p-6 rounded-md shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Thanks for Subscribing!</h3>
                <p className="text-gray-300">
                  We&apos;ll keep you updated with our latest posts and insights.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
