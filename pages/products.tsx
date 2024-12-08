// pages/products.tsx

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Products() {
  const products = [
    {
      name: 'Product Alpha',
      description:
        'Revolutionize your business with our cutting-edge AI-powered solution.',
      image: '/images/product-alpha.jpg',
      link: '/products/alpha',
    },
    {
      name: 'Product Beta',
      description: 'Seamless integration for modern businesses.',
      image: '/images/product-beta.jpg',
      link: '/products/beta',
    },
    {
      name: 'Product Gamma',
      description:
        'Efficient, scalable, and ready to tackle complex challenges.',
      image: '/images/product-gamma.jpg',
      link: '/products/gamma',
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
        <meta property="og:image" content="/images/og-products.jpg" />
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
            <a
              href="#products"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-blue-600 transition shadow-lg"
            >
              Browse Products
            </a>
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
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                    <p className="text-gray-400 mb-6">{product.description}</p>
                    <a
                      href={product.link}
                      className="text-blue-500 font-medium hover:underline hover:text-blue-400 transition"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                  {/* Subtle Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let&apos;s Innovate Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Take the next step in transforming your business with our
              expertise and innovative products.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
