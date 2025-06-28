import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Environmental Sustainability Research - IRPIA" },
    { name: "description", content: "IRPIA's research on climate change adaptation, natural resource management, and sustainable development policies in Africa." },
  ];
};

export default function EnvironmentResearch() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-900/80 to-green-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="Environmental Sustainability"
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
              <span className="text-white font-medium">Environmental Sustainability</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Environmental Sustainability
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Advancing climate resilience and sustainable development through research on 
              environmental challenges and solutions across Africa.
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
                Our Environmental Sustainability research program addresses the urgent challenges 
                of climate change, environmental degradation, and sustainable development in Africa. 
                We focus on developing evidence-based solutions that balance economic development 
                with environmental protection and social equity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through interdisciplinary research, we examine climate adaptation strategies, 
                natural resource management, renewable energy transitions, and sustainable 
                agriculture practices. Our work supports policymakers, communities, and 
                development practitioners in building climate-resilient and environmentally 
                sustainable pathways for Africa&apos;s future.
              </p>
              
              {/* Key Research Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {keyAreas.map((area, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#407c0f' }}>
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
                Our team of environmental researchers and sustainability experts.
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
                              style={{ backgroundColor: '#dcfce7', color: '#166534' }}
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
                Latest research on environmental sustainability and climate adaptation.
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
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#407c0f' }}>
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
                Conferences and workshops on environmental sustainability.
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
    title: "Climate Adaptation",
    description: "Strategies for building resilience to climate change impacts in vulnerable communities.",
    icon: CloudIcon
  },
  {
    title: "Natural Resource Management",
    description: "Sustainable management of forests, water resources, and biodiversity conservation.",
    icon: TreeIcon
  },
  {
    title: "Renewable Energy",
    description: "Transition to clean energy systems and sustainable energy access for development.",
    icon: BoltIcon
  },
  {
    title: "Sustainable Agriculture",
    description: "Climate-smart agriculture practices and food security in changing environments.",
    icon: SeedlingIcon
  }
];

const experts = [
  {
    name: "Dr. Michael Osei",
    title: "Director of Environmental Research",
    expertise: "Climate change adaptation and sustainable development",
    specializations: ["Climate Adaptation", "Sustainability", "Policy Analysis"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Grace Nakimuli",
    title: "Senior Research Fellow",
    expertise: "Water resources management and conservation",
    specializations: ["Water Management", "Conservation", "Hydrology"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Prof. David Kamau",
    title: "Research Associate",
    expertise: "Renewable energy systems and sustainable technology",
    specializations: ["Renewable Energy", "Technology", "Innovation"],
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Fatou Diop",
    title: "Environmental Economist",
    expertise: "Environmental economics and green growth strategies",
    specializations: ["Environmental Economics", "Green Growth", "Policy"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  }
];

const publications = [
  {
    title: "Climate Adaptation Strategies for Coastal Communities in Sierra Leone",
    excerpt: "Comprehensive research on climate change impacts on coastal communities and adaptive strategies for resilience building.",
    type: "Research Paper",
    date: "December 2024",
    author: "Dr. Michael Osei"
  },
  {
    title: "Sustainable Water Management in Sub-Saharan Africa",
    excerpt: "Analysis of water resource challenges and innovative solutions for sustainable water access and management.",
    type: "Policy Brief",
    date: "November 2024",
    author: "Dr. Grace Nakimuli"
  },
  {
    title: "Renewable Energy Transition in West Africa: Opportunities and Challenges",
    excerpt: "Assessment of renewable energy potential and policy recommendations for accelerating clean energy adoption.",
    type: "Working Paper",
    date: "October 2024",
    author: "Prof. David Kamau"
  }
];

const events = [
  {
    title: "Climate Resilience Workshop Series",
    description: "Interactive workshops on building climate resilience in West African communities with practical implementation strategies.",
    type: "Workshop",
    date: "February 20-22, 2025",
    location: "Virtual & Freetown",
    status: "upcoming"
  },
  {
    title: "African Environmental Sustainability Summit",
    description: "Annual summit bringing together environmental researchers, policymakers, and practitioners across Africa.",
    type: "Conference",
    date: "April 10-12, 2025",
    location: "Accra, Ghana",
    status: "upcoming"
  }
];

// Icon components
function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}

function TreeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-7 9 7M4 10.5V21a.75.75 0 00.75.75H19.5a.75.75 0 00.75-.75V10.5m-16.5 0l1.5-1.5m14 1.5l-1.5-1.5m-14 0l9-7m5 8.5l-9-7m9 7l-9 7M15 9.75V18" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function SeedlingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75L6 21h12l-1.815-.75c-1.303-.485-2.713-.75-4.185-.75zM12 3L8.25 9h7.5L12 3z" />
    </svg>
  );
}