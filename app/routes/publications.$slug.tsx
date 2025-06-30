import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useParams } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Publication Detail - IRPIA" },
    { name: "description", content: "Detailed view of IRPIA publication with full content and related resources." },
  ];
};

export default function PublicationDetail() {
  const { slug } = useParams();
  
  // In a real app, you'd fetch the publication data based on the slug
  const publication = getPublicationBySlug(slug || "");
  
  if (!publication) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation items={navItems} />
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Publication Not Found</h1>
          <Link to="/publications" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Publications
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation items={navItems} />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <Link to="/publications" className="text-gray-500 hover:text-gray-700">Publications</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{publication.title}</span>
          </div>
        </div>
      </div>

      {/* Publication Header */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="px-3 py-1 text-sm font-medium text-white rounded"
                  style={{ backgroundColor: getTypeColor(publication.type) }}
                >
                  {publication.type}
                </span>
                <span className="text-sm text-gray-500">{publication.date}</span>
                <span className="text-sm text-gray-500">• {publication.pages} pages</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{publication.title}</h1>
              
              <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
                <span>By {publication.author}</span>
                <span>•</span>
                <span>{publication.downloads} downloads</span>
                <span>•</span>
                <span>{publication.citations} citations</span>
              </div>

              {/* Abstract */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">{publication.abstract}</p>
                  <p className="leading-relaxed">{publication.abstractExtended}</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Findings</h2>
                <ul className="space-y-3">
                  {publication.keyFindings.map((finding, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{finding}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy Recommendations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Recommendations</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <ul className="space-y-3">
                    {publication.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{rec}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Download Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Download</h3>
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center mb-3">
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    Download PDF
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                    <ShareIcon className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>

                {/* Publication Info */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Publication Details</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-medium text-gray-700">Type</dt>
                      <dd className="text-gray-600">{publication.type}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-700">Research Area</dt>
                      <dd className="text-gray-600">{publication.researchArea}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-700">Published</dt>
                      <dd className="text-gray-600">{publication.date}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-700">Pages</dt>
                      <dd className="text-gray-600">{publication.pages}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-700">Language</dt>
                      <dd className="text-gray-600">English</dd>
                    </div>
                  </dl>
                </div>

                {/* Citation */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Citation</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-600 break-words">
                    {publication.citation}
                  </div>
                  <button className="mt-3 text-sm text-blue-600 hover:underline">Copy Citation</button>
                </div>

                {/* Related Publications */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Publications</h3>
                  <div className="space-y-4">
                    {publication.relatedPublications.map((related, index) => (
                      <Link 
                        key={index}
                        to={`/publications/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {related.title}
                        </h4>
                        <p className="text-xs text-gray-500">{related.type} • {related.date}</p>
                      </Link>
                    ))}
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

function getPublicationBySlug(slug: string) {
  const publications = {
    "democratic-governance-west-africa": {
      title: "Democratic Governance and Electoral Integrity in West Africa",
      type: "Policy Brief",
      researchArea: "Governance & Democracy",
      author: "Dr. Catherine Mumbua",
      date: "December 2024",
      pages: "24",
      downloads: "2,134",
      citations: "15",
      abstract: "This policy brief examines the state of democratic governance across West African nations, analyzing electoral processes, institutional capacity, and governance challenges. Through comparative analysis of electoral data, institutional assessments, and stakeholder interviews, this study provides evidence-based recommendations for strengthening democratic institutions.",
      abstractExtended: "The research draws on data from 15 West African countries over the past decade, examining trends in electoral integrity, institutional effectiveness, and democratic consolidation. Key areas of focus include election administration, voter registration systems, campaign finance, media freedom, and post-election dispute resolution mechanisms.",
      keywords: ["Democratic Governance", "Electoral Integrity", "West Africa", "Institutional Capacity", "Electoral Systems", "Political Institutions"],
      keyFindings: [
        "Electoral management bodies in the region show varying levels of independence and capacity, with stronger institutions correlating with higher public trust in electoral processes.",
        "Digital voter registration systems have improved electoral roll accuracy in 8 out of 15 countries studied, reducing potential for electoral fraud.",
        "Media freedom remains constrained in several countries, limiting voters' access to diverse information sources during electoral periods.",
        "Post-election dispute resolution mechanisms are weak in most countries, contributing to prolonged electoral tensions."
      ],
      recommendations: [
        "Strengthen electoral management body independence through constitutional reforms and adequate funding mechanisms.",
        "Invest in digital infrastructure and capacity building for modernized voter registration and result transmission systems.",
        "Develop regional standards for media access and freedom during electoral periods, with monitoring mechanisms.",
        "Establish specialized electoral courts with expedited procedures for resolving election-related disputes."
      ],
      citation: "Mumbua, C. (2024). Democratic Governance and Electoral Integrity in West Africa. IRPIA Policy Brief, 2024(4), 1-24.",
      relatedPublications: [
        {
          title: "Civil Society and Democratic Participation in Post-Conflict Societies",
          type: "Working Paper",
          date: "October 2024",
          slug: "civil-society-democratic-participation"
        },
        {
          title: "Fighting Corruption in African Governance",
          type: "Policy Brief", 
          date: "August 2024",
          slug: "fighting-corruption-governance"
        }
      ]
    },
    "women-participation-peace": {
      title: "Women's Participation in Peace Processes: Lessons from Sierra Leone",
      type: "Policy Brief",
      researchArea: "Security & Peacebuilding",
      author: "Dr. Aminata Diallo",
      date: "November 2024",
      pages: "18",
      downloads: "1,245",
      citations: "8",
      abstract: "This policy brief analyzes women's roles in peacebuilding and provides recommendations for enhancing their participation in formal peace processes across West Africa. Drawing from Sierra Leone's post-conflict experience, this study examines barriers to women's inclusion and identifies successful strategies for meaningful participation.",
      abstractExtended: "The research examines women's participation in peace processes from 2000-2024, analyzing their roles in formal negotiations, community-level peacebuilding, and post-conflict reconstruction. The study highlights the critical importance of women's inclusion for sustainable peace and offers practical recommendations for policymakers.",
      keywords: ["Women's Participation", "Peacebuilding", "Sierra Leone", "Conflict Resolution", "Gender Equality", "Peace Processes"],
      keyFindings: [
        "Women's participation in formal peace negotiations increased from 15% in 2000 to 35% in 2020 across West African peace processes.",
        "Community-level peacebuilding initiatives led by women show 40% higher sustainability rates than male-dominated programs.",
        "Legal frameworks supporting women's participation exist but implementation remains inconsistent across the region.",
        "Economic empowerment programs for women contribute significantly to long-term peace consolidation."
      ],
      recommendations: [
        "Establish mandatory quotas for women's participation in all formal peace negotiations and post-conflict governance structures.",
        "Provide dedicated funding and technical support for women-led peacebuilding initiatives at community and national levels.",
        "Strengthen legal frameworks and enforcement mechanisms to protect women peacebuilders and ensure their meaningful participation.",
        "Integrate gender-sensitive approaches in all peace process design and implementation phases."
      ],
      citation: "Diallo, A. (2024). Women's Participation in Peace Processes: Lessons from Sierra Leone. IRPIA Policy Brief, 2024(3), 1-18.",
      relatedPublications: [
        {
          title: "Security Cooperation in the Mano River Union",
          type: "Report",
          date: "September 2024",
          slug: "security-cooperation-mano-river"
        },
        {
          title: "Civil Society and Democratic Participation",
          type: "Working Paper",
          date: "September 2024",
          slug: "civil-society-democratic-participation"
        }
      ]
    },
    "sustainable-water-management": {
      title: "Sustainable Water Management in Sub-Saharan Africa",
      type: "Policy Brief",
      researchArea: "Environmental Sustainability",
      author: "Dr. Grace Nakimuli",
      date: "October 2024",
      pages: "22",
      downloads: "987",
      citations: "12",
      abstract: "This policy brief provides evidence-based recommendations for improving water access, management, and conservation across sub-Saharan African communities. The study examines successful water management initiatives and identifies scalable solutions for addressing water scarcity challenges.",
      abstractExtended: "The research analyzes water management systems across 12 sub-Saharan African countries, examining both traditional and modern approaches to water conservation. Key focus areas include community-based management, technological innovations, and policy frameworks that support sustainable water access.",
      keywords: ["Water Management", "Sub-Saharan Africa", "Sustainability", "Community-Based Management", "Water Access", "Conservation"],
      keyFindings: [
        "Community-based water management systems show 60% higher sustainability rates than centrally managed systems.",
        "Integration of traditional and modern water conservation techniques reduces water scarcity by up to 45%.",
        "Women's leadership in water management correlates with improved community health outcomes and system maintenance.",
        "Policy frameworks that include community participation have 3x higher implementation success rates."
      ],
      recommendations: [
        "Prioritize community-based water management approaches with strong local governance structures.",
        "Invest in hybrid systems that combine traditional knowledge with modern water conservation technologies.",
        "Ensure women's leadership and meaningful participation in all water management decision-making processes.",
        "Develop adaptive policy frameworks that can respond to local water management needs and climate variability."
      ],
      citation: "Nakimuli, G. (2024). Sustainable Water Management in Sub-Saharan Africa. IRPIA Policy Brief, 2024(2), 1-22.",
      relatedPublications: [
        {
          title: "Climate Adaptation Strategies for Coastal Communities",
          type: "Research Paper",
          date: "November 2024",
          slug: "climate-adaptation-coastal"
        }
      ]
    },
    "strengthening-primary-healthcare": {
      title: "Strengthening Primary Healthcare Systems in Rural West Africa",
      type: "Policy Brief",
      researchArea: "Education & Public Health",
      author: "Prof. John Kwabena",
      date: "September 2024",
      pages: "26",
      downloads: "1,567",
      citations: "18",
      abstract: "This policy brief presents evidence-based strategies for improving healthcare delivery and access in rural communities across West Africa. The study examines successful primary healthcare models and provides recommendations for strengthening health systems at the community level.",
      abstractExtended: "The research analyzes primary healthcare systems across rural West Africa, examining service delivery models, community health worker programs, and health system strengthening initiatives. The study emphasizes the importance of community-centered approaches and sustainable financing mechanisms.",
      keywords: ["Primary Healthcare", "Rural Health", "West Africa", "Community Health Workers", "Health Systems", "Healthcare Access"],
      keyFindings: [
        "Community health worker programs reduce under-5 mortality rates by 35% in rural areas when properly supported.",
        "Integrated service delivery models improve healthcare utilization rates by 50% compared to vertical programs.",
        "Mobile health technologies increase healthcare access in remote areas by 70% when combined with community health workers.",
        "Community financing mechanisms for healthcare show sustainability rates of 80% when designed with local participation."
      ],
      recommendations: [
        "Scale up community health worker programs with comprehensive training, supervision, and incentive systems.",
        "Implement integrated primary healthcare delivery models that address multiple health needs simultaneously.",
        "Leverage mobile health technologies to extend healthcare reach and improve service quality in rural areas.",
        "Establish community-based health financing mechanisms with government subsidies for the most vulnerable populations."
      ],
      citation: "Kwabena, J. (2024). Strengthening Primary Healthcare Systems in Rural West Africa. IRPIA Policy Brief, 2024(1), 1-26.",
      relatedPublications: [
        {
          title: "Education Policy Reform in Post-Conflict Settings",
          type: "Working Paper",
          date: "October 2024",
          slug: "education-policy-post-conflict"
        }
      ]
    },
    "fighting-corruption-governance": {
      title: "Fighting Corruption in African Governance: A Policy Framework",
      type: "Policy Brief",
      researchArea: "Governance & Democracy",
      author: "Dr. Kwame Asante",
      date: "August 2024",
      pages: "20",
      downloads: "2,134",
      citations: "22",
      abstract: "This policy brief presents a comprehensive framework for anti-corruption policies and governance transparency measures across African institutions. The study examines successful anti-corruption initiatives and provides actionable recommendations for strengthening accountability mechanisms.",
      abstractExtended: "The research analyzes anti-corruption efforts across 15 African countries, examining institutional frameworks, legal mechanisms, and civil society engagement. The study provides a systematic approach to designing and implementing effective anti-corruption strategies.",
      keywords: ["Anti-Corruption", "Governance", "Transparency", "Accountability", "African Institutions", "Policy Framework"],
      keyFindings: [
        "Countries with independent anti-corruption agencies show 45% higher corruption perception improvements over 5-year periods.",
        "Citizen engagement in oversight mechanisms increases corruption detection rates by 60%.",
        "Digital transparency platforms reduce bureaucratic corruption by 35% when properly implemented.",
        "Asset declaration systems for public officials are effective when combined with verification and enforcement mechanisms."
      ],
      recommendations: [
        "Establish independent anti-corruption agencies with adequate resources, legal authority, and political protection.",
        "Implement comprehensive digital transparency platforms for public procurement, budgeting, and service delivery.",
        "Strengthen citizen oversight mechanisms through civil society capacity building and legal protections for whistleblowers.",
        "Develop asset declaration and verification systems for all public officials with strong enforcement mechanisms."
      ],
      citation: "Asante, K. (2024). Fighting Corruption in African Governance: A Policy Framework. IRPIA Policy Brief, 2024(5), 1-20.",
      relatedPublications: [
        {
          title: "Democratic Governance and Electoral Integrity in West Africa",
          type: "Policy Brief",
          date: "December 2024",
          slug: "democratic-governance-west-africa"
        }
      ]
    },
    "climate-adaptation-coastal": {
      title: "Climate Adaptation Strategies for Coastal Communities",
      type: "Research Paper",
      researchArea: "Environmental Sustainability",
      author: "Dr. Michael Osei",
      date: "November 2024",
      pages: "38",
      downloads: "2,456",
      citations: "12",
      abstract: "This research paper examines climate change impacts on coastal communities and evaluates adaptive strategies for building resilience. Using mixed-methods research, the study analyzes vulnerability patterns and community responses to sea-level rise, erosion, and extreme weather events.",
      abstractExtended: "The research employs a comprehensive mixed-methods approach, combining quantitative analysis of climate data with qualitative assessment of community adaptation strategies. The study examines coastal vulnerability across West Africa, focusing on community-led adaptation initiatives and their effectiveness.",
      keywords: ["Climate Adaptation", "Coastal Communities", "Resilience", "Sea-level Rise", "Community-Based Adaptation", "West Africa"],
      keyFindings: [
        "Community-based early warning systems reduce climate-related losses by up to 70% in coastal areas.",
        "Ecosystem-based adaptation approaches are 40% more cost-effective than hard infrastructure solutions.",
        "Women-led adaptation initiatives show higher community adoption rates and long-term sustainability.",
        "Integration of traditional knowledge with scientific climate data improves adaptation strategy effectiveness by 55%."
      ],
      recommendations: [
        "Scale up community-based early warning systems with proper training and communication infrastructure.",
        "Prioritize ecosystem-based adaptation approaches that provide multiple co-benefits for communities and environment.",
        "Ensure women's leadership in climate adaptation planning and implementation processes.",
        "Develop integrated knowledge systems that combine traditional and scientific climate information for decision-making."
      ],
      citation: "Osei, M. (2024). Climate Adaptation Strategies for Coastal Communities. IRPIA Research Papers, 2024(3), 1-38.",
      relatedPublications: [
        {
          title: "Sustainable Water Management in Sub-Saharan Africa",
          type: "Policy Brief",
          date: "October 2024",
          slug: "sustainable-water-management"
        }
      ]
    },
    "digital-learning-technologies": {
      title: "Digital Learning Technologies in African Education: Opportunities and Challenges",
      type: "Working Paper",
      researchArea: "Education & Public Health",
      author: "Dr. Fatima Al-Hassan",
      date: "November 2024",
      pages: "28",
      downloads: "892",
      citations: "5",
      abstract: "This working paper presents preliminary findings from an assessment of digital education initiatives across Africa, examining their potential for improving learning outcomes. The study focuses on infrastructure requirements, accessibility challenges, and pedagogical effectiveness of technology-enhanced learning approaches.",
      abstractExtended: "The research examines digital learning implementations across 10 African countries, analyzing infrastructure constraints, teacher training needs, and student learning outcomes. This preliminary analysis identifies key success factors and barriers to effective digital education integration.",
      keywords: ["Digital Education", "Educational Technology", "Africa", "Learning Outcomes", "Teacher Training", "Infrastructure"],
      keyFindings: [
        "Digital learning initiatives show 25% improvement in student engagement when properly implemented with teacher training.",
        "Infrastructure limitations affect 60% of digital education programs, particularly in rural areas.",
        "Teacher training programs focused on pedagogical integration of technology are 3x more effective than technical training alone.",
        "Locally developed digital content shows higher student engagement than adapted international materials."
      ],
      recommendations: [
        "Invest in comprehensive teacher training programs that focus on pedagogical integration of digital technologies.",
        "Develop robust infrastructure partnerships between government, private sector, and development partners.",
        "Prioritize development of locally relevant digital educational content that reflects African contexts and languages.",
        "Establish sustainable financing mechanisms for digital education programs that include maintenance and updates."
      ],
      citation: "Al-Hassan, F. (2024). Digital Learning Technologies in African Education: Opportunities and Challenges. IRPIA Working Papers, 2024(2), 1-28.",
      relatedPublications: [
        {
          title: "Education Policy Reform in Post-Conflict Settings",
          type: "Working Paper",
          date: "October 2024",
          slug: "education-policy-post-conflict"
        }
      ]
    },
    "security-cooperation-mano-river": {
      title: "Regional Security Cooperation in the Mano River Union",
      type: "Report",
      researchArea: "Security & Peacebuilding",
      author: "Dr. Sarah Johnson",
      date: "September 2024",
      pages: "45",
      downloads: "987",
      citations: "6",
      abstract: "This comprehensive report assesses security cooperation mechanisms and their effectiveness in promoting peace and stability in the Mano River Union region. The study examines institutional frameworks, cross-border initiatives, and capacity-building programs implemented over the past decade.",
      abstractExtended: "The report provides a detailed evaluation of the Mano River Union's security cooperation framework, analyzing achievements and challenges in regional security coordination. The study includes extensive stakeholder interviews and policy analysis to assess the effectiveness of current mechanisms.",
      keywords: ["Regional Security", "Mano River Union", "Security Cooperation", "Peacebuilding", "Cross-border Security", "West Africa"],
      keyFindings: [
        "Regional security cooperation mechanisms have reduced cross-border incidents by 55% since 2015.",
        "Joint military operations show 70% success rate in addressing regional security threats.",
        "Information sharing systems between member countries have improved early warning capabilities by 45%.",
        "Capacity building programs have strengthened institutional coordination but require sustained funding."
      ],
      recommendations: [
        "Strengthen institutional coordination mechanisms with dedicated funding and technical support.",
        "Expand joint security operations with improved intelligence sharing and communication systems.",
        "Develop sustainable financing mechanisms for regional security cooperation initiatives.",
        "Enhance community-level peacebuilding programs that complement regional security efforts."
      ],
      citation: "Johnson, S. (2024). Regional Security Cooperation in the Mano River Union. IRPIA Research Reports, 2024(1), 1-45.",
      relatedPublications: [
        {
          title: "Women's Participation in Peace Processes",
          type: "Policy Brief",
          date: "November 2024",
          slug: "women-participation-peace"
        }
      ]
    },
    "education-policy-post-conflict": {
      title: "Education Policy Reform in Post-Conflict Settings",
      type: "Working Paper",
      researchArea: "Education & Public Health",
      author: "Dr. Amina Diallo",
      date: "October 2024",
      pages: "32",
      downloads: "1,432",
      citations: "7",
      abstract: "This working paper examines education system reconstruction and policy reforms in post-conflict African societies, focusing on Sierra Leone and Liberia. The study analyzes challenges and opportunities in rebuilding educational infrastructure, curriculum development, and institutional capacity.",
      abstractExtended: "The research employs comparative analysis of education sector reforms in Sierra Leone and Liberia from 2002-2024, examining policy frameworks, implementation strategies, and outcomes. The study highlights the critical role of education in post-conflict recovery and social cohesion.",
      keywords: ["Education Policy", "Post-Conflict", "Sierra Leone", "Liberia", "Education Reform", "Institutional Development"],
      keyFindings: [
        "Early investment in education infrastructure accelerates post-conflict recovery and improves long-term development outcomes.",
        "Community participation in school governance increases sustainability of education reforms by 65%.",
        "Teacher training programs focused on trauma-informed pedagogy improve student learning outcomes by 40%.",
        "Integration of peace education curricula strengthens social cohesion and reduces conflict recurrence risk."
      ],
      recommendations: [
        "Prioritize rapid restoration of basic education infrastructure with community-based management systems.",
        "Develop comprehensive teacher training programs that include trauma-informed pedagogical approaches.",
        "Integrate peace education and social cohesion curricula across all educational levels.",
        "Establish sustainable financing mechanisms that combine government, donor, and community resources."
      ],
      citation: "Diallo, A. (2024). Education Policy Reform in Post-Conflict Settings. IRPIA Working Papers, 2024(3), 1-32.",
      relatedPublications: [
        {
          title: "Digital Learning Technologies in African Education",
          type: "Working Paper",
          date: "November 2024",
          slug: "digital-learning-technologies"
        },
        {
          title: "Strengthening Primary Healthcare Systems in Rural West Africa",
          type: "Policy Brief",
          date: "September 2024",
          slug: "strengthening-primary-healthcare"
        }
      ]
    },
    "renewable-energy-west-africa": {
      title: "Renewable Energy Transition in West Africa: Policy Framework Analysis",
      type: "Working Paper",
      researchArea: "Environmental Sustainability",
      author: "Prof. David Kamau",
      date: "October 2024",
      pages: "35",
      downloads: "1,156",
      citations: "4",
      abstract: "This working paper examines renewable energy policies and their implementation across West African countries, analyzing barriers and opportunities for clean energy adoption. The study provides preliminary analysis of policy frameworks and implementation challenges.",
      abstractExtended: "The research analyzes renewable energy policies across 8 West African countries, examining regulatory frameworks, implementation strategies, and market development. The study identifies key barriers to renewable energy adoption and opportunities for policy improvement.",
      keywords: ["Renewable Energy", "West Africa", "Policy Framework", "Clean Energy", "Energy Transition", "Sustainability"],
      keyFindings: [
        "Policy frameworks for renewable energy exist in all studied countries but implementation remains inconsistent.",
        "Financial incentives for renewable energy investment vary significantly across the region.",
        "Grid integration challenges limit the effectiveness of renewable energy policies.",
        "Community engagement in renewable energy projects increases success rates by 45%."
      ],
      recommendations: [
        "Develop standardized regional frameworks for renewable energy policy implementation.",
        "Establish innovative financing mechanisms to support renewable energy investments.",
        "Invest in grid modernization to support renewable energy integration.",
        "Prioritize community-based renewable energy projects with local ownership models."
      ],
      citation: "Kamau, D. (2024). Renewable Energy Transition in West Africa: Policy Framework Analysis. IRPIA Working Papers, 2024(4), 1-35.",
      relatedPublications: [
        {
          title: "Sustainable Water Management in Sub-Saharan Africa",
          type: "Policy Brief",
          date: "October 2024",
          slug: "sustainable-water-management"
        }
      ]
    },
    "civil-society-democratic-participation": {
      title: "Civil Society and Democratic Participation in Post-Conflict Societies",
      type: "Working Paper",
      researchArea: "Governance & Democracy",
      author: "Dr. Zainab Ibrahim",
      date: "September 2024",
      pages: "42",
      downloads: "734",
      citations: "6",
      abstract: "This working paper analyzes civil society organizations' roles in democratic consolidation and citizen engagement in post-conflict African states. The study examines how civil society contributes to democratic processes and institutional development.",
      abstractExtended: "The research examines civil society's role in democratic transitions across 5 post-conflict African countries, analyzing organizational capacity, citizen engagement strategies, and institutional relationships. The study provides insights into effective civil society contributions to democratic consolidation.",
      keywords: ["Civil Society", "Democratic Participation", "Post-Conflict", "Citizen Engagement", "Democratic Consolidation", "Africa"],
      keyFindings: [
        "Civil society organizations with broad-based membership show higher impact on democratic participation.",
        "Capacity building programs for civil society increase citizen engagement by 50%.",
        "Collaboration between civil society and government institutions strengthens democratic processes.",
        "Youth-led civil society initiatives demonstrate higher innovation in democratic engagement methods."
      ],
      recommendations: [
        "Support capacity building programs for civil society organizations focused on democratic engagement.",
        "Establish formal mechanisms for civil society-government collaboration in policy processes.",
        "Invest in youth-led civil society initiatives that promote democratic participation.",
        "Develop legal frameworks that protect and enable civil society operations in post-conflict settings."
      ],
      citation: "Ibrahim, Z. (2024). Civil Society and Democratic Participation in Post-Conflict Societies. IRPIA Working Papers, 2024(1), 1-42.",
      relatedPublications: [
        {
          title: "Democratic Governance and Electoral Integrity in West Africa",
          type: "Policy Brief",
          date: "December 2024",
          slug: "democratic-governance-west-africa"
        }
      ]
    },
    "urban-migration-housing-policy": {
      title: "Urban Migration and Housing Policy in Sub-Saharan Africa",
      type: "Working Paper",
      researchArea: "Economic Development",
      author: "Dr. Samuel Nyong",
      date: "August 2024",
      pages: "31",
      downloads: "987",
      citations: "3",
      abstract: "This working paper presents preliminary findings on urbanization trends, migration patterns, and housing policy responses in major Sub-Saharan African cities. The study examines the relationship between urban migration and housing policy effectiveness.",
      abstractExtended: "The research analyzes urban migration patterns and housing policies across 6 major Sub-Saharan African cities, examining policy responses to rapid urbanization and their effectiveness in addressing housing challenges. The study provides insights for improving urban housing policies.",
      keywords: ["Urban Migration", "Housing Policy", "Sub-Saharan Africa", "Urbanization", "Migration Patterns", "Urban Development"],
      keyFindings: [
        "Rapid urbanization outpaces housing policy implementation in 80% of studied cities.",
        "Informal settlements grow 3x faster in cities with restrictive housing policies.",
        "Community-based housing initiatives show 60% higher sustainability than top-down programs.",
        "Integrated urban planning approaches reduce housing challenges by 35%."
      ],
      recommendations: [
        "Develop adaptive housing policies that can respond to rapid urbanization trends.",
        "Support community-based housing initiatives with technical and financial assistance.",
        "Implement integrated urban planning approaches that address housing, transportation, and services.",
        "Establish inclusive financing mechanisms for affordable housing development."
      ],
      citation: "Nyong, S. (2024). Urban Migration and Housing Policy in Sub-Saharan Africa. IRPIA Working Papers, 2024(5), 1-31.",
      relatedPublications: [
        {
          title: "Economic Integration Evaluation: ECOWAS Trade Performance",
          type: "Report",
          date: "August 2024",
          slug: "economic-integration-evaluation"
        }
      ]
    }
  };

  return publications[slug as keyof typeof publications] || null;
}

function getTypeColor(type: string) {
  const colors: { [key: string]: string } = {
    "Policy Brief": "#dc2626",
    "Research Paper": "#2563eb",
    "Working Paper": "#059669",
    "Report": "#7c3aed",
    "Book": "#ea580c"
  };
  return colors[type] || "#6b7280";
}

// Icon components
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}