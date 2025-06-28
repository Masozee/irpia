import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Publications & News - IRPIA" },
    { name: "description", content: "Explore IRPIA's latest research publications, policy briefs, and news updates on African development and policy issues." },
  ];
};

export default function Publications() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Publications & News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Stay informed with our latest research findings, policy analyses, and commentary on critical African issues.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">Featured Publications</h3>
            <div className="space-y-8">
              {featuredPublications.map((publication) => (
                <article
                  key={publication.id}
                  className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 p-6 dark:border-gray-700"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500 dark:text-gray-400">{publication.date}</time>
                    <span className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${publication.category === 'Policy Brief' 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300'
                      : publication.category === 'Research Report'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300'
                      : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300'
                    }`}>
                      {publication.category}
                    </span>
                  </div>
                  <div className="group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <span className="absolute inset-0" />
                      {publication.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {publication.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {publication.authors.join(', ')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">Authors</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                      Read more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Latest News</h3>
              <div className="space-y-6">
                {latestNews.map((news) => (
                  <div key={news.id} className="group relative">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <span className="absolute inset-0" />
                      {news.title}
                    </h3>
                    <time className="mt-1 text-xs text-gray-500 dark:text-gray-400">{news.date}</time>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {news.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe to Updates</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Stay informed about our latest research and policy insights.
              </p>
              <form className="mt-4">
                <div className="flex gap-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Publication Categories</h3>
              <div className="space-y-3">
                {publicationCategories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center">
                    <button className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      {category.name}
                    </button>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featuredPublications = [
  {
    id: 1,
    title: "Climate Resilience Strategies for West African Agriculture",
    description: "An comprehensive analysis of climate adaptation mechanisms and their implementation across agricultural communities in West Africa, with particular focus on Sierra Leone, Ghana, and Senegal.",
    date: "Dec 2024",
    category: "Research Report",
    authors: ["Dr. Emmanuel Conteh", "Dr. Isata Bangura"],
    tags: ["Climate Change", "Agriculture", "West Africa", "Adaptation"]
  },
  {
    id: 2,
    title: "Post-Conflict Security Sector Reform: Lessons from Sierra Leone",
    description: "A policy brief examining the successes and challenges of security sector reform in post-conflict Sierra Leone, with recommendations for other African nations emerging from conflict.",
    date: "Nov 2024",
    category: "Policy Brief",
    authors: ["Dr. Joseph Mansaray", "Dr. Aminata Kamara"],
    tags: ["Security", "Post-Conflict", "Sierra Leone", "Reform"]
  },
  {
    id: 3,
    title: "Educational Access and Quality in Rural Africa: A Comparative Study",
    description: "This journal article presents findings from a multi-country study examining barriers to educational access and strategies for improving educational quality in rural African communities.",
    date: "Oct 2024",
    category: "Journal Article",
    authors: ["Dr. Fatima Sesay", "Dr. Mohamed Turay"],
    tags: ["Education", "Rural Development", "Access", "Quality"]
  },
  {
    id: 4,
    title: "Health System Strengthening in the Context of Climate Change",
    description: "A policy analysis examining how climate change impacts health systems across Africa and proposing adaptive strategies for building resilient health infrastructure.",
    date: "Sep 2024",
    category: "Policy Brief",
    authors: ["Dr. Mohamed Turay", "Dr. Fatima Sesay"],
    tags: ["Health Systems", "Climate Change", "Resilience", "Infrastructure"]
  }
];

const latestNews = [
  {
    id: 1,
    title: "IRPIA Hosts Regional Conference on Climate Adaptation",
    date: "Jan 8, 2025",
    summary: "Leading researchers and policymakers gather in Freetown to discuss innovative approaches to climate adaptation across West Africa."
  },
  {
    id: 2,
    title: "New Partnership with African Development Bank",
    date: "Jan 5, 2025",
    summary: "IRPIA announces strategic partnership to enhance research capacity and policy impact across the continent."
  },
  {
    id: 3,
    title: "Dr. Aminata Kamara Featured in BBC Africa Interview",
    date: "Jan 2, 2025",
    summary: "Executive Director discusses IRPIA's research on security challenges and governance innovations in West Africa."
  },
  {
    id: 4,
    title: "Research Fellowship Program Opens for 2025",
    date: "Dec 20, 2024",
    summary: "IRPIA launches expanded fellowship program for early-career researchers focusing on African policy challenges."
  },
  {
    id: 5,
    title: "Policy Brief Influences Sierra Leone Climate Strategy",
    date: "Dec 15, 2024",
    summary: "Government adopts key recommendations from IRPIA's climate resilience research in national adaptation planning."
  }
];

const publicationCategories = [
  { name: "Policy Briefs", count: 23 },
  { name: "Research Reports", count: 18 },
  { name: "Journal Articles", count: 34 },
  { name: "Working Papers", count: 15 },
  { name: "Commentary", count: 42 },
  { name: "Conference Papers", count: 28 }
];