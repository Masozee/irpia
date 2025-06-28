import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Book Series - IRPIA Publications" },
    { name: "description", content: "IRPIA's book series features scholarly publications and edited volumes on African development and policy issues." },
  ];
};

export default function BookSeries() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-900/80 to-orange-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="Book Series"
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
              <span className="text-white font-medium">Book Series</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Book Series
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Scholarly publications and edited volumes advancing knowledge 
              on African development, policy, and governance issues.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ea580c' }}>
                About Book Series
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                IRPIA&apos;s book series publishes scholarly monographs, edited volumes, 
                and collaborative works that advance understanding of African development 
                challenges and solutions. These publications provide comprehensive analysis 
                and innovative perspectives on critical policy issues.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our book series serves as a platform for established and emerging scholars 
                to contribute to academic discourse and policy debates. Publications undergo 
                rigorous peer review and editorial oversight to ensure academic excellence 
                and policy relevance.
              </p>
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