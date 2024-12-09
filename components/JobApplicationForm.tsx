// components/JobApplicationForm.tsx

import React, { useState } from 'react';
import { Button } from './ui/Button';

interface JobApplicationFormProps {
  jobTitle: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    coverLetter: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Prepare email content
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Hello HR Team,

I am writing to express my interest in the ${jobTitle} position at Linconwaves Innovation.

Here are my details:
- **Name:** ${formData.name}
- **Email:** ${formData.email}
- **Resume:** ${formData.resume}

**Cover Letter:**
${formData.coverLetter}

Best regards,
${formData.name}`
    );

    // Open user's email client with pre-filled details
    window.location.href = `mailto:hr@linconwavesinnovation.com?subject=${subject}&body=${body}`;

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSubmitted) {
    return <p className="text-green-500 text-lg">Thank you for applying!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="mb-2 font-medium">Name</label>
      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="mb-2 font-medium">Email</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="mb-2 font-medium">Resume URL(google drive/dropbox)</label>
      <input
        type="url"
        name="resume"
        required
        value={formData.resume}
        onChange={handleChange}
        placeholder="https://your-resume-link.com"
        className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="mb-2 font-medium">Cover Letter</label>
      <textarea
        name="coverLetter"
        required
        value={formData.coverLetter}
        onChange={handleChange}
        placeholder="Tell us why you're a great fit for this role."
        className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
};

export default JobApplicationForm;
