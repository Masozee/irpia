import { Link } from "@remix-run/react";

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/IRPIA-logo.png"
                alt="IRPIA Logo"
                className="h-12 w-auto"
              />
              <h3 className="mt-3 text-lg font-semibold">IRPIA</h3>
              <p className="text-sm text-gray-400">
                Institute for Research and Policy Integration in Africa
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A pan-African think tank promoting evidence-based research and policy solutions 
              for Africa&apos;s development challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/irpia" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/irpia_org" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/irpia" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/research/security" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Security & Peacebuilding
                </Link>
              </li>
              <li>
                <Link to="/research/environment" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Environmental Sustainability
                </Link>
              </li>
              <li>
                <Link to="/research/education" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Education & Public Health
                </Link>
              </li>
              <li>
                <Link to="/research/governance" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Governance & Democracy
                </Link>
              </li>
              <li>
                <Link to="/research/economic" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Economic Development
                </Link>
              </li>
              <li>
                <Link to="/research/methods" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Research Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Publications</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/publications/policy-briefs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Policy Briefs
                </Link>
              </li>
              <li>
                <Link to="/publications/research-papers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link to="/publications/working-papers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Working Papers
                </Link>
              </li>
              <li>
                <Link to="/publications/reports" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/publications/book-series" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Book Series
                </Link>
              </li>
              <li>
                <Link to="/publications/newsletter" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About IRPIA
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div>
              <h4 className="text-sm font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>84 Bato, Regent</p>
                <p>Freetown, Sierra Leone</p>
                <p>
                  <a href="mailto:info@irpia.org" className="hover:text-white transition-colors">
                    info@irpia.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest research insights and policy updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B40D05] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white transition-colors duration-200"
                style={{ backgroundColor: '#B40D05' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B0A04'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B40D05'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            © 2024 Institute for Research and Policy Integration in Africa (IRPIA). All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 