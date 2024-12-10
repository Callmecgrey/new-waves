// pages/do-not-sell-my-data.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DoNotSellMyData() {
  return (
    <>
      <Head>
        <title>Do Not Sell My Data | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Learn about your data rights and how you can request that Linconwaves Innovation does not sell your personal data."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Do Not Sell{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              My Data
            </span>
          </h1>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Data Rights</h2>
              <p className="mb-4">
                At Linconwaves Innovation Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we respect your data privacy rights. Under applicable laws, such as the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR), you have the right to request that we do not sell your personal data.
              </p>
            </div>

            {/* What Does "Sell My Data" Mean? */}
            <div>
              <h3 className="text-2xl font-bold mb-4">What Does &quot;Sell My Data&quot; Mean?</h3>
              <p className="mb-4">
                The term &quot;sell my data&quot; refers to the selling of your personal information to third parties for their own marketing or commercial purposes. This does not include sharing your data with third parties for the operation of our services or for legal compliance.
              </p>
            </div>

            {/* Your Rights Under Applicable Laws */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Rights Under Applicable Laws</h3>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>California Residents:</strong> Under the CCPA, you have the right to opt-out of the sale of your personal information.
                </li>
                <li>
                  <strong>European Union Residents:</strong> Under the GDPR, you have the right to restrict processing and object to certain types of data processing.
                </li>
                <li>
                  <strong>Other Jurisdictions:</strong> Additional rights may be available under local data protection laws.
                </li>
              </ul>
            </div>

            {/* How to Submit a Request */}
            <div>
              <h3 className="text-2xl font-bold mb-4">How to Submit a Request</h3>
              <p className="mb-4">
                To exercise your rights, please contact us using one of the methods below:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@linconwavesinnovation.com" className="text-blue-500 underline">
                    privacy@linconwavesinnovation.com
                  </a>
                </li>
                <li>
                  <strong>Mail:</strong> 20-22 Wenlock Rd, London N1 7TA, GB
                </li>
                <li>
                  <strong>Support Page:</strong> Visit our{' '}
                  <a href="/support" className="text-blue-500 underline">
                    Support Page
                  </a>{' '}
                  to submit a request through our online form.
                </li>
              </ul>
            </div>

            {/* Verification Process */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Verification Process</h3>
              <p className="mb-4">
                To protect your data and privacy, we may ask you to verify your identity before processing your request. This helps ensure that your personal information is not disclosed to unauthorized individuals.
              </p>
            </div>

            {/* Response Time */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Response Time</h3>
              <p className="mb-4">
                We strive to respond to your requests within the time frames required by applicable laws. Typically, you can expect a response within 30 days of receiving your request.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Changes to This Policy</h3>
              <p className="mb-4">
                We may update our &quot;Do Not Sell My Data&quot; policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="mb-4">
                If you have any questions or concerns about this policy or our data practices, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>By mail: 20-22 Wenlock Rd, London N1 7TA, GB</li>
                <li>
                  By email:{' '}
                  <a href="mailto:privacy@linconwavesinnovation.com" className="text-blue-500 underline">
                    privacy@linconwavesinnovation.com
                  </a>
                </li>
                <li>
                  Through our{' '}
                  <a href="/support" className="text-blue-500 underline">
                    Support Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
