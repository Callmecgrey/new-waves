// pages/blog.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Blog() {
  const featuredPosts = [
    {
      title: 'The Future of AI in Business',
      description:
        'How artificial intelligence is transforming industries and driving innovation.',
      image: '/images/blog-ai-future.jpg',
      date: 'December 1, 2024',
      link: '/blog/the-future-of-ai-in-business',
    },
    {
      title: '5 Web Development Trends for 2024',
      description:
        'Stay ahead of the curve with these game-changing web development trends.',
      image: '/images/blog-web-trends.jpg',
      date: 'November 15, 2024',
      link: '/blog/web-development-trends-2024',
    },
  ];

  const recentPosts = [
    {
      title: 'Scaling Your Business with Cloud Technologies',
      date: 'November 10, 2024',
      link: '/blog/scaling-with-cloud',
    },
    {
      title: 'Building Better User Experiences with Design Thinking',
      date: 'October 25, 2024',
      link: '/blog/design-thinking',
    },
    {
      title: 'How Machine Learning is Revolutionizing Healthcare',
      date: 'October 5, 2024',
      link: '/blog/machine-learning-healthcare',
    },
  ];

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
                  <div className="relative w-full h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.date}</p>
                    <p className="text-gray-300">{post.description}</p>
                    <a
                      href={post.link}
                      className="text-blue-500 hover:text-blue-400 mt-4 inline-block underline"
                    >
                      Read More
                    </a>
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
                  <a
                    href={post.link}
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Stay Updated with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Linconwaves
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter and never miss an update from our
              blog.
            </p>
            <a
              href="/subscribe"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition shadow-lg"
            >
              Subscribe Now
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
