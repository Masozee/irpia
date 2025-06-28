import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Leadership - IRPIA" },
    { name: "description", content: "Meet IRPIA's leadership team driving evidence-based research and policy integration in Africa." },
  ];
};

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
            alt="IRPIA leadership"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Our Leadership
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Meet the team driving IRPIA&apos;s mission to bridge academic research with 
              practical policy solutions in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Secondary navigation">
            <a
              href="/about"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              About Us
            </a>
            <a
              href="/partners"
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Partners
            </a>
            <a
              href="/leadership"
              className="border-b-2 border-[#B40D05] py-4 px-1 text-sm font-medium text-[#B40D05]"
              aria-current="page"
            >
              Leadership
            </a>
          </nav>
        </div>
      </div>

      {/* Executive Leadership */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#407c0f' }}>
                Executive Leadership
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
                        alt="Abu Bakarr Bah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-2" style={{ color: '#B40D05' }}>
                      Abu Bakarr Bah
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">Founding Director</p>
                    <div className="prose prose-lg text-gray-600">
                      <p className="mb-4">
                        Professor Abu Bakarr Bah is the Founding Director of IRPIA and a Professor of Sociology 
                        at Northern Illinois University. He is also the founding Editor-in-Chief of African 
                        Conflict and Peacebuilding Review.
                      </p>
                      <p>
                        His research focuses on political sociology, peace and conflict studies, and development 
                        studies with an emphasis on Africa. He has extensive experience in policy research and 
                        has worked with various international organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Directors */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#B40D05' }}>
                Research Directors
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Security and Peacebuilding */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=225&fit=crop&crop=face"
                      alt="Dr. Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-500 mb-4">Director of Security and Peacebuilding</p>
                    <p className="text-gray-600 text-sm">
                      Leading research initiatives in conflict resolution and regional security dynamics.
                    </p>
                  </div>
                </div>

                {/* Environmental Sustainability */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=225&fit=crop&crop=face"
                      alt="Dr. Michael Osei"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Dr. Michael Osei</h3>
                    <p className="text-sm text-gray-500 mb-4">Director of Environmental Sustainability</p>
                    <p className="text-gray-600 text-sm">
                      Spearheading research on climate adaptation and sustainable development.
                    </p>
                  </div>
                </div>

                {/* Education and Public Health */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=225&fit=crop&crop=face"
                      alt="Dr. Amina Diallo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Dr. Amina Diallo</h3>
                    <p className="text-sm text-gray-500 mb-4">Director of Education and Public Health</p>
                    <p className="text-gray-600 text-sm">
                      Directing research on educational systems and healthcare policy interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#407c0f' }}>
                Advisory Board
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advisoryBoard.map((member, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{member.title}</p>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                      </div>
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

const advisoryBoard = [
  {
    name: 'Prof. James Wilson',
    title: 'Chair of Advisory Board',
    description: 'Former Dean of International Studies at Oxford University',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Dr. Fatima Nkrumah',
    title: 'Policy Advisor',
    description: 'Senior Policy Analyst at African Development Bank',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Dr. Robert Chen',
    title: 'Research Advisor',
    description: 'Director of Environmental Studies at Stanford University',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Dr. Aisha Mohammed',
    title: 'Education Advisor',
    description: 'UNESCO Chair of Education Policy in Africa',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face'
  },
];