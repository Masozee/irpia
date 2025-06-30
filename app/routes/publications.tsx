import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Publications & News - IRPIA" },
    { name: "description", content: "Explore IRPIA's latest research publications, policy briefs, and news updates on African development and policy issues." },
  ];
};

export default function Publications() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedArea, setSelectedArea] = useState("All Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest First");

  const filteredPublications = featuredPublications.filter(pub => {
    const matchesType = selectedType === "All Types" || pub.category === selectedType;
    const matchesArea = selectedArea === "All Research Areas" || pub.tags.includes(selectedArea);
    const matchesSearch = searchQuery === "" || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.join(" ").toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation items={navItems} />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="Publications and Research"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Publications & Research
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Explore our latest research findings, policy analyses, and expert insights on critical issues 
              shaping Africa's development landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search publications..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option>All Types</option>
                <option>Policy Brief</option>
                <option>Research Report</option>
                <option>Journal Article</option>
                <option>Working Paper</option>
              </select>

              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option>All Research Areas</option>
                <option>Security & Peace</option>
                <option>Environment</option>
                <option>Education</option>
                <option>Health</option>
                <option>Governance</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Cited</option>
                <option>Title A-Z</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredPublications.length} of {featuredPublications.length} publications
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Publications & News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Stay informed with our latest research findings, policy analyses, and commentary on critical African issues.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">Featured Publications</h3>
            <div className="space-y-8">
              {filteredPublications.map((publication) => (
                <article
                  key={publication.id}
                  className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 p-6 dark:border-gray-700"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500 dark:text-gray-400">{publication.date}</time>
                    <span className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${publication.category === 'Policy Brief' 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300'
                      : publication.category === 'Research Report'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300'
                      : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300'
                    }`}>
                      {publication.category}
                    </span>
                  </div>
                  <div className="group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <span className="absolute inset-0" />
                      {publication.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {publication.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {publication.authors.join(', ')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">Authors</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                      Read more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Latest News</h3>
              <div className="space-y-6">
                {latestNews.map((news) => (
                  <div key={news.id} className="group relative">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <span className="absolute inset-0" />
                      {news.title}
                    </h3>
                    <time className="mt-1 text-xs text-gray-500 dark:text-gray-400">{news.date}</time>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {news.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe to Updates</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Stay informed about our latest research and policy insights.
              </p>
              <form className="mt-4">
                <div className="flex gap-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Publication Categories</h3>
              <div className="space-y-3">
                {publicationCategories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center">
                    <button className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      {category.name}
                    </button>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const featuredPublications = [
  {
    id: 1,
    title: "Democratic Governance and Electoral Integrity in West Africa",
    description: "An analysis of democratic institutions and electoral processes across West African nations, with policy recommendations for strengthening democratic governance.",
    category: "Policy Brief",
    date: "Dec 2024",
    authors: ["Dr. Sarah Johnson", "Prof. Michael Adebayo"],
    tags: ["Governance", "Security & Peace"],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    href: "/publications/democratic-governance-west-africa"
  },
  {
    id: 2,
    title: "Climate Adaptation Strategies for Coastal Communities",
    description: "Comprehensive research on climate change impacts on coastal communities in Sierra Leone and adaptive strategies for resilience building.",
    category: "Research Report",
    date: "Nov 2024",
    authors: ["Dr. Emma Wilson", "Dr. John Kamara"],
    tags: ["Environment"],
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    href: "/publications/climate-adaptation-coastal"
  },
  {
    id: 3,
    title: "Education Policy Reform in Post-Conflict Settings",
    description: "Examining education system reconstruction and policy reforms in post-conflict African societies with focus on Sierra Leone and Liberia.",
    category: "Working Paper",
    date: "Oct 2024",
    authors: ["Prof. David Smith", "Dr. Maria Rodriguez"],
    tags: ["Education", "Security & Peace"],
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    href: "/publications/education-policy-post-conflict"
  },
  {
    id: 4,
    title: "Regional Security Cooperation in the Mano River Union",
    description: "Assessment of security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region.",
    category: "Journal Article",
    date: "Sep 2024",
    authors: ["Dr. James Wilson", "Prof. Aminata Diallo"],
    tags: ["Security & Peace", "Governance"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    href: "/publications/security-cooperation-mano-river"
  },
  {
    id: 5,
    title: "Healthcare Access in Rural Communities",
    description: "Analysis of healthcare accessibility challenges and solutions for rural communities in West Africa.",
    category: "Research Report",
    date: "Aug 2024",
    authors: ["Dr. Patricia Mensah", "Dr. Robert Chen"],
    tags: ["Health"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    href: "/publications/healthcare-access-rural"
  },
  {
    id: 6,
    title: "Environmental Impact of Mining Activities",
    description: "Assessment of environmental and social impacts of mining activities in West African communities.",
    category: "Policy Brief",
    date: "Jul 2024",
    authors: ["Dr. Thomas Anderson", "Prof. Fatima Sow"],
    tags: ["Environment", "Governance"],
    image: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?w=400&h=300&fit=crop",
    href: "/publications/mining-environmental-impact"
  }
];

const latestNews = [
  {
    id: 1,
    title: "IRPIA Hosts Regional Conference on Climate Adaptation",
    date: "Jan 8, 2025",
    summary: "Leading researchers and policymakers gather in Freetown to discuss innovative approaches to climate adaptation across West Africa."
  },
  {
    id: 2,
    title: "New Partnership with African Development Bank",
    date: "Jan 5, 2025",
    summary: "IRPIA announces strategic partnership to enhance research capacity and policy impact across the continent."
  },
  {
    id: 3,
    title: "Dr. Aminata Kamara Featured in BBC Africa Interview",
    date: "Jan 2, 2025",
    summary: "Executive Director discusses IRPIA's research on security challenges and governance innovations in West Africa."
  },
  {
    id: 4,
    title: "Research Fellowship Program Opens for 2025",
    date: "Dec 20, 2024",
    summary: "IRPIA launches expanded fellowship program for early-career researchers focusing on African policy challenges."
  },
  {
    id: 5,
    title: "Policy Brief Influences Sierra Leone Climate Strategy",
    date: "Dec 15, 2024",
    summary: "Government adopts key recommendations from IRPIA's climate resilience research in national adaptation planning."
  }
];

const publicationCategories = [
  { name: "Policy Briefs", count: 23 },
  { name: "Research Reports", count: 18 },
  { name: "Journal Articles", count: 34 },
  { name: "Working Papers", count: 15 },
  { name: "Commentary", count: 42 },
  { name: "Conference Papers", count: 28 }
];

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research', hasMegaMenu: true },
  { name: 'Publications', href: '/publications', hasMegaMenu: true },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}