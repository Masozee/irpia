import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Working Papers - IRPIA Publications" },
    { name: "description", content: "IRPIA's working papers present preliminary research findings and ongoing studies on African policy issues." },
  ];
};

export default function WorkingPapers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-900/80 to-green-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="Working Papers"
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
              <span className="text-white font-medium">Working Papers</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Working Papers
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Preliminary research findings and ongoing studies exploring 
              emerging policy issues and innovative approaches to African development.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#059669' }}>
                About Working Papers
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                IRPIA&apos;s working papers series presents preliminary research findings, ongoing 
                studies, and innovative methodological approaches to understanding African policy 
                challenges. These publications provide early insights into emerging issues and 
                invite feedback from the research and policy community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Working papers often serve as the foundation for more comprehensive research 
                papers and policy briefs, allowing researchers to share initial findings, 
                test hypotheses, and engage with stakeholders during the research process. 
                They play a crucial role in advancing academic discourse and policy dialogue.
              </p>
              
              {/* Working Papers List */}
              <div className="space-y-6 mt-12">
                {workingPapers.map((paper, index) => (
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#059669' }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="px-2 py-1 text-xs font-medium text-white rounded"
                            style={{ backgroundColor: '#059669' }}
                          >
                            Working Paper
                          </span>
                          <span className="text-sm text-gray-500">{paper.date}</span>
                          <span className="text-sm text-gray-500">• {paper.pages} pages</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{paper.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {paper.author}</span>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-gray-400">{paper.downloads} downloads</span>
                            <button className="text-sm font-medium hover:underline" style={{ color: '#059669' }}>
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

const workingPapers = [
  {
    title: "Digital Learning Technologies in African Education: Opportunities and Challenges",
    excerpt: "Assessment of digital education initiatives and their potential for improving learning outcomes across Africa, with focus on infrastructure, accessibility, and pedagogical effectiveness.",
    author: "Dr. Fatima Al-Hassan",
    date: "November 2024",
    pages: "28",
    downloads: "892"
  },
  {
    title: "Renewable Energy Transition in West Africa: Policy Framework Analysis",
    excerpt: "Examination of renewable energy policies and their implementation across West African countries, analyzing barriers and opportunities for clean energy adoption.",
    author: "Prof. David Kamau",
    date: "October 2024",
    pages: "35",
    downloads: "1,156"
  },
  {
    title: "Civil Society and Democratic Participation in Post-Conflict Societies",
    excerpt: "Analysis of civil society organizations' roles in democratic consolidation and citizen engagement in post-conflict African states.",
    author: "Dr. Zainab Ibrahim",
    date: "September 2024",
    pages: "42",
    downloads: "734"
  },
  {
    title: "Urban Migration and Housing Policy in Sub-Saharan Africa",
    excerpt: "Preliminary findings on urbanization trends, migration patterns, and housing policy responses in major Sub-Saharan African cities.",
    author: "Dr. Samuel Nyong",
    date: "August 2024",
    pages: "31",
    downloads: "987"
  }
];