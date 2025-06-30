import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Reports - IRPIA Publications" },
    { name: "description", content: "IRPIA's comprehensive reports provide detailed analysis and evaluation of policies, programs, and development initiatives across Africa." },
  ];
};

export default function Reports() {
  const [selectedArea, setSelectedArea] = useState("All Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest First");

  const filteredReports = reports.filter(report => {
    const matchesArea = selectedArea === "All Research Areas" || report.researchArea === selectedArea;
    const matchesSearch = searchQuery === "" || 
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesArea && matchesSearch;
  });

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
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7c3aed' }}>
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Analysis</h3>
                  <p className="text-gray-600 text-sm">Detailed evaluation of policies, programs, and development initiatives</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc2626' }}>
                    <DocumentCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                  <p className="text-gray-600 text-sm">Rigorous methodology and data-driven findings and recommendations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakeholder Focused</h3>
                  <p className="text-gray-600 text-sm">Designed for policymakers, practitioners, and development partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#7c3aed' }}>Featured Report</h2>
            <p className="mt-4 text-gray-600">Our latest comprehensive analysis</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: '#7c3aed' }}>
                  Research Report
                </span>
                <span className="ml-2 text-sm text-gray-500">December 2024</span>
                <span className="ml-4 text-sm text-gray-500">• 78 pages</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Evaluation of Regional Security Cooperation in the Mano River Union
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Executive Summary</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    This comprehensive report evaluates the effectiveness of security cooperation mechanisms 
                    within the Mano River Union (MRU) over the past decade. Through extensive fieldwork, 
                    stakeholder interviews, and policy analysis, this study assesses progress made in 
                    regional security coordination and identifies key challenges and opportunities.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The evaluation examines institutional frameworks, cross-border cooperation initiatives, 
                    and capacity-building programs implemented since 2014. Key findings highlight significant 
                    achievements in information sharing and joint operations, while identifying persistent 
                    challenges in resource mobilization and political coordination.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Recommendations:</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Strengthen institutional capacity through enhanced funding mechanisms</li>
                      <li>Develop standardized protocols for cross-border security operations</li>
                      <li>Expand community-based security initiatives and early warning systems</li>
                      <li>Establish regular ministerial meetings for high-level coordination</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-4">Report Details</h5>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Lead Author:</span>
                        <p className="text-gray-600">Dr. Sarah Johnson</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Published:</span>
                        <p className="text-gray-600">December 2024</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Pages:</span>
                        <p className="text-gray-600">78 pages</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Research Period:</span>
                        <p className="text-gray-600">2023-2024</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#7c3aed' }}>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download Report
                      </button>
                      <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <ShareIcon className="mr-2 h-4 w-4" />
                        Share Report
                      </button>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold" style={{ color: '#7c3aed' }}>All Reports</h2>
            <span className="text-sm text-gray-600">{filteredReports.length} reports found</span>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reports by title, author, or keywords..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Downloaded</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
          
          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2 py-1 text-xs font-medium text-white rounded"
                      style={{ backgroundColor: report.researchArea === 'Security & Peacebuilding' ? '#dc2626' : report.researchArea === 'Environmental Sustainability' ? '#059669' : report.researchArea === 'Governance & Democracy' ? '#7c3aed' : '#2563eb' }}
                    >
                      {report.researchArea}
                    </span>
                    <span className="text-sm text-gray-500">{report.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      to={`/publications/${report.slug}`}
                      className="hover:text-purple-600 transition-colors"
                    >
                      {report.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{report.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {report.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{report.downloads} downloads</span>
                      <Link
                        to={`/publications/${report.slug}`}
                        className="text-sm font-medium hover:underline"
                        style={{ color: '#7c3aed' }}
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
          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ChartBarIcon className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#059669' }}>
                Commission a Report
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                IRPIA accepts commissions for evaluation reports, policy assessments, and program 
                reviews from governments, international organizations, and development partners. 
                Our experienced team provides rigorous, independent analysis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Report Types</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Policy evaluation reports</li>
                    <li>• Program assessment studies</li>
                    <li>• Institutional reviews</li>
                    <li>• Impact evaluations</li>
                    <li>• Baseline and endline studies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Process Timeline</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Initial consultation (1-2 weeks)</li>
                    <li>• Proposal development (2-3 weeks)</li>
                    <li>• Research and analysis (6-12 weeks)</li>
                    <li>• Draft review and validation (2-3 weeks)</li>
                    <li>• Final report and dissemination (1-2 weeks)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#7c3aed' }}>
                  Commission Report
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

const reports = [
  {
    title: "Evaluation of Regional Security Cooperation in the Mano River Union",
    excerpt: "Comprehensive assessment of security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region over the past decade.",
    author: "Dr. Sarah Johnson",
    date: "December 2024",
    researchArea: "Security & Peacebuilding",
    pages: "78",
    downloads: "1,567",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    slug: "security-cooperation-mano-river"
  },
  {
    title: "Climate Change Adaptation Assessment: Coastal Communities in West Africa",
    excerpt: "Detailed evaluation of climate adaptation strategies and their effectiveness in building resilience among vulnerable coastal communities across West Africa.",
    author: "Prof. Michael Osei",
    date: "November 2024",
    researchArea: "Environmental Sustainability",
    pages: "92",
    downloads: "2,134",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "climate-adaptation-assessment"
  },
  {
    title: "Education Sector Performance Review: Sierra Leone 2020-2024",
    excerpt: "Comprehensive review of education sector reforms, policy implementation, and learning outcomes in Sierra Leone's post-conflict education system reconstruction.",
    author: "Dr. Fatima Al-Hassan",
    date: "October 2024",
    researchArea: "Education & Public Health",
    pages: "156",
    downloads: "987",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    slug: "education-sector-review-sierra-leone"
  },
  {
    title: "Democratic Governance Assessment: Electoral Integrity in West Africa",
    excerpt: "Analysis of electoral processes, institutional capacity, and democratic consolidation across 15 West African countries with recommendations for strengthening governance.",
    author: "Prof. Catherine Mumbua",
    date: "September 2024",
    researchArea: "Governance & Democracy",
    pages: "124",
    downloads: "1,876",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    slug: "democratic-governance-assessment"
  },
  {
    title: "Economic Integration Evaluation: ECOWAS Trade Performance 2019-2023",
    excerpt: "Assessment of regional trade integration progress, barriers to commerce, and policy recommendations for enhancing economic cooperation within ECOWAS.",
    author: "Dr. David Kamau",
    date: "August 2024",
    researchArea: "Economic Development",
    pages: "98",
    downloads: "1,432",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    slug: "economic-integration-evaluation"
  }
];

// Icon components
function ChartBarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function DocumentCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
  );
}

function UserGroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
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