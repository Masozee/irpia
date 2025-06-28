import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Economic Development Research - IRPIA" },
    { name: "description", content: "IRPIA's research on trade policies, economic integration, and sustainable development strategies in Africa." },
  ];
};

export default function EconomicResearch() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-900/80 to-orange-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="Economic Development"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <div className="flex items-center mb-4">
              <Link to="/research" className="text-gray-300 hover:text-white transition-colors">
                Research
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-white font-medium">Economic Development</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Economic Development
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Advancing sustainable economic growth through research on trade policies, 
              regional integration, and inclusive development strategies across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#B40D05' }}>
                Research Overview
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Our Economic Development research program examines the complex dynamics of 
                economic growth, poverty reduction, and sustainable development in Africa. 
                We focus on evidence-based analysis of economic policies, trade relationships, 
                and development strategies that promote inclusive and sustainable growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through rigorous economic analysis and policy research, we investigate 
                regional economic integration, trade policies, financial sector development, 
                and entrepreneurship. Our work supports policymakers, development practitioners, 
                and business leaders in creating policies that foster economic transformation 
                and social inclusion across the continent.
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