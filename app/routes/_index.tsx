import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "IRPIA - Institute for Research and Policy Integration in Africa" },
    { name: "description", content: "A pan-African think tank focused on evidence-based research addressing pressing public policy issues in security, environment, and education." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      <Header />
      
      {/* Latest Publications Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column - Text Content (1/4) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 h-[calc(100vh-16rem)] flex flex-col justify-between">
                <div className="flex flex-col justify-center flex-1">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#B40D05' }}>
                    Latest Publications
                  </h2>
                  <p className="text-lg text-gray-600 mt-4">
                    Stay informed with our most recent research findings and policy insights. Our publications provide evidence-based analysis and recommendations for addressing Africa&apos;s pressing development challenges.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <Link
                    to="/publications"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors duration-200"
                    style={{ backgroundColor: '#407c0f' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5a0a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#407c0f'}
                  >
                    View All Publications
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Carousel and Navigation (3/4) */}
            <div className="lg:col-span-3">
              {/* Carousel Navigation */}
              <div className="flex justify-end mb-8">
                <div className="flex space-x-2">
                  <button
                    id="publications-prev"
                    className="p-2 border border-gray-300 text-gray-500 hover:text-white hover:border-[#B40D05] transition-colors duration-200"
                    style={{ backgroundColor: 'white' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#B40D05';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onClick={() => {
                      const container = document.getElementById('publications-container');
                      if (container) {
                        container.scrollBy({ left: -320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    id="publications-next"
                    className="p-2 border border-gray-300 text-gray-500 hover:text-white hover:border-[#B40D05] transition-colors duration-200"
                    style={{ backgroundColor: 'white' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#B40D05';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onClick={() => {
                      const container = document.getElementById('publications-container');
                      if (container) {
                        container.scrollBy({ left: 320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Carousel Container */}
              <div className="relative overflow-hidden h-[calc(100vh-16rem)]">
                <div
                  id="publications-container"
                  className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4 h-full"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
              {latestPublications.map((publication, index) => (
                <div key={index} className="flex-none w-96 bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 pb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: publication.type === 'Policy Brief' ? '#B40D05' : '#407c0f' }}
                      >
                        {publication.type}
                      </span>
                      <span className="text-sm text-gray-500">{publication.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {publication.excerpt}
                    </p>
                    <Link
                      to={publication.href}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color: '#B40D05' }}
                    >
                      Read More
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Additional publications to show carousel effect */}
              {latestPublications.map((publication, index) => (
                <div key={`duplicate-${index}`} className="flex-none w-96 bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 pb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: publication.type === 'Policy Brief' ? '#B40D05' : '#407c0f' }}
                      >
                        {publication.type}
                      </span>
                      <span className="text-sm text-gray-500">{publication.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {publication.excerpt}
                    </p>
                    <Link
                      to={publication.href}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color: '#B40D05' }}
                    >
                      Read More
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
                </div>
              </div>

              {/* Mobile View All Publications Button */}
              <div className="mt-8 lg:hidden">
                <Link
                  to="/publications"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors duration-200 w-full justify-center"
                  style={{ backgroundColor: '#407c0f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5a0a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#407c0f'}
                >
                  View All Publications
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden lg:block hidden">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="IRPIA's mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile image */}
        <div className="lg:hidden w-full mb-8">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="IRPIA's mission"
            className="w-full h-auto"
          />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8">
              <h4 className="text-2xl font-semibold mb-6" style={{ color: '#B40D05' }}>
                IRPIA&apos;s core objectives
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                At IRPIA, our core values define who we are and guide our work
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                IRPIA&apos;s mission is premised on the understanding that public policies on issues such as security and peace, 
                environmental sustainability, public health, education, migration, governance, just to name a few, need to be 
                based on evidence-based knowledge which often comes out cutting edge academic research.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B40D05' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Promote African knowledge</h4>
                    <p className="text-gray-600">
                      Promote African knowledge production with a special emphasize on evidence-based research and its policy use, 
                      especially in the areas of security and peacebuilding, environmental sustainability and resilience, and 
                      education and public health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#407c0f' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Disseminate</h4>
                    <p className="text-gray-600">
                      Disseminate evidence-based research findings in ways that are useful for policy makers and practitioners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B40D05' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Be a hub</h4>
                    <p className="text-gray-600">
                      Be a hub for researchers/scholars, policy experts, trainers, and international students interested in African issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#407c0f' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Integration</h4>
                    <p className="text-gray-600">
                      Support the integration of academic evidence-based research and policy issues in Africa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B40D05' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Be a resource</h4>
                    <p className="text-gray-600">
                      Be a resource for policy makers and practitioners in government, international organizations, and civil society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IRPIA Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            

            <div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Unraveling IRPIA&apos;s Specialized Research Focus with Expert Insights
              </h2>

              <p className="text-gray-600 mb-8">Exploring Key Realms: Our focus on three crucial areas</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Security and Peacebuilding</h4>
                  
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Environmental Sustainability and Resilience</h4>
                  
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Education and Public Health</h4>
                  
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
                alt="IRPIA's mission"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Latest Events Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#B40D05' }}>
              Latest Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join us at our upcoming events and stay connected with our research community
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {latestEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="inline-flex items-center px-3 py-1 text-xs font-medium text-white"
                      style={{ backgroundColor: event.type === 'Conference' ? '#B40D05' : '#407c0f' }}
                    >
                      {event.type}
                    </span>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{event.date}</span> • {event.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={event.href}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      style={{ color: '#B40D05' }}
                    >
                      Learn More
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    {event.status === 'upcoming' && (
                      <span className="text-sm text-green-600 font-medium">Upcoming</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: '#407c0f' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5a0a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#407c0f'}
            >
              View All Events
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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

const latestPublications = [
  {
    title: "Democratic Governance and Electoral Integrity in West Africa",
    excerpt: "An analysis of democratic institutions and electoral processes across West African nations, with policy recommendations for strengthening democratic governance.",
    type: "Policy Brief",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    href: "/publications/democratic-governance-west-africa"
  },
  {
    title: "Climate Adaptation Strategies for Coastal Communities",
    excerpt: "Comprehensive research on climate change impacts on coastal communities in Sierra Leone and adaptive strategies for resilience building.",
    type: "Research Paper",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb4b3a2a?w=400&h=300&fit=crop",
    href: "/publications/climate-adaptation-coastal"
  },
  {
    title: "Education Policy Reform in Post-Conflict Settings",
    excerpt: "Examining education system reconstruction and policy reforms in post-conflict African societies with focus on Sierra Leone and Liberia.",
    type: "Working Paper",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    href: "/publications/education-policy-post-conflict"
  },
  {
    title: "Regional Security Cooperation in the Mano River Union",
    excerpt: "Assessment of security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region.",
    type: "Report",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    href: "/publications/security-cooperation-mano-river"
  }
];


const latestEvents = [
  {
    title: "African Policy Research Symposium 2025",
    description: "Join leading researchers, policymakers, and civil society leaders for three days of intensive discussions on evidence-based policy solutions for Africa's development challenges.",
    type: "Conference",
    date: "Mar 15-17, 2025",
    location: "Freetown, Sierra Leone",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    href: "/events/policy-research-symposium-2025"
  },
  {
    title: "Climate Resilience Workshop Series",
    description: "A series of interactive workshops focusing on building climate resilience in West African communities, featuring case studies and practical implementation strategies.",
    type: "Workshop",
    date: "Feb 20-22, 2025",
    location: "Virtual & Freetown",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    href: "/events/climate-resilience-workshop-2025"
  }
];

