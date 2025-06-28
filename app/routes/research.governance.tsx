import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Governance & Democracy Research - IRPIA" },
    { name: "description", content: "IRPIA's research on democratic institutions, electoral systems, and good governance practices across Africa." },
  ];
};

export default function GovernanceResearch() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900/80 to-purple-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="Governance and Democracy"
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
              <span className="text-white font-medium">Governance & Democracy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Governance & Democracy
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Strengthening democratic institutions and promoting good governance 
              through evidence-based research and policy analysis across Africa.
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
                Our Governance and Democracy research program focuses on understanding and 
                strengthening democratic institutions, electoral processes, and governance 
                systems across Africa. We examine the challenges and opportunities for 
                democratic consolidation, rule of law, and accountable governance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through comparative analysis and empirical research, we investigate 
                electoral integrity, institutional design, anti-corruption measures, 
                and citizen participation in democratic processes. Our research supports 
                policymakers, civil society organizations, and international development 
                partners in promoting democratic governance and institutional reform.
              </p>
              
              {/* Key Research Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {keyAreas.map((area, index) => (
                  <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7c3aed' }}>
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Experts */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#407c0f' }}>
                Research Experts
              </h2>
              <p className="text-gray-600">
                Our team of governance and democracy researchers and practitioners.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experts.map((expert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{expert.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{expert.title}</p>
                        <p className="text-gray-600 text-sm mb-3">{expert.expertise}</p>
                        <div className="flex flex-wrap gap-2">
                          {expert.specializations.map((spec, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 text-xs font-medium rounded-full"
                              style={{ backgroundColor: '#f3e8ff', color: '#6b21a8' }}
                            >
                              {spec}
                            </span>
                          ))}
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

      {/* Latest Publications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#B40D05' }}>
                Recent Publications
              </h2>
              <p className="text-gray-600 mb-6">
                Latest research on governance and democratic institutions.
              </p>
              <Link
                to="/publications"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{ color: '#407c0f' }}
              >
                View All Publications
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#7c3aed' }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="px-2 py-1 text-xs font-medium text-white rounded"
                            style={{ backgroundColor: pub.type === 'Policy Brief' ? '#B40D05' : '#7c3aed' }}
                          >
                            {pub.type}
                          </span>
                          <span className="text-sm text-gray-500">{pub.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{pub.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>By {pub.author}</span>
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

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#407c0f' }}>
                Upcoming Events
              </h2>
              <p className="text-gray-600 mb-6">
                Conferences and workshops on governance and democracy.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{ color: '#B40D05' }}
              >
                View All Events
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-3 py-1 text-xs font-medium text-white rounded"
                        style={{ backgroundColor: event.type === 'Conference' ? '#B40D05' : '#7c3aed' }}
                      >
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{event.location}</span>
                      {event.status === 'upcoming' && (
                        <span className="text-sm text-green-600 font-medium">Upcoming</span>
                      )}
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

const keyAreas = [
  {
    title: "Electoral Systems",
    description: "Analysis of electoral processes, voting systems, and election integrity across African democracies.",
    icon: CheckBoxIcon
  },
  {
    title: "Democratic Institutions",
    description: "Research on parliament, judiciary, executive powers, and institutional checks and balances.",
    icon: BuildingLibraryIcon
  },
  {
    title: "Anti-Corruption",
    description: "Governance transparency, accountability mechanisms, and anti-corruption strategies and policies.",
    icon: ShieldCheckIcon
  },
  {
    title: "Citizen Participation",
    description: "Civil society engagement, citizen participation in governance, and democratic accountability.",
    icon: UsersIcon
  }
];

const experts = [
  {
    name: "Prof. Catherine Mumbua",
    title: "Director of Governance Research",
    expertise: "Democratic institutions and electoral systems in East Africa",
    specializations: ["Democratic Institutions", "Electoral Systems", "East Africa"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b332b67?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Kwame Asante",
    title: "Senior Research Fellow",
    expertise: "Anti-corruption policies and governance transparency",
    specializations: ["Anti-Corruption", "Transparency", "Policy Analysis"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Zainab Ibrahim",
    title: "Research Associate",
    expertise: "Civil society and citizen participation in democratic processes",
    specializations: ["Civil Society", "Citizen Participation", "Democracy"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Prof. John Nyerere",
    title: "Visiting Scholar",
    expertise: "Constitutional law and judicial reform in Africa",
    specializations: ["Constitutional Law", "Judicial Reform", "Rule of Law"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const publications = [
  {
    title: "Democratic Governance and Electoral Integrity in West Africa: Trends and Challenges",
    excerpt: "Comprehensive analysis of democratic institutions and electoral processes across West African nations with policy recommendations.",
    type: "Research Paper",
    date: "December 2024",
    author: "Prof. Catherine Mumbua"
  },
  {
    title: "Fighting Corruption in African Governance: A Policy Framework",
    excerpt: "Assessment of anti-corruption initiatives and recommendations for strengthening governance transparency and accountability.",
    type: "Policy Brief",
    date: "November 2024",
    author: "Dr. Kwame Asante"
  },
  {
    title: "Civil Society and Democratic Participation in Post-Conflict Societies",
    excerpt: "Analysis of civil society roles in democratic consolidation and citizen engagement in post-conflict African states.",
    type: "Working Paper",
    date: "October 2024",
    author: "Dr. Zainab Ibrahim"
  }
];

const events = [
  {
    title: "African Democracy Forum 2025",
    description: "Annual forum bringing together African democracy scholars, practitioners, and policymakers to discuss democratic governance challenges.",
    type: "Conference",
    date: "May 20-22, 2025",
    location: "Cape Town, South Africa",
    status: "upcoming"
  },
  {
    title: "Electoral Systems and Democracy Workshop",
    description: "Intensive workshop on electoral system design, implementation, and reform in African democracies.",
    type: "Workshop",
    date: "April 8-9, 2025",
    location: "Nairobi, Kenya",
    status: "upcoming"
  }
];

// Icon components
function CheckBoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BuildingLibraryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-7 9 7M4 10.5V21a.75.75 0 00.75.75H19.5a.75.75 0 00.75-.75V10.5m-16.5 0l1.5-1.5m14 1.5l-1.5-1.5m-14 0l9-7m5 8.5l-9-7m9 7l-9 7M15 9.75V18" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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