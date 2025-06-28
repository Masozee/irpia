import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Partners - IRPIA" },
    { name: "description", content: "Our partnerships and collaborations with academic institutions, research organizations, and policy centers across Africa and globally." },
  ];
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
            alt="IRPIA partnerships"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Our Partners
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Collaborating with leading institutions and organizations to advance 
              evidence-based research and policy solutions in Africa.
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
              className="border-b-2 border-[#B40D05] py-4 px-1 text-sm font-medium text-[#B40D05]"
              aria-current="page"
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

      {/* Academic Partners */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#407c0f' }}>
                Academic Partners
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <img
                    src="https://www.niu.edu/_images/logos/NIU-Logo.png"
                    alt="Northern Illinois University"
                    className="h-16 mb-6"
                  />
                  <h3 className="text-lg font-semibold mb-4">Northern Illinois University</h3>
                  <p className="text-gray-600">
                    Our primary academic partner in the United States, providing research infrastructure 
                    and facilitating international academic collaboration.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <img
                    src="https://www.usl.edu.sl/public/images/logo.png"
                    alt="University of Sierra Leone"
                    className="h-16 mb-6"
                  />
                  <h3 className="text-lg font-semibold mb-4">University of Sierra Leone</h3>
                  <p className="text-gray-600">
                    A key partner in West Africa, collaborating on research projects and policy initiatives 
                    focused on regional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#B40D05' }}>
                Research Partners
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">African Peace Research</h3>
                  <p className="text-gray-600 text-sm">
                    Collaborating on conflict resolution and peacebuilding research across the continent.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Environmental Policy Institute</h3>
                  <p className="text-gray-600 text-sm">
                    Joint research on climate adaptation and environmental sustainability.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Health Policy Research Network</h3>
                  <p className="text-gray-600 text-sm">
                    Advancing research in public health policy and healthcare systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Partners */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Title Column (1/4) */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#407c0f' }}>
                Policy Partners
              </h4>
            </div>
            
            {/* Content Column (3/4) */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Government Institutions</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-[#B40D05]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ministry of Planning and Economic Development
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-[#B40D05]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        National Environmental Protection Agency
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">International Organizations</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-[#407c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        United Nations Development Programme
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-[#407c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        African Development Bank
                      </li>
                    </ul>
                  </div>
                </div>
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