import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "About IRPIA - Institute for Research and Policy Integration in Africa" },
    { name: "description", content: "Learn about IRPIA's mission to promote African knowledge production and bridge academic research with practical policy solutions." },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="IRPIA background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              About IRPIA
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              The Institute for Research and Policy Integration in Africa is a pan-African think tank 
              dedicated to bridging academic research and public policy.
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
              className="border-b-2 border-[#B40D05] py-4 px-1 text-sm font-medium text-[#B40D05]"
              aria-current="page"
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
              className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Leadership
            </a>
          </nav>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#407c0f' }}>
                Bringing Research and Policy Together
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                The Institute for Research and Policy Integration in Africa (IRPIA) is a pan-African think tank 
                serving as a hub for the fusion of evidence-based research with pressing public policy issues. 
                It is a nonprofit organization registered and based in Sierra Leone. It is also housed at 
                Northern Illinois University in the United States.
              </p>
              <p className="text-gray-600 leading-relaxed">
                IRPIA&apos;s mission is premised on the understanding that public policies on issues such as security 
                and peace, environmental sustainability, public health, education, migration, governance, just to 
                name a few, need to be based on evidence-based knowledge which often comes out of cutting edge 
                academic research.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As such, IRPIA focuses on promoting evidence-based research on core pressing policy issues in Africa 
                and disseminating evidence-based research in policy relevant formats. Evidence-based research from 
                the academic world is framed and geared toward providing policy relevant analyses and recommendations 
                for policy makers and practitioners, especially in the areas of security and peacebuilding, 
                environmental sustainability and resilience, and education and public health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Director Quote */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Director Info Column (1/4) */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Abu Bakarr Bah"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: '#B40D05' }}>
                Abu Bakarr Bah
              </h4>
              <p className="text-gray-600">Founding Director</p>
            </div>
            
            {/* Quote Column (3/4) */}
            <div className="lg:col-span-3">
              <blockquote className="text-gray-600 leading-relaxed">
                <p className="mb-6">
                  &ldquo;IRPIA is a continuation of the effort to promote African knowledge which I started in 2010 
                  with the founding of African Conflict & Peacebuilding Review (ACPR). Through ACPR, I have 
                  had the opportunity to work with diverse scholars and policy experts across Africa. I have 
                  seen many of them grow from recent graduates to becoming junior scholars and now very 
                  accomplished scholars. Even more, many of them have made contributions to African policy 
                  debates as researchers and policy experts.
                </p>
                <p>
                  All of that has further convinced me of the need for evidence-based social and scientific 
                  knowledge about Africa produced by people in Africa in the service of our collective effort 
                  to solve pressing issues in Africa. IRPIA is an important part in that effort to nurture 
                  African knowledge production and make evidence-based knowledge about Africa accessible and 
                  useful in solving the challenges faced by African countries and everyday people in Africa.&rdquo;
                </p>
              </blockquote>
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

