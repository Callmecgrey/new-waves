// pages/technologies.tsx

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Technologies() {
  const techSections = [
    {
      category: 'Web Development',
      description:
        'We build dynamic and scalable web applications using modern frameworks and tools to ensure performance, responsiveness, and excellent user experiences.',
      technologies: [
        'https://img.icons8.com/?size=150&id=bzf0DqjXFHIW&format=png&color=000000',
        'https://img.icons8.com/?size=150&id=MWiBjkuHeMVq&format=png&color=000000',
        'https://img.icons8.com/?size=150&id=54087&format=png&color=000000',
        'https://img.icons8.com/?size=150&id=zdI5E8moxhs-&format=png&color=000000',
        'https://img.icons8.com/?size=150&id=CIAZz2CYc6Kc&format=png&color=000000',
      ],
      layout: 'left-floating-images',
      bg: 'bg-gradient-to-r from-purple-900 to-black',
    },
    {
      category: 'Mobile Development',
      description:
        'Our mobile apps are crafted to deliver intuitive and seamless experiences for iOS and Android platforms, utilizing the latest technologies.',
      technologies: [
        '/images/react-native.svg',
        '/images/flutter.svg',
        '/images/swift.svg',
        '/images/kotlin.svg',
        '/images/dart.svg',
      ],
      layout: 'center-stack', // Custom layout for this section
      bg: 'bg-gradient-to-r from-blue-900 to-black',
    },
    {
      category: 'Desktop Development',
      description:
        'We deliver high-performance desktop applications that cater to diverse industries, ensuring robustness and user satisfaction.',
      technologies: [
        '/images/electron.svg',
        '/images/csharp.svg',
        '/images/javafx.svg',
        '/images/wpf.svg',
        '/images/qt.svg',
      ],
      layout: 'image-grid', // Custom layout for this section
      bg: 'bg-gradient-to-r from-gray-900 to-black',
    },
    {
      category: 'AI & New-Era Technologies',
      description:
        'Harnessing the power of AI to deliver intelligent and future-ready solutions that transform businesses.',
      technologies: [
        '/images/python.svg',
        '/images/tensorflow.svg',
        '/images/pytorch.svg',
        '/images/openai.svg',
        '/images/google-ai.svg',
      ],
      layout: 'right-floating-images', // Custom layout for this section
      bg: 'bg-gradient-to-r from-green-900 to-black',
    },
  ];

  return (
    <>
      <Head>
        <title>Technologies | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore the cutting-edge technologies we use to deliver exceptional solutions for web, mobile, desktop, and AI-driven applications."
        />
        <meta
          property="og:title"
          content="Technologies | Linconwaves Innovation"
        />
        <meta
          property="og:description"
          content="Explore the cutting-edge technologies we use to deliver exceptional solutions for web, mobile, desktop, and AI-driven applications."
        />
        <meta property="og:image" content="/images/og-technologies.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Technology{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                at Our Core
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the advanced technologies we use to build innovative
              solutions across web, mobile, desktop, and AI platforms.
            </p>
          </div>
        </section>

        {/* Tech Sections */}
        {techSections.map((section, index) => (
          <section
            key={index}
            className={`relative ${section.bg} min-h-[80vh] flex items-center`}
          >
            <div className="container mx-auto px-6 md:px-12">
              {/* Different Layouts Based on `layout` */}
              {section.layout === 'left-floating-images' && (
                <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0">
                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                      {section.category}
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 mb-8">
                      {section.description}
                    </p>
                  </div>
                  {/* Floating Tech Images */}
                  <div className="flex-1 flex space-x-4 justify-center md:justify-start">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="relative w-20 h-20 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <Image
                          src={tech}
                          alt={section.category}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.layout === 'center-stack' && (
                <div className="text-center">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    {section.category}
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                    {section.description}
                  </p>
                  {/* Centered Floating Tech Images */}
                  <div className="flex justify-center flex-wrap gap-8">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="relative w-20 h-20 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <Image
                          src={tech}
                          alt={section.category}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.layout === 'image-grid' && (
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    {section.category}
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="relative w-full h-32 transform hover:scale-110 transition-transform"
                      >
                        <Image
                          src={tech}
                          alt={section.category}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.layout === 'right-floating-images' && (
                <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0">
                  {/* Floating Tech Images */}
                  <div className="flex-1 flex space-x-4 justify-center md:justify-start">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="relative w-20 h-20 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <Image
                          src={tech}
                          alt={section.category}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-right">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                      {section.category}
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 mb-8">
                      {section.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Call to Action Section 
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let’s Innovate Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Partner with us to build transformative solutions powered by the
              latest technologies.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>*/}

        <Footer />
      </main>
    </>
  );
}
