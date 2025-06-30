import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

type Event = {
  id: number;
  slug: string;
  title: string;
  description: string;
  type: string;
  posterImage?: string;
} & (
  | {
      // Upcoming event
      startDateTime: string;
      endDateTime: string;
      location: string;
      format: string;
      duration: string;
      topics: string[];
      speakers?: {
        name: string;
        role: string;
        organization: string;
        image: string;
      }[];
      schedule?: {
        day: string;
        date: string;
        sessions: {
          time: string;
          title: string;
          description: string;
        }[];
      }[];
      videoUrl?: string;
      registrationUrl?: string;
      virtualAttendanceUrl?: string;
    }
  | {
      // Past event
      date: string;
      participants: number;
    }
);

// Mock database of events - replace with your actual data fetching logic
const eventsDatabase: Record<string, Event> = {
  "west-african-climate-resilience-summit-2025": {
    id: 1,
    slug: "west-african-climate-resilience-summit-2025",
    title: "West African Climate Resilience Summit 2025",
    description: "A major regional conference bringing together climate scientists, policymakers, and development practitioners to discuss innovative approaches to climate adaptation across West Africa.",
    startDateTime: "2025-03-15T09:00:00Z",
    endDateTime: "2025-03-17T17:00:00Z",
    location: "Freetown, Sierra Leone",
    format: "Hybrid",
    duration: "3 days",
    type: "Conference",
    topics: ["Climate Change", "Adaptation", "Agriculture", "Policy"],
    posterImage: "/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg",
    speakers: [
      {
        name: "Dr. Aminata Diallo",
        role: "Climate Policy Expert",
        organization: "West African Climate Center",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Prof. Samuel Osei",
        role: "Agricultural Scientist",
        organization: "University of Ghana",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ],
    schedule: [
      {
        day: "Day 1",
        date: "March 15, 2025",
        sessions: [
          {
            time: "09:00 - 10:30",
            title: "Opening Ceremony",
            description: "Welcome addresses and keynote speeches"
          },
          {
            time: "11:00 - 12:30",
            title: "Climate Resilience Strategies",
            description: "Panel discussion on successful adaptation strategies"
          }
        ]
      },
      {
        day: "Day 2",
        date: "March 16, 2025",
        sessions: [
          {
            time: "09:00 - 10:30",
            title: "Agricultural Innovation",
            description: "Presentations on climate-smart agriculture"
          },
          {
            time: "11:00 - 12:30",
            title: "Policy Implementation",
            description: "Workshop on policy frameworks"
          }
        ]
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    registrationUrl: "https://example.com/register",
    virtualAttendanceUrl: "https://example.com/virtual"
  },
  "security-sector-reform-workshop": {
    id: 2,
    slug: "security-sector-reform-workshop",
    title: "Security Sector Reform Workshop",
    description: "An intensive workshop for security professionals and policymakers focusing on best practices in post-conflict security sector transformation.",
    startDateTime: "2025-02-28T10:00:00Z",
    endDateTime: "2025-02-29T16:00:00Z",
    location: "Accra, Ghana",
    format: "In-person",
    duration: "2 days",
    type: "Workshop",
    topics: ["Security", "Reform", "Governance", "Peacebuilding"],
    posterImage: "/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg",
    speakers: [
      {
        name: "Col. James Mensah",
        role: "Security Expert",
        organization: "African Security Institute",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
      }
    ],
    schedule: [
      {
        day: "Day 1",
        date: "February 28, 2025",
        sessions: [
          {
            time: "10:00 - 11:30",
            title: "Security Sector Overview",
            description: "Introduction to security sector reform"
          }
        ]
      }
    ],
    registrationUrl: "https://example.com/register"
  },
  "african-health-systems-resilience-seminar": {
    id: 3,
    slug: "african-health-systems-resilience-seminar",
    title: "African Health Systems Resilience Seminar",
    description: "Monthly seminar series examining strategies for strengthening health systems across Africa in the face of emerging challenges.",
    startDateTime: "2025-02-12T14:00:00Z",
    endDateTime: "2025-02-12T15:30:00Z",
    location: "Virtual",
    format: "Online",
    duration: "1.5 hours",
    type: "Seminar",
    topics: ["Health Systems", "Resilience", "Policy", "Innovation"],
    posterImage: "/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg",
    registrationUrl: "https://example.com/register",
    virtualAttendanceUrl: "https://example.com/virtual"
  },
  "education-policy-forum-2024": {
    id: 4,
    slug: "education-policy-forum-2024",
    title: "Education Policy Forum 2024",
    description: "A comprehensive review of education policies and their implementation across African nations, featuring case studies and success stories.",
    date: "2024-11-15",
    type: "Conference",
    participants: 250,
    posterImage: "/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
  },
  "environmental-sustainability-workshop-2024": {
    id: 5,
    slug: "environmental-sustainability-workshop-2024",
    title: "Environmental Sustainability Workshop 2024",
    description: "Interactive sessions on implementing sustainable environmental practices in urban development projects.",
    date: "2024-10-20",
    type: "Workshop",
    participants: 120,
    posterImage: "/images/bg/alex-radelich-rtCfGTI7nCA-unsplash.jpg"
  },
  "peace-and-security-symposium-2024": {
    id: 6,
    slug: "peace-and-security-symposium-2024",
    title: "Peace and Security Symposium 2024",
    description: "Expert discussions on regional security challenges and collaborative solutions for lasting peace.",
    date: "2024-09-05",
    type: "Symposium",
    participants: 180,
    posterImage: "/images/bg/rohan-reddy-Ae4qJD-IdL8-unsplash-768x507.jpg"
  },
  "agricultural-innovation-conference-2024": {
    id: 7,
    slug: "agricultural-innovation-conference-2024",
    title: "Agricultural Innovation Conference 2024",
    description: "Showcasing technological innovations and sustainable practices in African agriculture.",
    date: "2024-08-15",
    type: "Conference",
    participants: 300,
    posterImage: "/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"
  }
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const event = eventsDatabase[params.slug as keyof typeof eventsDatabase];
  
  if (!event) {
    throw new Response("Event not found", { status: 404 });
  }

  return json({ event });
};

export default function EventDetail() {
  const { event } = useLoaderData<typeof loader>();

  // Check if it's an upcoming event (has startDateTime) or past event (has date)
  const isUpcomingEvent = 'startDateTime' in event;

  const renderMainContent = () => {
    if (isUpcomingEvent) {
      return (
        <>
          {/* Video Section */}
          {event.videoUrl && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Event Preview</h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={event.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          )}

          {/* Topics Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Topics</h2>
            <div className="flex flex-wrap gap-2">
              {event.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/20 dark:text-blue-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Speakers Section */}
          {event.speakers && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.speakers.map((speaker) => (
                  <div key={speaker.name} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{speaker.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{speaker.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{speaker.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Section */}
          {event.schedule && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Event Schedule</h2>
              <div className="space-y-8">
                {event.schedule.map((day) => (
                  <div key={day.date}>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {day.day} - {day.date}
                    </h3>
                    <div className="space-y-4">
                      {day.sessions.map((session) => (
                        <div key={session.time} className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="w-32 flex-shrink-0">
                            <p className="font-medium text-gray-900 dark:text-white">{session.time}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{session.title}</h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{session.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      );
    } else {
      // Past event
      const eventDate = new Date(event.date);
      
      return (
        <>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Event Summary</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Event Highlights</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{event.participants}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{event.type}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Event Type</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">SUCCESS</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Event Status</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Outcomes</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Enhanced collaboration between researchers and policymakers
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Development of actionable policy recommendations
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Strengthened regional networks and partnerships
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Knowledge sharing on best practices and innovations
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  };

  const renderSidebar = () => {
    if (isUpcomingEvent) {
      const startDate = new Date(event.startDateTime);
      const endDate = new Date(event.endDateTime);

      return (
        <div className="sticky top-8 space-y-6">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Event Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  {startDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  <br />
                  {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{event.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Format</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{event.format}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{event.duration}</dd>
              </div>
            </dl>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              {event.registrationUrl && (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Register Now
                </a>
              )}
              {event.virtualAttendanceUrl && (
                <a
                  href={event.virtualAttendanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                >
                  Join Virtual Session
                </a>
              )}
              <div className="relative">
                <button
                  onClick={() => {
                    const dropdown = document.getElementById('calendar-dropdown');
                    if (dropdown) {
                      dropdown.classList.toggle('hidden');
                    }
                  }}
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  Add to Calendar
                </button>
                <div
                  id="calendar-dropdown"
                  className="hidden absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 z-10"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
                        googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
                        googleCalendarUrl.searchParams.append('text', event.title);
                        googleCalendarUrl.searchParams.append('details', event.description);
                        googleCalendarUrl.searchParams.append('location', event.location);
                        googleCalendarUrl.searchParams.append('dates', 
                          `${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/${endDate.toISOString().replace(/-|:|\.\d+/g, '')}`
                        );
                        window.open(googleCalendarUrl.toString(), '_blank');
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      Google Calendar
                    </button>
                    <button
                      onClick={() => {
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
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      iCal / Outlook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Event Coordinator:</span>
                <p className="text-gray-600 dark:text-gray-400">events@irpia.org</p>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Phone:</span>
                <p className="text-gray-600 dark:text-gray-400">+232 XX XXX XXXX</p>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Address:</span>
                <p className="text-gray-600 dark:text-gray-400">84 Bato, Regent, Freetown, Sierra Leone</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Past event sidebar
      const eventDate = new Date(event.date);
      
      return (
        <div className="sticky top-8 space-y-6">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Event Details</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  {eventDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{event.type}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Participants</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{event.participants}</dd>
              </div>
            </dl>
          </div>

          {/* Related Events */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Related Events</h3>
            <div className="space-y-3">
              <Link to="/events" className="block text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
                View Upcoming Events →
              </Link>
              <Link to="/events" className="block text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
                Browse Past Events →
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-black/80 to-black/40">
        <div className="absolute inset-0 -z-10">
          <img
            src={event.posterImage || "/images/bg/james-wiseman-vYGR3b_naPA-unsplash.jpg"}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-x-2 mb-6">
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                event.type === 'Conference' 
                  ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                  : event.type === 'Workshop'
                  ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                  : 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
              }`}>
                {event.type}
              </span>
              {isUpcomingEvent && (
                <span className="text-sm text-gray-200">
                  {event.format}
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white mb-6">
              {event.title}
            </h1>
            <p className="text-xl leading-8 text-gray-200 max-w-3xl">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {renderMainContent()}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {renderSidebar()}
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

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}