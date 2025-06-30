import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Policy Briefs - IRPIA Publications" },
    { name: "description", content: "IRPIA's policy briefs provide concise analysis and evidence-based recommendations for policymakers across Africa." },
  ];
};

export default function PolicyBriefs() {
  const [selectedArea, setSelectedArea] = useState("All Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest First");

  const filteredBriefs = policyBriefs.filter(brief => {
    const matchesArea = selectedArea === "All Research Areas" || brief.researchArea === selectedArea;
    const matchesSearch = searchQuery === "" || 
      brief.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brief.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brief.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-red-900/80 to-red-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="Policy Briefs"
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
              <span className="text-white font-medium">Policy Briefs</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Policy Briefs
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Concise, evidence-based analysis and actionable recommendations 
              for policymakers addressing Africa&apos;s development challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#B40D05' }}>
                About Policy Briefs
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                IRPIA&apos;s policy briefs translate complex research findings into accessible, 
                actionable insights for policymakers, practitioners, and stakeholders across Africa. 
                Each brief presents evidence-based analysis with clear policy recommendations 
                designed to inform decision-making and drive positive change.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B40D05' }}>
                    <DocumentIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Concise Format</h3>
                  <p className="text-gray-600 text-sm">4-6 page summaries of key research findings and policy implications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#407c0f' }}>
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                  <p className="text-gray-600 text-sm">Grounded in rigorous research and empirical analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2563eb' }}>
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable</h3>
                  <p className="text-gray-600 text-sm">Clear, practical recommendations for policy implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Policy Brief */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#B40D05' }}>Featured Policy Brief</h2>
            <p className="mt-4 text-gray-600">Our latest policy brief addressing critical development challenges</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop"
                  alt="Featured Policy Brief"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: '#B40D05' }}>
                    Policy Brief
                  </span>
                  <span className="ml-2 text-sm text-gray-500">December 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Democratic Governance and Electoral Integrity in West Africa
                </h3>
                <p className="text-gray-600 mb-6">
                  This policy brief examines the state of democratic governance across West African nations, 
                  analyzing electoral processes, institutional capacity, and governance challenges. It provides 
                  evidence-based recommendations for strengthening democratic institutions and promoting 
                  electoral integrity in the region.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By Dr. Catherine Mumbua</span>
                  <Link
                    to="/publications/democratic-governance-west-africa"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-200" 
                    style={{ backgroundColor: '#407c0f' }}
                  >
                    Read Full Brief
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
            <h2 className="text-3xl font-bold" style={{ color: '#B40D05' }}>All Policy Briefs</h2>
            <span className="text-sm text-gray-600">{filteredBriefs.length} briefs found</span>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search policy briefs by title, author, or keywords..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Downloaded</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
          
          {/* Policy Briefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBriefs.map((brief, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={brief.image}
                  alt={brief.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2 py-1 text-xs font-medium text-white rounded"
                      style={{ backgroundColor: brief.researchArea === 'Security' ? '#B40D05' : brief.researchArea === 'Environment' ? '#407c0f' : '#2563eb' }}
                    >
                      {brief.researchArea}
                    </span>
                    <span className="text-sm text-gray-500">{brief.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      to={`/publications/${brief.slug}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {brief.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{brief.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {brief.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{brief.downloads} downloads</span>
                      <Link
                        to={`/publications/${brief.slug}`}
                        className="text-sm font-medium hover:underline"
                        style={{ color: '#B40D05' }}
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
          {filteredBriefs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <DocumentIcon className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No policy briefs found</h3>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#407c0f' }}>
                Submission Guidelines
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We welcome policy brief submissions from researchers, practitioners, and experts 
                working on Africa-related policy issues. All submissions undergo peer review 
                and editorial oversight to ensure quality and policy relevance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Format Requirements</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 4-6 pages in length</li>
                    <li>• Executive summary (max 200 words)</li>
                    <li>• Clear policy recommendations</li>
                    <li>• Evidence-based analysis</li>
                    <li>• References and citations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Process</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Initial editorial review (2 weeks)</li>
                    <li>• Peer review process (4-6 weeks)</li>
                    <li>• Author revisions (2-3 weeks)</li>
                    <li>• Final editorial review (1 week)</li>
                    <li>• Publication and dissemination</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-200" style={{ backgroundColor: '#B40D05' }}>
                  Submit Policy Brief
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

const policyBriefs = [
  {
    title: "Women's Participation in Peace Processes: Lessons from Sierra Leone",
    excerpt: "Analysis of women's roles in peacebuilding and recommendations for enhancing their participation in formal peace processes across West Africa.",
    author: "Dr. Aminata Diallo",
    date: "November 2024",
    researchArea: "Security",
    downloads: "1,245",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    slug: "women-participation-peace"
  },
  {
    title: "Sustainable Water Management in Sub-Saharan Africa",
    excerpt: "Policy recommendations for improving water access, management, and conservation across sub-Saharan African communities.",
    author: "Dr. Grace Nakimuli",
    date: "October 2024",
    researchArea: "Environment",
    downloads: "987",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "sustainable-water-management"
  },
  {
    title: "Strengthening Primary Healthcare Systems in Rural West Africa",
    excerpt: "Evidence-based strategies for improving healthcare delivery and access in rural communities across West Africa.",
    author: "Prof. John Kwabena",
    date: "September 2024",
    researchArea: "Health",
    downloads: "1,567",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    slug: "strengthening-primary-healthcare"
  },
  {
    title: "Fighting Corruption in African Governance: A Policy Framework",
    excerpt: "Comprehensive framework for anti-corruption policies and governance transparency measures across African institutions.",
    author: "Dr. Kwame Asante",
    date: "August 2024",
    researchArea: "Governance",
    downloads: "2,134",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    slug: "fighting-corruption-governance"
  },
  {
    title: "Climate Adaptation Strategies for Coastal Communities",
    excerpt: "Policy recommendations for building climate resilience in vulnerable coastal communities across Africa.",
    author: "Dr. Michael Osei",
    date: "July 2024",
    researchArea: "Environment",
    downloads: "1,876",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "climate-adaptation-coastal"
  },
  {
    title: "Digital Learning Technologies in African Education",
    excerpt: "Assessment of digital education opportunities and policy recommendations for educational technology integration.",
    author: "Dr. Fatima Al-Hassan",
    date: "June 2024",
    researchArea: "Education",
    downloads: "1,432",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    slug: "digital-learning-technologies"
  }
];

// Icon components
function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function ChartBarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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

function PaperAirplaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}