// pages/events.tsx

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Button } from '../components/ui/Button';
import RemindMeModal from '../components/modals/RemindMeModal';
import ViewDetailsModal from '../components/modals/ViewDetailsModal';

// Define the Event interface
interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  detailsLink?: string;
  zoomLink?: string;
  nextEventTime?: string;
}

export default function Events() {
  const events = {
    upcoming: [
      {
        title: 'Tech Innovators Conference 2025',
        date: 'March 25, 2025',
        location: 'Osaka, Japan',
        image: '/images/event-tech-conference.jpg',
        description:
          'Join industry leaders and innovators as they share insights on the future of technology.',
      },
      {
        title: 'AI for Good Summit',
        date: 'June 15, 2025',
        location: 'London, United Kingdom',
        image: '/images/event-ai-summit.jpg',
        description:
          'Explore how AI can drive meaningful change across industries and society.',
      },
    ],
    ongoing: [
      {
        title: 'Web3 Hackathon',
        date: 'Ongoing until December 31, 2024',
        location: 'Global (Virtual)',
        image: '/images/event-hackathon.jpg',
        description:
          'Collaborate with developers worldwide to create decentralized solutions.',
        detailsLink: 'https://linkedin.com/web3-hackathon-weosks',
        zoomLink: 'https://zoom.us/j/123456789',
        nextEventTime: 'Next Workshop: December 22, 2024',
      },
    ],
    past: [
      {
        title: 'Future of Work With AI',
        date: 'September 18, 2023',
        location: 'Limassol, Cyprus',
        image: '/images/event-future-work.jpg',
        description:
          'Discover insights on how technology is transforming the modern workplace.',
      },
      {
        title: 'Innovators Meet 2023',
        date: 'May 10, 2023',
        location: 'Berlin, Germany',
        image: '/images/event-innovators-meet.jpg',
        description:
          'A gathering of innovators to discuss breakthroughs in technology and design.',
      },
    ],
  };

  // State for Remind Me Modal
  const [isRemindMeOpen, setIsRemindMeOpen] = useState<boolean>(false);
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState<string | null>(null);

  // State for View Details Modal
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState<boolean>(false);
  const [selectedOngoingEvent, setSelectedOngoingEvent] = useState<Event | null>(null);

  return (
    <>
      <Head>
        <title>Events | Linconwaves Innovation</title>
        <meta
          name="description"
          content="Explore our upcoming, ongoing, and past events. Join us to stay at the forefront of innovation and technology."
        />
        <meta property="og:title" content="Events | Linconwaves Innovation" />
        <meta
          property="og:description"
          content="Explore our upcoming, ongoing, and past events. Join us to stay at the forefront of innovation and technology."
        />
        <meta property="og:image" content="/images/og-events.jpg" />
      </Head>
      <main className="bg-black text-white pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-center px-6 md:px-0">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Events
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay connected with our events to learn, network, and innovate
              with the brightest minds in technology.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Upcoming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Events
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {events.upcoming.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="relative w-full h-64 mb-6">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <Button
                    onClick={() => {
                      setSelectedUpcomingEvent(event.title);
                      setIsRemindMeOpen(true);
                    }}
                  >
                    Remind Me
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Events */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Ongoing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                Events
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {events.ongoing.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="relative w-full h-64 mb-6">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <Button
                    onClick={() => {
                      setSelectedOngoingEvent(event);
                      setIsViewDetailsOpen(true);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Past{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Events
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {events.past.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="relative w-full h-64 mb-6">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <button
                    disabled
                    className="px-4 py-2 bg-red-600 text-white rounded-full cursor-not-allowed opacity-50"
                  >
                    Event Ended
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Remind Me Modal */}
        <RemindMeModal
          isOpen={isRemindMeOpen}
          onClose={() => setIsRemindMeOpen(false)}
          eventTitle={selectedUpcomingEvent}
        />

        {/* View Details Modal */}
        {selectedOngoingEvent && (
          <ViewDetailsModal
            isOpen={isViewDetailsOpen}
            onClose={() => setIsViewDetailsOpen(false)}
            event={selectedOngoingEvent}
          />
        )}

        <Footer />
      </main>
    </>
  );
}
