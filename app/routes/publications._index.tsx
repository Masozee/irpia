import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Publications - IRPIA" },
    { name: "description", content: "Browse IRPIA's comprehensive collection of publications including policy briefs, research papers, working papers, reports, and books." },
  ];
};

export default function Publications() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedArea, setSelectedArea] = useState("All Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest First");

  const filteredPublications = allPublications.filter(pub => {
    const matchesType = selectedType === "All Types" || pub.type === selectedType;
    const matchesArea = selectedArea === "All Research Areas" || pub.researchArea === selectedArea;
    const matchesSearch = searchQuery === "" || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900/80 to-blue-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="IRPIA Publications"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              IRPIA Publications
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Explore our comprehensive collection of evidence-based research, policy analysis, 
              and scholarly publications addressing Africa&apos;s development challenges.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/publications/policy-briefs"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-900 bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                Policy Briefs
              </Link>
              <Link
                to="/publications/research-papers"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Research Papers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publication Types</h2>
            <p className="text-lg text-gray-600">Discover our diverse range of publications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicationTypes.map((type, index) => (
              <Link
                key={index}
                to={type.href}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: type.color }}
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {type.name}
                    </h3>
                    <span className="text-sm text-gray-500">{type.count} publications</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Publications</h2>
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search publications by title, author, or keywords..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Types</option>
                <option>Policy Brief</option>
                <option>Research Paper</option>
                <option>Working Paper</option>
                <option>Report</option>
                <option>Book</option>
              </select>
              
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Downloaded</option>
                <option>Alphabetical</option>
              </select>
            </div>
            
            {/* Results Count */}
            <div className="text-sm text-gray-600 mb-6">
              Showing {filteredPublications.length} of {allPublications.length} publications
            </div>
          </div>
          
          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2 py-1 text-xs font-medium text-white rounded"
                      style={{ backgroundColor: getTypeColor(publication.type) }}
                    >
                      {publication.type}
                    </span>
                    <span className="text-sm text-gray-500">{publication.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      to={`/publications/${publication.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {publication.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{publication.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {publication.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{publication.downloads} downloads</span>
                      <Link
                        to={`/publications/${publication.slug}`}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {filteredPublications.length > 12 && (
            <div className="mt-12 flex items-center justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Previous</button>
                <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">1</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">2</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">3</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Next</button>
              </nav>
            </div>
          )}
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

const publicationTypes = [
  {
    name: "Policy Briefs",
    count: 24,
    description: "Concise analysis and actionable recommendations for policymakers",
    color: "#dc2626",
    icon: DocumentTextIcon,
    href: "/publications/policy-briefs"
  },
  {
    name: "Research Papers",
    count: 18,
    description: "Peer-reviewed academic research on African policy issues",
    color: "#2563eb",
    icon: AcademicCapIcon,
    href: "/publications/research-papers"
  },
  {
    name: "Working Papers",
    count: 12,
    description: "Preliminary research findings and ongoing studies",
    color: "#059669",
    icon: ClipboardDocumentIcon,
    href: "/publications/working-papers"
  },
  {
    name: "Reports",
    count: 8,
    description: "Comprehensive analysis and evaluation reports",
    color: "#7c3aed",
    icon: ChartBarIcon,
    href: "/publications/reports"
  },
  {
    name: "Book Series",
    count: 5,
    description: "Scholarly publications and edited volumes",
    color: "#ea580c",
    icon: BookOpenIcon,
    href: "/publications/books"
  },
  {
    name: "Newsletter",
    count: 36,
    description: "Regular updates on research and activities",
    color: "#374151",
    icon: NewspaperIcon,
    href: "/publications/newsletter"
  }
];

const allPublications = [
  {
    title: "Democratic Governance and Electoral Integrity in West Africa",
    excerpt: "Analysis of democratic institutions and electoral processes across West African nations, with policy recommendations for strengthening democratic governance.",
    type: "Policy Brief",
    researchArea: "Governance & Democracy",
    author: "Dr. Catherine Mumbua",
    date: "December 2024",
    downloads: "2,134",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    slug: "democratic-governance-west-africa"
  },
  {
    title: "Climate Adaptation Strategies for Coastal Communities",
    excerpt: "Comprehensive research on climate change impacts on coastal communities in Sierra Leone and adaptive strategies for resilience building.",
    type: "Research Paper",
    researchArea: "Environmental Sustainability",
    author: "Dr. Michael Osei",
    date: "November 2024",
    downloads: "1,876",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "climate-adaptation-coastal"
  },
  {
    title: "Education Policy Reform in Post-Conflict Settings",
    excerpt: "Examining education system reconstruction and policy reforms in post-conflict African societies with focus on Sierra Leone and Liberia.",
    type: "Working Paper",
    researchArea: "Education & Public Health",
    author: "Dr. Amina Diallo",
    date: "October 2024",
    downloads: "1,432",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    slug: "education-policy-post-conflict"
  },
  {
    title: "Regional Security Cooperation in the Mano River Union",
    excerpt: "Assessment of security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region.",
    type: "Report",
    researchArea: "Security & Peacebuilding",
    author: "Dr. Sarah Johnson",
    date: "September 2024",
    downloads: "987",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    slug: "security-cooperation-mano-river"
  },
  {
    title: "Women's Participation in Peace Processes",
    excerpt: "Analysis of women's roles in peacebuilding and recommendations for enhancing their participation in formal peace processes.",
    type: "Policy Brief",
    researchArea: "Security & Peacebuilding",
    author: "Dr. Aminata Diallo",
    date: "August 2024",
    downloads: "1,567",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    slug: "women-participation-peace"
  },
  {
    title: "Sustainable Water Management in Sub-Saharan Africa",
    excerpt: "Policy recommendations for improving water access, management, and conservation across sub-Saharan African communities.",
    type: "Policy Brief",
    researchArea: "Environmental Sustainability",
    author: "Dr. Grace Nakimuli",
    date: "July 2024",
    downloads: "1,245",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    slug: "sustainable-water-management"
  }
];

function getTypeColor(type: string) {
  const colors: { [key: string]: string } = {
    "Policy Brief": "#dc2626",
    "Research Paper": "#2563eb", 
    "Working Paper": "#059669",
    "Report": "#7c3aed",
    "Book": "#ea580c",
    "Newsletter": "#374151"
  };
  return colors[type] || "#6b7280";
}

// Icon components
function DocumentTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function AcademicCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0012 20.904a48.627 48.627 0 008.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function ClipboardDocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function NewspaperIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
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