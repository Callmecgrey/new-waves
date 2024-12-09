// pages/technologies.tsx

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Technology {
  src: string;
  name: string;
}

interface TechSection {
  category: string;
  description: string;
  technologies: Technology[];
  layout: 'left-floating-images' | 'center-stack' | 'image-grid' | 'right-floating-images';
  bg: string;
}

export default function Technologies() {
  const techSections: TechSection[] = [
    {
      category: 'Web Development',
      description:
        'We build dynamic and scalable web applications using modern frameworks and tools to ensure performance, responsiveness, and excellent user experiences.',
      technologies: [
        { src: 'https://img.icons8.com/?size=150&id=bzf0DqjXFHIW&format=png&color=000000', name: 'React' },
        { src: 'https://img.icons8.com/?size=150&id=MWiBjkuHeMVq&format=png&color=000000', name: 'Next.js' },
        { src: 'https://img.icons8.com/?size=150&id=54087&format=png&color=000000', name: 'Node.js' },
        { src: 'https://img.icons8.com/?size=150&id=zdI5E8moxhs-&format=png&color=000000', name: 'Express.js' },
        { src: 'https://img.icons8.com/?size=150&id=CIAZz2CYc6Kc&format=png&color=000000', name: 'GraphQL' },
      ],
      layout: 'left-floating-images',
      bg: 'bg-gradient-to-r from-purple-900 to-black',
    },
    {
      category: 'Mobile Development',
      description:
        'Our mobile apps are crafted to deliver intuitive and seamless experiences for iOS and Android platforms, utilizing the latest technologies.',
      technologies: [
        { src: 'https://img.icons8.com/?size=100&id=35989&format=png&color=000000', name: 'React Native' },
        { src: 'https://img.icons8.com/?size=100&id=-AszLOZlCRQ0&format=png&color=000000', name: 'Flutter' },
        { src: 'https://img.icons8.com/?size=100&id=24465&format=png&color=000000', name: 'Swift' },
        { src: 'https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000', name: 'Kotlin' },
        { src: 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000', name: 'Firebase' },
      ],
      layout: 'center-stack',
      bg: 'bg-gradient-to-r from-blue-900 to-black',
    },
    {
      category: 'Desktop Development',
      description:
        'We deliver high-performance desktop applications that cater to diverse industries, ensuring robustness and user satisfaction.',
      technologies: [
        { src: 'https://img.icons8.com/?size=100&id=ypU4ctBMXsk0&format=png&color=000000', name: 'Electron' },
        { src: 'https://img.icons8.com/?size=100&id=45490&format=png&color=000000', name: 'C#' },
        { src: 'https://img.icons8.com/?size=100&id=BZz399uT6eo0&format=png&color=000000', name: 'Java' },
      ],
      layout: 'image-grid',
      bg: 'bg-gradient-to-r from-gray-900 to-black',
    },
    {
      category: 'AI & New-Era Technologies',
      description:
        'Harnessing the power of AI to deliver intelligent and future-ready solutions that transform businesses.',
      technologies: [
        { src: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', name: 'TensorFlow' },
        { src: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000', name: 'PyTorch' },
        { src: 'https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000', name: 'OpenAI' },
      ],
      layout: 'right-floating-images',
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
                  <div className="flex-1 flex space-x-6 justify-center md:justify-start flex-wrap">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center w-24 h-24 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={tech.src}
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-300">{tech.name}</span>
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
                        className="flex flex-col items-center w-24 h-24 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={tech.src}
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-300">{tech.name}</span>
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
                        className="flex flex-col items-center w-full h-32 transform hover:scale-110 transition-transform"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={tech.src}
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.layout === 'right-floating-images' && (
                <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0">
                  {/* Floating Tech Images */}
                  <div className="flex-1 flex space-x-6 justify-center md:justify-start flex-wrap">
                    {section.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center w-24 h-24 md:w-32 md:h-32 transform hover:scale-110 transition-transform"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={tech.src}
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-300">{tech.name}</span>
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

        <Footer />
      </main>
    </>
  );
}
