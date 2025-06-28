import { useState } from "react";
import { Link } from "@remix-run/react";

interface NavItem {
  name: string;
  href: string;
  hasMegaMenu?: boolean;
}

interface MegaMenuItem {
  name: string;
  href: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const researchMegaMenu: MegaMenuItem[] = [
    {
      name: "Security & Peacebuilding",
      href: "/research/security",
      description: "Conflict prevention, peace processes, and security sector reform across Africa."
    },
    {
      name: "Environmental Sustainability",
      href: "/research/environment",
      description: "Climate change adaptation and natural resource management policies."
    },
    {
      name: "Education & Public Health",
      href: "/research/education",
      description: "Educational policy research and public health system strengthening."
    },
    {
      name: "Governance & Democracy",
      href: "/research/governance",
      description: "Democratic institutions, electoral systems, and good governance practices."
    },
    {
      name: "Economic Development",
      href: "/research/economic",
      description: "Trade policies, economic integration, and sustainable development."
    },
    {
      name: "Research Methods",
      href: "/research/methods",
      description: "Our research methodologies and collaborative approaches."
    }
  ];

  const publicationsMegaMenu: MegaMenuItem[] = [
    {
      name: "Policy Briefs",
      href: "/publications/policy-briefs",
      description: "Concise analysis and recommendations for policymakers."
    },
    {
      name: "Research Papers",
      href: "/publications/research-papers",
      description: "In-depth academic research on African policy issues."
    },
    {
      name: "Working Papers",
      href: "/publications/working-papers",
      description: "Preliminary research findings and ongoing studies."
    },
    {
      name: "Reports",
      href: "/publications/reports",
      description: "Comprehensive analysis and evaluation reports."
    },
    {
      name: "Book Series",
      href: "/publications/books",
      description: "Scholarly publications and edited volumes."
    },
    {
      name: "Newsletter",
      href: "/publications/newsletter",
      description: "Regular updates on our research and activities."
    }
  ];

  const trendingCategories = [
    "Climate Policy",
    "Democratic Governance",
    "Security Studies",
    "Economic Development",
    "Public Health",
    "Education Reform",
    "Peacebuilding",
    "Environmental Sustainability"
  ];

  const handleMouseEnter = (itemName: string) => {
    if (itemName === "Research" || itemName === "Publications") {
      setActiveDropdown(itemName);
      setSearchOpen(false); // Close search when hovering over menu items
    }
  };

  const handleNavLeave = () => {
    // Add a small delay before closing to allow moving to mega menu
    setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleMegaMenuEnter = () => {
    // Keep the mega menu open when hovering over it
  };

  const handleMegaMenuLeave = () => {
    setActiveDropdown(null);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setActiveDropdown(null); // Close mega menu when opening search
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search submission
      console.log("Searching for:", searchQuery);
      // You can implement actual search functionality here
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/IRPIA-logo.png" 
                  alt="IRPIA Logo" 
                  className="h-8 w-auto"
                />
                <div className="text-lg font-bold" style={{ color: '#B40D05' }}>
                  IRPIA
                </div>
              </Link>
            </div>
            
            {/* Address */}
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>84 Bato, Regent, Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@irpia.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-lg relative">
        <nav className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Menu Navigation */}
              <div className="hidden lg:flex">
                <div className="flex items-center space-x-1">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleNavLeave}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                          activeDropdown === item.name 
                            ? 'text-[#407c0f] border-[#407c0f]' 
                            : 'text-gray-700 hover:text-[#407c0f] border-transparent hover:border-[#407c0f]'
                        }`}
                      >
                        {item.name}
                        {(item.name === "Research" || item.name === "Publications") && (
                          <svg
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={handleSearchToggle}
                    className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                      searchOpen 
                        ? 'text-[#407c0f] border-[#407c0f]' 
                        : 'text-gray-700 hover:text-[#407c0f] border-transparent hover:border-[#407c0f]'
                    }`}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset transition-colors"
                    style={{ '--tw-ring-color': '#407c0f' } as React.CSSProperties}
                  >
                    <span className="sr-only">Open main menu</span>
                    {mobileMenuOpen ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Mega Menu */}
          {activeDropdown && (activeDropdown === "Research" || activeDropdown === "Publications") && (
            <div 
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 z-40"
              style={{ borderTopColor: '#B40D05' }}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeDropdown === "Research" ? researchMegaMenu : publicationsMegaMenu).map((menuItem) => (
                    <Link
                      key={menuItem.name}
                      to={menuItem.href}
                      className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 block"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-[#B40D05] transition-colors mb-2">
                        {menuItem.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                        {menuItem.description}
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#B40D05' }}>
                        {activeDropdown === "Research" ? "Explore Our Research" : "Browse All Publications"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {activeDropdown === "Research" 
                          ? "Discover evidence-based research addressing Africa's most pressing challenges"
                          : "Access our comprehensive collection of policy-relevant publications"
                        }
                      </p>
                    </div>
                    <Link
                      to={activeDropdown === "Research" ? "/research" : "/publications"}
                      className="inline-flex items-center px-6 py-3 text-white font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
                      style={{ backgroundColor: '#407c0f' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5a0a'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#407c0f'}
                    >
                      View All
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Dropdown */}
          {searchOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 z-40" style={{ borderTopColor: '#B40D05' }}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Form */}
                <form onSubmit={handleSearchSubmit} className="mb-8">
                  <div className="relative max-w-2xl mx-auto">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search publications, research, events..."
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#407c0f] transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 text-white font-medium rounded-md transition-colors duration-200"
                      style={{ backgroundColor: '#407c0f' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5a0a'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#407c0f'}
                    >
                      Search
                    </button>
                  </div>
                </form>

                {/* Trending Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#B40D05' }}>
                    Trending Categories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {trendingCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSearchQuery(category);
                          handleSearchSubmit({ preventDefault: () => {} } as React.FormEvent);
                        }}
                        className="text-left p-3 rounded-lg border border-gray-200 hover:border-[#407c0f] hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-gray-400 group-hover:text-[#407c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <span className="text-sm text-gray-500">Quick links:</span>
                    <Link to="/publications" className="text-sm text-[#407c0f] hover:underline">All Publications</Link>
                    <Link to="/research" className="text-sm text-[#407c0f] hover:underline">Research Areas</Link>
                    <Link to="/events" className="text-sm text-[#407c0f] hover:underline">Latest Events</Link>
                    <Link to="/about" className="text-sm text-[#407c0f] hover:underline">About IRPIA</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
              <div className="px-4 py-3 space-y-1">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#B40D05] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile submenu for Research and Publications */}
                    {(item.name === "Research" || item.name === "Publications") && (
                      <div className="ml-4 mt-2 space-y-2">
                        {(item.name === "Research" ? researchMegaMenu : publicationsMegaMenu).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#407c0f] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Search */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSearchOpen(!searchOpen);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#B40D05] transition-colors rounded-md"
                  >
                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}