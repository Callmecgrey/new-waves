// pages/products.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Products() {
  const products = [
    {
      name: 'Jolimate',
      description:
        'Jolimate revolutionizes online dating by leveraging advanced matchmaking algorithms and personalized user experiences. Connect with like-minded individuals seamlessly, ensuring meaningful and lasting relationships.',
      image: '/images/web-joli.jpg',
      link: 'https://jolimate.app',
    },
    {
      name: 'Jobmint',
      description:
        'Jobmint simplifies the job search process with real-time listings, tailored job recommendations, and an intuitive interface. Whether you\'re a seasoned professional or just starting out, Jobmint helps you find the perfect opportunity with ease.',
      image: '/images/web-jobmint.jpg',
      link: 'https://jobmint.io',
    },
    {
      name: 'Minlink',
      description:
        'Minlink offers a robust URL shortening service that not only makes your links more manageable but also provides detailed analytics and customizable branding options. Enhance your online presence and track link performance effortlessly with Minlink.',
      image: '/images/product-gamma.jpg',
      link: 'https://minlink.io',
    },
  ];

  return (
    <>
      <Head>
        <title>Products | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore our innovative and cutting-edge product solutions designed to meet your business needs."
        />
        <meta property="og:title" content="Products | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Explore our innovative and cutting-edge product solutions designed to meet your business needs."
        />
        <meta property="og:image" content="https://www.linconwavesinnovation.com/images/og-products.jpg" />
        <meta
          property="og:url"
          content="https://www.linconwavesinnovation.com/products"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="text-center px-6 md:px-0">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Innovations
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Dive into our cutting-edge products that redefine technology and
              empower businesses to achieve more.
            </p>
            {/* Internal Link without nested <a> */}
            <Link
              href="#products"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-blue-600 transition shadow-lg inline-block"
            >
              Browse Products
            </Link>
          </div>
        </section>

        {/* Product List Section */}
        <section
          id="products"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Products
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((product) => (
                <a
                  href={product.link}
                  key={product.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="relative w-full h-64">
                      <Image
                        src={product.image}
                        alt={`${product.name} Image`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform group-hover:scale-110"
                        priority
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                      <p className="text-gray-400 mb-6">{product.description}</p>
                      <span className="text-blue-500 font-medium hover:underline hover:text-blue-400 transition">
                        Learn More &rarr;
                      </span>
                    </div>
                    {/* Subtle Background Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
