import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Security & Peacebuilding Research - IRPIA" },
    { name: "description", content: "IRPIA's research on conflict prevention, peace processes, and security sector reform across Africa." },
  ];
};

export default function SecurityResearch() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="Security and Peacebuilding"
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
              <span className="text-white font-medium">Security & Peacebuilding</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Security & Peacebuilding
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Building sustainable peace through evidence-based research on conflict prevention, 
              peace processes, and security sector reform across Africa.
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
                Our Security and Peacebuilding research program focuses on understanding and addressing 
                the complex dynamics of conflict and peace in Africa. We examine the root causes of 
                conflicts, analyze peace processes, and develop evidence-based recommendations for 
                sustainable peacebuilding.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through rigorous research methodologies, we investigate security sector reform, 
                post-conflict reconstruction, transitional justice mechanisms, and community-based 
                peacebuilding initiatives. Our work contributes to policy development and supports 
                practitioners working in conflict-affected regions across the continent.
              </p>
              
              {/* Key Research Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {keyAreas.map((area, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B40D05' }}>
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
                Meet our team of experts driving research in security and peacebuilding.
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
                              style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
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
                Latest research outputs in security and peacebuilding.
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
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#B40D05' }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="px-2 py-1 text-xs font-medium text-white rounded"
                            style={{ backgroundColor: pub.type === 'Policy Brief' ? '#B40D05' : '#407c0f' }}
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
                Conferences, workshops, and seminars related to security and peacebuilding.
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
                        style={{ backgroundColor: event.type === 'Conference' ? '#B40D05' : '#407c0f' }}
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
    title: "Conflict Prevention",
    description: "Early warning systems, conflict-sensitive development, and preventive diplomacy mechanisms.",
    icon: ShieldIcon
  },
  {
    title: "Peace Processes",
    description: "Mediation, negotiation, peace agreements, and implementation of peace accords.",
    icon: HandshakeIcon
  },
  {
    title: "Post-Conflict Reconstruction",
    description: "Institution building, rule of law, and transitional justice in post-conflict societies.",
    icon: BuildingIcon
  },
  {
    title: "Security Sector Reform",
    description: "Military, police, and intelligence reform, democratic governance of security institutions.",
    icon: BadgeIcon
  }
];

const experts = [
  {
    name: "Dr. Sarah Johnson",
    title: "Senior Research Fellow",
    expertise: "Conflict analysis and peacebuilding in West Africa",
    specializations: ["Conflict Analysis", "Mediation", "West Africa"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Prof. Emmanuel Kwame",
    title: "Research Associate",
    expertise: "Security sector reform and democratic transitions",
    specializations: ["Security Reform", "Democracy", "Governance"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Aminata Diallo",
    title: "Post-Doctoral Researcher",
    expertise: "Women, peace and security in the Sahel region",
    specializations: ["Gender & Peace", "Sahel", "Community Peacebuilding"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. James Mensah",
    title: "Research Fellow",
    expertise: "Transitional justice and reconciliation processes",
    specializations: ["Transitional Justice", "Reconciliation", "Human Rights"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const publications = [
  {
    title: "Regional Security Cooperation in the Mano River Union: Challenges and Opportunities",
    excerpt: "Assessment of security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region.",
    type: "Research Paper",
    date: "December 2024",
    author: "Dr. Sarah Johnson"
  },
  {
    title: "Women's Participation in Peace Processes: Lessons from Sierra Leone",
    excerpt: "Analysis of women's roles in peacebuilding and recommendations for enhancing their participation in formal peace processes.",
    type: "Policy Brief",
    date: "November 2024",
    author: "Dr. Aminata Diallo"
  },
  {
    title: "Security Sector Reform in Post-Conflict Guinea-Bissau",
    excerpt: "Evaluation of security sector reform efforts and their impact on democratic consolidation and stability.",
    type: "Working Paper",
    date: "October 2024",
    author: "Prof. Emmanuel Kwame"
  }
];

const events = [
  {
    title: "West Africa Peace and Security Conference",
    description: "Annual conference bringing together researchers, policymakers, and practitioners to discuss regional security challenges.",
    type: "Conference",
    date: "March 15-17, 2025",
    location: "Freetown, Sierra Leone",
    status: "upcoming"
  },
  {
    title: "Workshop on Conflict-Sensitive Development",
    description: "Capacity building workshop for development practitioners on integrating conflict sensitivity into programming.",
    type: "Workshop",
    date: "February 28, 2025",
    location: "Virtual Event",
    status: "upcoming"
  }
];

// Icon components
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function HandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18M6.75 9.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h.75m-.75 3h.75m-.75 3h.75m-.75 3h.75" />
    </svg>
  );
}

function BadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}