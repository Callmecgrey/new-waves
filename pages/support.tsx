// pages/support.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SupportCenter() {
  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'Go to the login page and click on "Forgot Password" to reset it.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact us via email at support@linconwaves.com.',
    },
    {
      question: 'Where can I find my order history?',
      answer:
        'Log in to your account and navigate to the "Orders" section to view your order history.',
    },
  ];

  const supportCategories = [
    {
      title: 'Account Management',
      description:
        'Help with login issues, account settings, and profile updates.',
      link: '/support/account-management',
    },
    {
      title: 'Technical Support',
      description: 'Get help with software issues, bugs, and troubleshooting.',
      link: '/support/technical-support',
    },
    {
      title: 'Billing and Payments',
      description:
        'Resolve issues related to invoices, payments, and subscriptions.',
      link: '/support/billing-and-payments',
    },
  ];

  return (
    <>
      <Head>
        <title>Support Center | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Find answers to common questions and get support for Linconwaves Innovation services."
        />
        <meta property="og:title" content="Support Center | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Find answers to common questions and get support for Linconwaves Innovation services."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Support{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Center
            </span>
          </h1>
        </section>

        {/* Support Categories */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              How Can We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Help You?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {supportCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <Link href={category.link} passHref>
                    <a className="text-blue-500 hover:text-blue-400 underline">
                      Learn More
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Questions
              </span>
            </h2>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-center">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Still Need{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Help?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
              Reach out to our support team for personalized assistance.
            </p>
            <Link href="/contact" passHref>
              <a className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition shadow-lg">
                Contact Us
              </a>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
