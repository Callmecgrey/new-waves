// components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" passHref>
                <a className="text-gray-400 hover:text-white">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/careers" passHref>
                <a className="text-gray-400 hover:text-white">
                  Career
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/linconwaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/linconwaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/linconwaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* Legal Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" passHref>
                <a className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" passHref>
                <a className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dont-sell-my-data" passHref>
                <a className="text-gray-400 hover:text-white">
                  Do not sell my data
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <a href="mailto:hello@linconwaves.com" className="hover:text-white">
                hello@linconwaves.com
              </a>
            </li>
            <li className="text-gray-400">
              <Link href="/support-center" passHref>
                <a className="hover:text-white">
                  Support center
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-gray-400 text-sm">
          © 2024 Linconwaves Innovation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
