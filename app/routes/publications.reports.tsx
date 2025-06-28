import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Reports - IRPIA Publications" },
    { name: "description", content: "IRPIA's comprehensive reports provide detailed analysis and evaluation of policies, programs, and development initiatives across Africa." },
  ];
};

export default function Reports() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900/80 to-purple-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="Reports"
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
              <span className="text-white font-medium">Reports</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Reports
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Comprehensive analysis and evaluation reports examining policies, 
              programs, and development initiatives across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#7c3aed' }}>
                About Reports
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                IRPIA&apos;s reports provide comprehensive analysis and evaluation of policies, 
                programs, and development initiatives across Africa. These publications offer 
                detailed assessments, lessons learned, and recommendations for improving 
                development outcomes and policy effectiveness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our reports serve multiple audiences including policymakers, development 
                practitioners, researchers, and international organizations. They combine 
                rigorous analysis with practical insights to support evidence-based 
                decision-making and program improvement.
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