import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Research Methods - IRPIA" },
    { name: "description", content: "IRPIA's research methodologies, collaborative approaches, and best practices for evidence-based policy research in Africa." },
  ];
};

export default function ResearchMethods() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900/80 to-gray-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="Research Methods"
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
              <span className="text-white font-medium">Research Methods</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Research Methods
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Advancing rigorous research methodologies and collaborative approaches 
              for evidence-based policy research across Africa.
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
                Our Research Methods program focuses on developing and applying rigorous 
                methodological approaches to policy research in Africa. We emphasize 
                collaborative research practices, capacity building, and the integration 
                of diverse research methodologies to address complex policy challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work to establish best practices for evidence-based policy research, 
                promote research collaboration across institutions, and build local 
                research capacity throughout Africa. Our methodological approaches combine 
                quantitative and qualitative methods, participatory research, and 
                innovative data collection techniques tailored to the African context.
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