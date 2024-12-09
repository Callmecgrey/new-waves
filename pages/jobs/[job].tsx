// pages/jobs/[job].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import JobApplicationForm from '../../components/JobApplicationForm';

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
  link: string;
  department: string;
}

interface JobDetailProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailProps) {
  return (
    <>
      <Head>
        <title>{job.title} | Linconwaves Innovation</title>
        <meta name="description" content={`Apply for the ${job.title} position at Linconwaves Innovation`} />
        <meta property="og:title" content={`${job.title} | Linconwaves Innovation`} />
        <meta property="og:description" content={`Apply for the ${job.title} position at Linconwaves Innovation`} />
        <meta property="og:image" content={`/images/jobs/${job.title.toLowerCase().replace(/ /g, '-')}.jpg`} />
      </Head>
      <main className="bg-black text-white pt-16 min-h-screen">
        <Navbar />

        {/* Job Detail Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="relative w-full md:w-1/2 h-64 md:h-96 mb-6 md:mb-0">
                <Image
                  src={`/images/jobs/${job.title.toLowerCase().replace(/ /g, '-')}.jpg`}
                  alt={job.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="md:ml-12 w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
                <p className="text-gray-400 mb-2">{job.location}</p>
                <p className="text-gray-400 mb-4">{job.type}</p>
                <p className="text-gray-300 mb-6">{job.description}</p>
              </div>
            </div>

            {/* Application Form */}
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Apply for this Position</h2>
              <JobApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Fetch all job titles for static paths
export const getStaticPaths: GetStaticPaths = async () => {
  const jobs: Job[] = [
    {
      title: 'Full-Stack Developer',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'We are looking for a skilled Full-Stack Developer to join our dynamic team. You’ll work on cutting-edge technologies to build scalable solutions.',
      link: '/jobs/full-stack-developer',
      department: 'Engineering',
    },
    {
      title: 'AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description:
        'Join us as an AI Engineer and help design and deploy AI-powered solutions that transform industries.',
      link: '/jobs/ai-engineer',
      department: 'Engineering',
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Contract',
      description:
        'We’re looking for a creative UX/UI Designer to design intuitive and user-friendly interfaces for our applications.',
      link: '/jobs/ux-ui-designer',
      department: 'Design',
    },
    {
      title: 'Cloud Architect',
      location: 'New York, NY',
      type: 'Full-Time',
      description:
        'As a Cloud Architect, you’ll design and manage scalable cloud-based infrastructures for enterprise-level solutions.',
      link: '/jobs/cloud-architect',
      department: 'Engineering',
    },
  ];

  const paths = jobs.map((job) => ({
    params: { job: job.title.toLowerCase().replace(/ /g, '-') },
  }));

  return { paths, fallback: false };
};

// Fetch job data based on the slug
export const getStaticProps: GetStaticProps = async (context) => {
  const { job } = context.params as { job: string };

  const jobs: Job[] = [
    {
      title: 'Full-Stack Developer',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'We are looking for a skilled Full-Stack Developer to join our dynamic team. You’ll work on cutting-edge technologies to build scalable solutions.',
      link: '/jobs/full-stack-developer',
      department: 'Engineering',
    },
    {
      title: 'AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description:
        'Join us as an AI Engineer and help design and deploy AI-powered solutions that transform industries.',
      link: '/jobs/ai-engineer',
      department: 'Engineering',
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Contract',
      description:
        'We’re looking for a creative UX/UI Designer to design intuitive and user-friendly interfaces for our applications.',
      link: '/jobs/ux-ui-designer',
      department: 'Design',
    },
    {
      title: 'Cloud Architect',
      location: 'New York, NY',
      type: 'Full-Time',
      description:
        'As a Cloud Architect, you’ll design and manage scalable cloud-based infrastructures for enterprise-level solutions.',
      link: '/jobs/cloud-architect',
      department: 'Engineering',
    },
  ];

  const jobData = jobs.find(
    (j) => j.title.toLowerCase().replace(/ /g, '-') === job
  );

  if (!jobData) {
    return { notFound: true };
  }

  return {
    props: {
      job: jobData,
    },
  };
};
