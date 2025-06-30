import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Working Papers - IRPIA Publications" },
    { name: "description", content: "IRPIA's working papers present preliminary research findings and ongoing studies on African policy issues." },
  ];
};

export default function WorkingPapers() {
  const [selectedArea, setSelectedArea] = useState("All Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest First");

  const filteredPapers = workingPapers.filter(paper => {
    const matchesArea = selectedArea === "All Research Areas" || paper.researchArea === selectedArea;
    const matchesSearch = searchQuery === "" || 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesArea && matchesSearch;
  });

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
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                    <ClipboardDocumentIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Preliminary Findings</h3>
                  <p className="text-gray-600 text-sm">Early-stage research insights and emerging policy considerations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc2626' }}>
                    <UsersIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Feedback</h3>
                  <p className="text-gray-600 text-sm">Inviting input from researchers, practitioners, and policymakers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2563eb' }}>
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">Exploring new approaches and methodologies in policy research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Working Paper */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#059669' }}>Featured Working Paper</h2>
            <p className="mt-4 text-gray-600">Latest preliminary research findings</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
                  alt="Featured Working Paper"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: '#059669' }}>
                    Working Paper
                  </span>
                  <span className="ml-2 text-sm text-gray-500">December 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Learning Technologies in African Education: Opportunities and Challenges
                </h3>
                <p className="text-gray-600 mb-6">
                  This working paper presents preliminary findings from an assessment of digital education 
                  initiatives across Africa, examining their potential for improving learning outcomes. 
                  The study focuses on infrastructure requirements, accessibility challenges, and 
                  pedagogical effectiveness of technology-enhanced learning approaches.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By Dr. Fatima Al-Hassan</span>
                  <Link
                    to="/publications/digital-learning-technologies"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200" 
                    style={{ backgroundColor: '#059669' }}
                  >
                    Read Full Paper
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" style={{ color: '#059669' }}>All Working Papers</h2>
            <span className="text-sm text-gray-600">{filteredPapers.length} papers found</span>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search working papers by title, author, or keywords..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>All Research Areas</option>
                <option>Security & Peacebuilding</option>
                <option>Environmental Sustainability</option>
                <option>Education & Public Health</option>
                <option>Governance & Democracy</option>
                <option>Economic Development</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Downloaded</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
          
          {/* Working Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2 py-1 text-xs font-medium text-white rounded"
                      style={{ backgroundColor: paper.researchArea === 'Education & Public Health' ? '#2563eb' : paper.researchArea === 'Environmental Sustainability' ? '#059669' : paper.researchArea === 'Governance & Democracy' ? '#7c3aed' : '#059669' }}
                    >
                      {paper.researchArea}
                    </span>
                    <span className="text-sm text-gray-500">{paper.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      to={`/publications/${paper.slug}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {paper.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{paper.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {paper.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{paper.downloads} downloads</span>
                      <Link
                        to={`/publications/${paper.slug}`}
                        className="text-sm font-medium hover:underline"
                        style={{ color: '#059669' }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ClipboardDocumentIcon className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No working papers found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>
                Submission Guidelines
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We welcome working paper submissions presenting preliminary research findings, 
                methodological innovations, and exploratory studies relevant to African policy issues. 
                Working papers undergo editorial review and provide opportunities for early feedback.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Format Requirements</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 4,000-8,000 words</li>
                    <li>• Executive summary (max 150 words)</li>
                    <li>• Methodology section</li>
                    <li>• Preliminary findings</li>
                    <li>• Future research directions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Process</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Editorial review (1-2 weeks)</li>
                    <li>• Feedback and revision (2-3 weeks)</li>
                    <li>• Final review (1 week)</li>
                    <li>• Publication (1-2 weeks)</li>
                    <li>• Open access and feedback invitation</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#059669' }}>
                  Submit Working Paper
                  <PaperAirplaneIcon className="ml-2 h-5 w-5" />
                </button>
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
    researchArea: "Education & Public Health",
    pages: "28",
    downloads: "892",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    slug: "digital-learning-technologies"
  },
  {
    title: "Renewable Energy Transition in West Africa: Policy Framework Analysis",
    excerpt: "Examination of renewable energy policies and their implementation across West African countries, analyzing barriers and opportunities for clean energy adoption.",
    author: "Prof. David Kamau",
    date: "October 2024",
    researchArea: "Environmental Sustainability",
    pages: "35",
    downloads: "1,156",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "renewable-energy-west-africa"
  },
  {
    title: "Civil Society and Democratic Participation in Post-Conflict Societies",
    excerpt: "Analysis of civil society organizations' roles in democratic consolidation and citizen engagement in post-conflict African states.",
    author: "Dr. Zainab Ibrahim",
    date: "September 2024",
    researchArea: "Governance & Democracy",
    pages: "42",
    downloads: "734",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    slug: "civil-society-democratic-participation"
  },
  {
    title: "Urban Migration and Housing Policy in Sub-Saharan Africa",
    excerpt: "Preliminary findings on urbanization trends, migration patterns, and housing policy responses in major Sub-Saharan African cities.",
    author: "Dr. Samuel Nyong",
    date: "August 2024",
    researchArea: "Economic Development",
    pages: "31",
    downloads: "987",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    slug: "urban-migration-housing-policy"
  }
];

// Icon components
function ClipboardDocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function LightBulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478a12.06 12.06 0 014.5 0m-8.25.189c.076.394.06.79-.016 1.17a4.006 4.006 0 01-.988 1.81c-.573.598-1.175 1.085-1.746 1.49M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function PaperAirplaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}