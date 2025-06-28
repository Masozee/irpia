import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Events & Conferences - IRPIA" },
    { name: "description", content: "Join IRPIA's upcoming conferences, workshops, and seminars focused on African policy research and development." },
  ];
};

export default function Events() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Events & Conferences
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join our community of researchers, policymakers, and development practitioners at our upcoming events.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upcoming Events</h3>
            <div className="flex gap-2">
              <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                View Calendar
              </button>
              <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                Subscribe to Updates
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="relative flex flex-col rounded-2xl border border-gray-200 p-8 dark:border-gray-700 lg:flex-row lg:items-center"
              >
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {event.date.month}
                    </div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                      {event.date.day}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      {event.date.year}
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:ml-8 lg:mt-0 lg:flex-1">
                  <div className="flex items-center gap-x-2">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      event.type === 'Conference' 
                        ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                        : event.type === 'Workshop'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {event.format} • {event.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-x-1">
                      <MapPinIcon className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-x-1">
                      <ClockIcon className="h-4 w-4" />
                      {event.time}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {event.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3 lg:ml-8 lg:mt-0 lg:flex-col">
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                    Register
                  </button>
                  <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Past Events</h3>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative rounded-lg border border-gray-200 p-6 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      event.type === 'Conference' 
                        ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                        : event.type === 'Workshop'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {event.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {event.participants} participants
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                      View Summary →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white">Host an Event with IRPIA</h3>
            <p className="mt-4 text-lg text-blue-100">
              Partner with us to organize conferences, workshops, or seminars that advance African policy research.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50">
                Partnership Opportunities
              </button>
              <button className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Contact Events Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const upcomingEvents = [
  {
    id: 1,
    title: "West African Climate Resilience Summit 2025",
    description: "A major regional conference bringing together climate scientists, policymakers, and development practitioners to discuss innovative approaches to climate adaptation across West Africa.",
    date: { month: "MAR", day: "15", year: "2025" },
    time: "9:00 AM - 5:00 PM WAT",
    location: "Freetown, Sierra Leone",
    format: "Hybrid",
    duration: "3 days",
    type: "Conference",
    topics: ["Climate Change", "Adaptation", "Agriculture", "Policy"]
  },
  {
    id: 2,
    title: "Security Sector Reform Workshop",
    description: "An intensive workshop for security professionals and policymakers focusing on best practices in post-conflict security sector transformation.",
    date: { month: "FEB", day: "28", year: "2025" },
    time: "10:00 AM - 4:00 PM WAT",
    location: "Accra, Ghana",
    format: "In-person",
    duration: "2 days",
    type: "Workshop",
    topics: ["Security", "Reform", "Governance", "Peacebuilding"]
  },
  {
    id: 3,
    title: "African Health Systems Resilience Seminar",
    description: "Monthly seminar series examining strategies for strengthening health systems across Africa in the face of emerging challenges.",
    date: { month: "FEB", day: "12", year: "2025" },
    time: "2:00 PM - 3:30 PM WAT",
    location: "Online",
    format: "Virtual",
    duration: "1.5 hours",
    type: "Seminar",
    topics: ["Health Systems", "Resilience", "Public Health", "Policy"]
  }
];

const pastEvents = [
  {
    id: 1,
    title: "Education Innovation Forum 2024",
    description: "Annual forum exploring innovative approaches to improving educational access and quality across rural Africa.",
    date: "Nov 2024",
    type: "Conference",
    participants: 150
  },
  {
    id: 2,
    title: "Environmental Governance Workshop",
    description: "Intensive workshop on natural resource management and environmental policy implementation.",
    date: "Oct 2024",
    type: "Workshop",
    participants: 45
  },
  {
    id: 3,
    title: "Policy Integration Masterclass",
    description: "Advanced training for researchers on translating academic research into actionable policy recommendations.",
    date: "Sep 2024",
    type: "Workshop",
    participants: 30
  },
  {
    id: 4,
    title: "African Development Finance Symposium",
    description: "High-level symposium examining innovative financing mechanisms for African development projects.",
    date: "Aug 2024",
    type: "Seminar",
    participants: 80
  }
];

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}