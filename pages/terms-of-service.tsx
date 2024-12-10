// pages/terms-of-service.tsx

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Linconwaves Innovation's website and services."
        />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-60 bg-gradient-to-b from-black to-gray-900 text-center flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Terms of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Service
            </span>
          </h1>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12 text-gray-300 space-y-8">
            {/* Last Updated */}
            <div>
              <p className="text-sm">
                <strong>Last updated:</strong> December 10, 2024
              </p>
            </div>

            {/* Introduction */}
            <div>
              <p>
                Welcome to Linconwaves Innovation Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms of Service
                (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website located at{' '}
                <a href="https://www.linconwavesinnovation.com" className="text-blue-500 underline">
                  https://www.linconwavesinnovation.com
                </a>{' '}
                and our in-house applications (collectively, the &quot;Service&quot;).
              </p>
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any
                part of the terms then you may not access the Service.
              </p>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Table of Contents</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="#definitions" className="text-blue-500 underline">
                    1. Definitions
                  </a>
                </li>
                <li>
                  <a href="#use-of-service" className="text-blue-500 underline">
                    2. Use of Service
                  </a>
                </li>
                <li>
                  <a href="#user-accounts" className="text-blue-500 underline">
                    3. User Accounts
                  </a>
                </li>
                <li>
                  <a href="#intellectual-property" className="text-blue-500 underline">
                    4. Intellectual Property
                  </a>
                </li>
                <li>
                  <a href="#termination" className="text-blue-500 underline">
                    5. Termination
                  </a>
                </li>
                <li>
                  <a href="#limitation-of-liability" className="text-blue-500 underline">
                    6. Limitation of Liability
                  </a>
                </li>
                <li>
                  <a href="#indemnification" className="text-blue-500 underline">
                    7. Indemnification
                  </a>
                </li>
                <li>
                  <a href="#governing-law" className="text-blue-500 underline">
                    8. Governing Law
                  </a>
                </li>
                <li>
                  <a href="#dispute-resolution" className="text-blue-500 underline">
                    9. Dispute Resolution
                  </a>
                </li>
                <li>
                  <a href="#changes-to-terms" className="text-blue-500 underline">
                    10. Changes to Terms
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="text-blue-500 underline">
                    11. Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Definitions */}
            <div id="definitions">
              <h2 className="text-3xl font-bold mb-4">1. Definitions</h2>
              <p>
                <strong>Service</strong> refers to the website and in-house applications provided by the Company.
              </p>
              <p>
                <strong>Terms</strong> refers to these Terms of Service that govern your use of the Service.
              </p>
              <p>
                <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </p>
            </div>

            {/* Use of Service */}
            <div id="use-of-service">
              <h2 className="text-3xl font-bold mb-4">2. Use of Service</h2>
              <p>
                You agree to use the Service only for purposes that are permitted by these Terms and any applicable laws,
                regulations, or generally accepted practices in the relevant jurisdictions.
              </p>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Use the Service for any unlawful purpose or in violation of any local, state, national, or international law.</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service, or which, as determined by us, may harm the Company or users of the Service or expose them to liability.</li>
                <li>Use the Service in any manner that could disable, overburden, damage, or impair the Service.</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose without our express written permission.</li>
                <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div id="user-accounts">
              <h2 className="text-3xl font-bold mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual-property">
              <h2 className="text-3xl font-bold mb-4">4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of
                Linconwaves Innovation Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
              </p>
            </div>

            {/* Termination */}
            <div id="termination">
              <h2 className="text-3xl font-bold mb-4">5. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div id="limitation-of-liability">
              <h2 className="text-3xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Linconwaves Innovation Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Use or inability to use the Service;</li>
                <li>Unauthorized access to or alteration of your transmissions or data;</li>
                <li>Statements or conduct of any third party on the Service;</li>
                <li>Any other matter relating to the Service.</li>
              </ul>
              <p>
                To the maximum extent permitted by applicable law, the aggregate liability of the Company and its suppliers under
                any provision of these Terms and your exclusive remedy for all of the foregoing shall not exceed $100. If you are
                dissatisfied with any portion of the Service, your sole and exclusive remedy is to discontinue using the Service.
              </p>
            </div>

            {/* Indemnification */}
            <div id="indemnification">
              <h2 className="text-3xl font-bold mb-4">7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Linconwaves Innovation Ltd and its licensee and licensors,
                and their employees, contractors, agents, officers, and directors, from and against any and all claims,
                damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s
                fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password,
                or b) a breach of these Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div id="governing-law">
              <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div id="dispute-resolution">
              <h2 className="text-3xl font-bold mb-4">9. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or related to these Terms and/or the Service shall be resolved first through amicable negotiations
                between the parties. If a resolution cannot be reached through negotiations, the dispute shall be settled by binding arbitration
                in accordance with the rules of the United Kingdom Arbitration Association.
              </p>
              <p>
                The arbitration shall be conducted in the English language, and the venue for arbitration shall be London, United Kingdom.
              </p>
            </div>

            {/* Changes to Terms */}
            <div id="changes-to-terms">
              <h2 className="text-3xl font-bold mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </div>

            {/* Contact Us */}
            <div id="contact-us">
              <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>By mail: 20 22 Wenlock Rd, London N1 7TA GB</li>
                <li>
                  By email: <a href="mailto:contact@linconwavesinnovation.com" className="text-blue-500 underline">contact@linconwavesinnovation.com</a>
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
