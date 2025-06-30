import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Events & Conferences - IRPIA" },
    { name: "description", content: "Join IRPIA's upcoming conferences, workshops, and seminars focused on African policy research and development." },
  ];
};

export default function Events() {
  const addToCalendar = (event: typeof upcomingEvents[0]) => {
    // Format for Google Calendar
    const startDate = new Date(event.startDateTime);
    const endDate = new Date(event.endDateTime);
    
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', event.title);
    googleCalendarUrl.searchParams.append('details', event.description);
    googleCalendarUrl.searchParams.append('location', event.location);
    googleCalendarUrl.searchParams.append('dates', 
      `${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/${endDate.toISOString().replace(/-|:|\.\d+/g, '')}`
    );

    window.open(googleCalendarUrl.toString(), '_blank');
  };

  const downloadICS = (event: typeof upcomingEvents[0]) => {
    const startDate = new Date(event.startDateTime);
    const endDate = new Date(event.endDateTime);
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${startDate.toISOString().replace(/-|:|\.\d+/g, '')}`,
      `DTEND:${endDate.toISOString().replace(/-|:|\.\d+/g, '')}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${event.title.toLowerCase().replace(/\s+/g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
            alt="Events and Conferences"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white">
              Events & Conferences
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl">
              Join our community of researchers, policymakers, and development practitioners in shaping 
              the future of African policy through engaging conferences, workshops, and seminars.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upcoming Events</h3>
          <div className="flex gap-2">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              View Calendar
            </a>
            <button
              onClick={() => {
                // Subscribe to calendar feed
                const feedUrl = 'webcal://your-domain.com/api/events/feed.ics';
                window.open(feedUrl);
              }}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
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
                    {new Date(event.startDateTime).toLocaleString('default', { month: 'short' }).toUpperCase()}
                  </div>
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    {new Date(event.startDateTime).getDate()}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {new Date(event.startDateTime).getFullYear()}
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
                <Link 
                  to={`/events/${event.slug}`}
                  className="mt-3 text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {event.title}
                </Link>
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
                    {new Date(event.startDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                <Link
                  to={`/events/${event.slug}`}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Register
                </Link>
                <div className="relative group">
                  <button
                    onClick={() => {
                      const dropdown = document.getElementById(`calendar-dropdown-${event.id}`);
                      if (dropdown) {
                        dropdown.classList.toggle('hidden');
                      }
                    }}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-full"
                  >
                    Add to Calendar
                  </button>
                  <div
                    id={`calendar-dropdown-${event.id}`}
                    className="hidden absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 z-10"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => addToCalendar(event)}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Google Calendar
                      </button>
                      <button
                        onClick={() => downloadICS(event)}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        iCal / Outlook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Past Events</h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
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
                    {new Date(event.date).toLocaleDateString()}
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
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                    View Summary →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
          <h3 className="text-2xl font-bold text-white">Host an Event with IRPIA</h3>
          <p className="mt-4 text-lg text-blue-100">
            Partner with us to organize conferences, workshops, or seminars that advance African policy research.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact?type=partnership"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
            >
              Partnership Opportunities
            </Link>
            <Link
              to="/contact?type=events"
              className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Events Team
            </Link>
          </div>
        </div>
      </div>

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

const upcomingEvents = [
  {
    id: 1,
    slug: "west-african-climate-resilience-summit-2025",
    title: "West African Climate Resilience Summit 2025",
    description: "A major regional conference bringing together climate scientists, policymakers, and development practitioners to discuss innovative approaches to climate adaptation across West Africa.",
    startDateTime: "2025-03-15T09:00:00Z",
    endDateTime: "2025-03-17T17:00:00Z",
    time: "9:00 AM - 5:00 PM WAT",
    location: "Freetown, Sierra Leone",
    format: "Hybrid",
    duration: "3 days",
    type: "Conference",
    topics: ["Climate Change", "Adaptation", "Agriculture", "Policy"]
  },
  {
    id: 2,
    slug: "security-sector-reform-workshop",
    title: "Security Sector Reform Workshop",
    description: "An intensive workshop for security professionals and policymakers focusing on best practices in post-conflict security sector transformation.",
    startDateTime: "2025-02-28T10:00:00Z",
    endDateTime: "2025-02-29T16:00:00Z",
    time: "10:00 AM - 4:00 PM WAT",
    location: "Accra, Ghana",
    format: "In-person",
    duration: "2 days",
    type: "Workshop",
    topics: ["Security", "Reform", "Governance", "Peacebuilding"]
  },
  {
    id: 3,
    slug: "african-health-systems-resilience-seminar",
    title: "African Health Systems Resilience Seminar",
    description: "Monthly seminar series examining strategies for strengthening health systems across Africa in the face of emerging challenges.",
    startDateTime: "2025-02-12T14:00:00Z",
    endDateTime: "2025-02-12T15:30:00Z",
    time: "2:00 PM - 3:30 PM WAT",
    location: "Virtual",
    format: "Online",
    duration: "1.5 hours",
    type: "Seminar",
    topics: ["Health Systems", "Resilience", "Policy", "Innovation"]
  }
];

const pastEvents = [
  {
    id: 1,
    slug: "education-policy-forum-2024",
    title: "Education Policy Forum 2024",
    description: "A comprehensive review of education policies and their implementation across African nations, featuring case studies and success stories.",
    date: "2024-11-15",
    type: "Conference",
    participants: 250
  },
  {
    id: 2,
    slug: "environmental-sustainability-workshop-2024",
    title: "Environmental Sustainability Workshop 2024",
    description: "Interactive sessions on implementing sustainable environmental practices in urban development projects.",
    date: "2024-10-20",
    type: "Workshop",
    participants: 120
  },
  {
    id: 3,
    slug: "peace-and-security-symposium-2024",
    title: "Peace and Security Symposium 2024",
    description: "Expert discussions on regional security challenges and collaborative solutions for lasting peace.",
    date: "2024-09-05",
    type: "Symposium",
    participants: 180
  },
  {
    id: 4,
    slug: "agricultural-innovation-conference-2024",
    title: "Agricultural Innovation Conference 2024",
    description: "Showcasing technological innovations and sustainable practices in African agriculture.",
    date: "2024-08-15",
    type: "Conference",
    participants: 300
  }
];

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}