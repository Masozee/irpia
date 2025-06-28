import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Newsletter - IRPIA Publications" },
    { name: "description", content: "IRPIA's newsletter provides regular updates on research activities, publications, events, and policy developments across Africa." },
  ];
};

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900/80 to-gray-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <div className="flex items-center mb-4">
              <Link to="/publications" className="text-gray-300 hover:text-white transition-colors">
                Publications
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-white font-medium">Newsletter</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Newsletter
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Stay informed with regular updates on our research activities, 
              publications, events, and policy developments across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#374151' }}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest updates on IRPIA research, publications, and events 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button 
                className="px-6 py-3 text-white font-medium rounded-md transition-colors duration-200"
                style={{ backgroundColor: '#B40D05' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research', hasMegaMenu: true },
  { name: 'Publications', href: '/publications', hasMegaMenu: true },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];