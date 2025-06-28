import { Link } from "@remix-run/react";

export function Header() {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg)'
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero content */}
      <div className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 w-full">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Text content */}
            <div className="text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block">Bridging Research</span>
                <span className="block text-yellow-300">and Policy in Africa</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-100 max-w-3xl">
                The Institute for Research and Policy Integration in Africa (IRPIA) is a pan-African think tank 
                dedicated to producing evidence-based research that addresses the continent&apos;s most pressing challenges.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/research"
                  className="inline-flex items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[#B40D05] shadow-sm hover:bg-gray-100 transition-colors duration-200"
                >
                  Explore Our Research
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/publications"
                  className="inline-flex items-center justify-center border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#B40D05] transition-colors duration-200"
                >
                  View Publications
                </Link>
              </div>
              
              {/* Statistics */}
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm text-gray-200 mt-1">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">15+</div>
                  <div className="text-sm text-gray-200 mt-1">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100+</div>
                  <div className="text-sm text-gray-200 mt-1">Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 