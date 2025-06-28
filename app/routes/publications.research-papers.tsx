import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Research Papers - IRPIA Publications" },
    { name: "description", content: "IRPIA's peer-reviewed research papers providing in-depth academic analysis on African policy issues." },
  ];
};

export default function ResearchPapers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900/80 to-blue-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="Research Papers"
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
              <span className="text-white font-medium">Research Papers</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Research Papers
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Peer-reviewed academic research providing in-depth analysis 
              on critical policy issues affecting Africa&apos;s development.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>
                About Research Papers
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                IRPIA&apos;s research papers present comprehensive, peer-reviewed academic analysis 
                on critical policy issues across Africa. These publications contribute to scholarly 
                knowledge while providing evidence-based insights for policy development and 
                implementation across the continent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our research papers undergo rigorous peer review and editorial oversight, ensuring 
                high academic standards and methodological rigor. They serve as foundational 
                research for policy briefs, reports, and other publications while contributing 
                to the broader academic discourse on African development.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2563eb' }}>
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Peer-Reviewed</h3>
                  <p className="text-gray-600 text-sm">Rigorous academic review process ensuring quality and credibility</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#059669' }}>
                    <MagnifyingGlassIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">In-Depth Analysis</h3>
                  <p className="text-gray-600 text-sm">Comprehensive examination of complex policy issues and challenges</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc2626' }}>
                    <GlobeAltIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Africa-Focused</h3>
                  <p className="text-gray-600 text-sm">Dedicated to African contexts, challenges, and solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Paper */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#2563eb' }}>Featured Research Paper</h2>
            <p className="mt-4 text-gray-600">Our latest peer-reviewed research contribution</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: '#2563eb' }}>
                  Research Paper
                </span>
                <span className="ml-2 text-sm text-gray-500">December 2024</span>
                <span className="ml-4 text-sm text-gray-500">• 45 pages</span>
                <span className="ml-4 text-sm text-gray-500">• Peer-reviewed</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Regional Security Cooperation in the Mano River Union: Challenges and Opportunities
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Abstract</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    This research paper provides a comprehensive assessment of security cooperation mechanisms 
                    within the Mano River Union (MRU) and their effectiveness in promoting peace and stability 
                    in the region. Through qualitative analysis of policy documents, institutional frameworks, 
                    and interviews with key stakeholders, this study examines the evolution of security 
                    cooperation since the end of civil conflicts in Sierra Leone, Liberia, and Côte d&apos;Ivoire.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The paper identifies significant achievements in cross-border security coordination while 
                    highlighting persistent challenges including resource constraints, institutional capacity 
                    limitations, and political disagreements. Key findings suggest that while the MRU framework 
                    has contributed to regional stability, enhanced coordination mechanisms and increased 
                    resource allocation are necessary for sustained peace and security.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">Keywords:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Regional Security', 'Mano River Union', 'West Africa', 'Peacebuilding', 'Institutional Cooperation'].map((keyword) => (
                        <span key={keyword} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-4">Publication Details</h5>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Author:</span>
                        <p className="text-gray-600">Dr. Sarah Johnson</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Published:</span>
                        <p className="text-gray-600">December 15, 2024</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Pages:</span>
                        <p className="text-gray-600">45 pages</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Citation:</span>
                        <p className="text-gray-600 text-xs">Johnson, S. (2024). Regional Security Cooperation in the Mano River Union. IRPIA Research Papers, 2024(4).</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#2563eb' }}>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download PDF
                      </button>
                      <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <ShareIcon className="mr-2 h-4 w-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#2563eb' }}>All Research Papers</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>All Research Areas</option>
                <option>Security & Peacebuilding</option>
                <option>Environmental Sustainability</option>
                <option>Education & Public Health</option>
                <option>Governance & Democracy</option>
                <option>Economic Development</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Cited</option>
                <option>Most Downloaded</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-6">
                    <div className="flex items-center mb-3">
                      <span 
                        className="px-2 py-1 text-xs font-medium text-white rounded"
                        style={{ backgroundColor: paper.researchArea === 'Security' ? '#dc2626' : paper.researchArea === 'Environment' ? '#059669' : paper.researchArea === 'Governance' ? '#7c3aed' : '#2563eb' }}
                      >
                        {paper.researchArea}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{paper.date}</span>
                      <span className="ml-4 text-sm text-gray-500">• {paper.pages} pages</span>
                      <span className="ml-4 text-sm text-gray-500">• {paper.citations} citations</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{paper.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">By {paper.author}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{paper.downloads} downloads</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-sm font-medium hover:underline" style={{ color: '#2563eb' }}>
                          View Abstract
                        </button>
                        <button className="text-sm font-medium hover:underline" style={{ color: '#059669' }}>
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-24 h-32 bg-gray-100 rounded border flex items-center justify-center">
                    <DocumentTextIcon className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#059669' }}>
                Submission Guidelines
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We invite submissions of original research papers addressing policy-relevant 
                issues in African development. All submissions undergo double-blind peer review 
                to ensure academic rigor and quality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Manuscript Requirements</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 8,000-12,000 words (including references)</li>
                    <li>• Abstract (max 250 words)</li>
                    <li>• Keywords (5-7 terms)</li>
                    <li>• Double-spaced, 12pt font</li>
                    <li>• APA citation style</li>
                    <li>• Anonymous submission for peer review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Timeline</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Initial review (2-3 weeks)</li>
                    <li>• Peer review process (8-12 weeks)</li>
                    <li>• Author revisions (4-6 weeks)</li>
                    <li>• Final review (2-3 weeks)</li>
                    <li>• Publication (2-4 weeks)</li>
                    <li>• Open access publication</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#2563eb' }}>
                  Submit Research Paper
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

const researchPapers = [
  {
    title: "Climate Adaptation Strategies for Coastal Communities in Sierra Leone",
    abstract: "This study examines climate change impacts on coastal communities and evaluates adaptive strategies for building resilience. Using mixed-methods research, we analyze vulnerability patterns and community responses to sea-level rise, erosion, and extreme weather events.",
    author: "Dr. Michael Osei",
    date: "November 2024",
    researchArea: "Environment",
    pages: "38",
    citations: "12",
    downloads: "2,456",
  },
  {
    title: "Education Policy Reform in Post-Conflict Settings: Evidence from Sierra Leone and Liberia",
    abstract: "This comparative analysis examines education system reconstruction in post-conflict African societies, focusing on policy reforms, institutional rebuilding, and lessons learned from Sierra Leone and Liberia's experiences.",
    author: "Dr. Amina Diallo",
    date: "October 2024",
    researchArea: "Education",
    pages: "52",
    citations: "8",
    downloads: "1,987",
  },
  {
    title: "Democratic Consolidation and Electoral Integrity in West Africa: Trends and Challenges",
    abstract: "This paper analyzes democratic institutions and electoral processes across West African nations, examining trends in electoral integrity, institutional capacity, and challenges to democratic consolidation.",
    author: "Prof. Catherine Mumbua",
    date: "September 2024",
    researchArea: "Governance",
    pages: "47",
    citations: "15",
    downloads: "3,124",
  },
  {
    title: "Security Sector Reform in Post-Conflict Guinea-Bissau: Lessons and Challenges",
    abstract: "This study evaluates security sector reform efforts in Guinea-Bissau, analyzing the impact on democratic consolidation, institutional development, and stability in the post-conflict period.",
    author: "Prof. Emmanuel Kwame",
    date: "August 2024",
    researchArea: "Security",
    pages: "41",
    citations: "6",
    downloads: "1,678",
  }
];

// Icon components
function AcademicCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0012 20.904a48.627 48.627 0 008.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function MagnifyingGlassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function GlobeAltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm8.716-6.747a9.004 9.004 0 00-.716-1.486c-1.737-3.103-4.81-5.267-8-5.267s-6.263 2.164-8 5.267a9.004 9.004 0 00-.716 1.486M12 21l8.716-6.747M12 21l-8.716-6.747" />
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

function DocumentTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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