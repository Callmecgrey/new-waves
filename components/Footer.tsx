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
              <Link href="/about" className="text-gray-400 hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-400 hover:text-white">
                Career
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
                href="https://www.github.com/linconwaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>
            </li>
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
                href="https://www.x.com/linconwaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                x.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/linconwaves"
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
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/dont-sell-my-data"
                className="text-gray-400 hover:text-white"
              >
                Do not sell my data
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hello@linconwaves.com"
                className="text-gray-400 hover:text-white"
              >
                hello@linconwaves.com
              </a>
            </li>
            <li>
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support center
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
