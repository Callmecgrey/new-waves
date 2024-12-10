// pages/jobs/[job].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import JobApplicationForm from '../../components/JobApplicationForm';
import { slugify } from '../../utils/slugify';

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
        <meta
          name="description"
          content={`Apply for the ${job.title} position at Linconwaves Innovation`}
        />
        <meta property="og:title" content={`${job.title} | Linconwaves Innovation`} />
        <meta
          property="og:description"
          content={`Apply for the ${job.title} position at Linconwaves Innovation`}
        />
        <meta property="og:image" content={`/images/og-jobs.jpg`} />
      </Head>
      <main className="bg-black text-white pt-16 min-h-screen">
        <Navbar />

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row lg:space-x-12">

              {/* Job Details (Left) */}
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                {/* Increased job title size */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{job.title}</h1>
                <p className="text-gray-400 mb-2">{job.location}</p>
                <p className="text-gray-400 mb-4">{job.type}</p>
                <p className="text-gray-300 mb-6">{job.description}</p>

                {/* Salary Range and Compensation Package */}
                <h2 className="text-2xl font-semibold mb-2">Salary Range</h2>
                <ul className="text-gray-300 mb-6">
                  <li><strong>EU:</strong> €30,000 - €50,000</li>
                  <li><strong>US:</strong> $40,000 - $65,000</li>
                  <li><strong>Rest of the World:</strong> Competitive, based on experience</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Compensation Package</h2>
                <p className="text-gray-300 mb-6">
                  We offer a comprehensive compensation package including health benefits, 
                  remote work support, professional development opportunities, and performance-based bonuses.
                </p>
              </div>

              {/* Application Form (Right) */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Apply for this Position</h2>
                <JobApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Static job data
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
  // Additional Jobs
  {
    title: 'Marketing Manager',
    location: 'London, UK',
    type: 'Full-Time',
    description:
      'Seeking an experienced Marketing Manager to lead our marketing strategies and campaigns.',
    link: '/jobs/marketing-manager',
    department: 'Marketing',
  },
  {
    title: 'Sales Executive',
    location: 'Remote',
    type: 'Full-Time',
    description:
      'Join our sales team to drive revenue and build relationships with clients worldwide.',
    link: '/jobs/sales-executive',
    department: 'Sales',
  },
  {
    title: 'Product Manager',
    location: 'Berlin, Germany',
    type: 'Full-Time',
    description:
      'Looking for a Product Manager to oversee product development and ensure alignment with business goals.',
    link: '/jobs/product-manager',
    department: 'Product Management',
  },
  {
    title: 'Human Resources Specialist',
    location: 'Remote',
    type: 'Full-Time',
    description:
      'Responsible for recruiting, employee relations, and maintaining HR policies.',
    link: '/jobs/human-resources-specialist',
    department: 'Human Resources',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => ({
    params: { job: slugify(job.title) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { job } = context.params as { job: string };

  const jobData = jobs.find((j) => slugify(j.title) === job);

  if (!jobData) {
    return { notFound: true };
  }

  return {
    props: {
      job: jobData,
    },
  };
};
