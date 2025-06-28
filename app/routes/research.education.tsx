import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Education & Public Health Research - IRPIA" },
    { name: "description", content: "IRPIA's research on educational policy, health system strengthening, and human development in Africa." },
  ];
};

export default function EducationResearch() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900/80 to-blue-700/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="Education and Public Health"
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
              <span className="text-white font-medium">Education & Public Health</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Education & Public Health
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Advancing human development through research on educational systems, 
              health policy, and capacity building across Africa.
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
                Our Education and Public Health research program focuses on improving human 
                development outcomes across Africa through evidence-based research on educational 
                systems, health policies, and capacity building initiatives. We examine the 
                interconnections between education and health as fundamental drivers of development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through rigorous research methodologies, we investigate educational access and 
                quality, health system strengthening, disease prevention, and the role of 
                education in promoting health behaviors. Our work supports policymakers, 
                educators, and health practitioners in developing effective interventions 
                that address the complex challenges facing African societies.
              </p>
              
              {/* Key Research Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {keyAreas.map((area, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2563eb' }}>
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
                Our interdisciplinary team of education and health researchers.
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
                              style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
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
                Latest research on education and public health policy.
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
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#2563eb' }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="px-2 py-1 text-xs font-medium text-white rounded"
                            style={{ backgroundColor: pub.type === 'Policy Brief' ? '#B40D05' : '#2563eb' }}
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
                Conferences and workshops on education and health policy.
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
                        style={{ backgroundColor: event.type === 'Conference' ? '#B40D05' : '#2563eb' }}
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
    title: "Educational Policy Reform",
    description: "Analysis of education systems, curriculum development, and policy implementation in post-conflict settings.",
    icon: BookIcon
  },
  {
    title: "Health System Strengthening",
    description: "Research on healthcare delivery, primary healthcare systems, and health sector governance.",
    icon: HeartIcon
  },
  {
    title: "Capacity Building",
    description: "Human resource development, training programs, and institutional capacity enhancement.",
    icon: UserGroupIcon
  },
  {
    title: "Health Education",
    description: "Health promotion, disease prevention education, and community health interventions.",
    icon: LightBulbIcon
  }
];

const experts = [
  {
    name: "Dr. Amina Diallo",
    title: "Director of Education & Health Research",
    expertise: "Educational policy and health system reform in post-conflict societies",
    specializations: ["Education Policy", "Health Systems", "Post-Conflict"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Prof. John Kwabena",
    title: "Senior Research Fellow",
    expertise: "Primary healthcare delivery and community health systems",
    specializations: ["Primary Healthcare", "Community Health", "Health Policy"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Fatima Al-Hassan",
    title: "Education Researcher",
    expertise: "Educational access, quality, and learning outcomes in Africa",
    specializations: ["Education Access", "Learning Outcomes", "Quality Assurance"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b332b67?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Samuel Nyong",
    title: "Public Health Specialist",
    expertise: "Epidemiology, disease prevention, and health promotion strategies",
    specializations: ["Epidemiology", "Disease Prevention", "Health Promotion"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
  }
];

const publications = [
  {
    title: "Education Policy Reform in Post-Conflict Settings: Lessons from Sierra Leone and Liberia",
    excerpt: "Examining education system reconstruction and policy reforms in post-conflict African societies with focus on access and quality.",
    type: "Research Paper",
    date: "December 2024",
    author: "Dr. Amina Diallo"
  },
  {
    title: "Strengthening Primary Healthcare Systems in Rural West Africa",
    excerpt: "Analysis of healthcare delivery challenges and innovative solutions for improving access to primary healthcare services.",
    type: "Policy Brief",
    date: "November 2024",
    author: "Prof. John Kwabena"
  },
  {
    title: "Digital Learning Technologies in African Education: Opportunities and Challenges",
    excerpt: "Assessment of digital education initiatives and their potential for improving learning outcomes across Africa.",
    type: "Working Paper",
    date: "October 2024",
    author: "Dr. Fatima Al-Hassan"
  }
];

const events = [
  {
    title: "African Education and Health Policy Forum",
    description: "Annual forum bringing together education and health policymakers to discuss integrated approaches to human development.",
    type: "Conference",
    date: "March 25-27, 2025",
    location: "Lagos, Nigeria",
    status: "upcoming"
  },
  {
    title: "Health Systems Strengthening Workshop",
    description: "Practical workshop on health system strengthening strategies for low-resource settings in West Africa.",
    type: "Workshop",
    date: "February 15-16, 2025",
    location: "Dakar, Senegal",
    status: "upcoming"
  }
];

// Icon components
function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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

function LightBulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478a12.06 12.06 0 014.5 0m-8.25.189c.076.394.06.79-.016 1.17a4.006 4.006 0 01-.988 1.81c-.573.598-1.175 1.085-1.746 1.49M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}