// components/JobApplicationForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from './ui/Button';

// List of all countries
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

interface JobApplicationFormProps {
  jobTitle: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle }) => {
  // Steps for the form
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    openToRemote: '',
    coverLetter: '',
    workType: '',
    sponsorshipVisa: '',
    agreement: false,
    resumeLink: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // For checkboxes we used before, now replaced with selects, so no checkbox logic needed.
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    // If in future you have a checkbox, you'd do:
    // setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.workType ||
      !formData.agreement
    ) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.resumeLink) {
      setError('Please provide a link to your resume.');
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Hello HR Team,

I am writing to express my interest in the ${jobTitle} position at Linconwaves Innovation.

Here are my details:
- **Name:** ${formData.name}
- **Email:** ${formData.email}
- **Phone Number:** ${formData.phone}
- **Country of Residence:** ${formData.country}
- **Open to Remote Work:** ${formData.openToRemote}
- **Preferred Work Type:** ${formData.workType}
- **Sponsorship Visa Requirement:** ${formData.sponsorshipVisa}

**Resume:** ${formData.resumeLink}

**Cover Letter:**
${formData.coverLetter}

Best regards,
${formData.name}`
    );

    window.location.href = `mailto:hr@linconwavesinnovation.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.workType ||
      !formData.agreement
    ) {
      setError('Please fill in all required fields in Step 1.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setError('');
  };

  if (isSubmitted) {
    return <p className="text-green-500 text-lg">Thank you for applying!</p>;
  }

  return (
    <form onSubmit={step === 1 ? handleNext : handleSubmit} className="flex flex-col">
      
      {/* Progress Indicator */}
      <div className="flex mb-6">
        <div className={`flex-1 h-2 rounded ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`flex-1 h-2 rounded ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      </div>
      <div className="flex mb-6 justify-between">
        <span className={`text-sm ${step >= 1 ? 'text-blue-500' : 'text-gray-300'}`}>Step 1</span>
        <span className={`text-sm ${step >= 2 ? 'text-blue-500' : 'text-gray-300'}`}>Step 2</span>
      </div>

      {step === 1 && (
        <>
          {/* Full Name */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="name">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone Number */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="phone">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10,15}"
            title="Please enter a valid phone number."
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Country of Residence */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="country">
            Country of Residence<span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          {/* Open to Remote Work - changed to dropdown */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="openToRemote">
            Open to Remote Work<span className="text-red-500">*</span>
          </label>
          <select
            id="openToRemote"
            name="openToRemote"
            required
            value={formData.openToRemote}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Preferred Work Type */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="workType">
            Preferred Work Type<span className="text-red-500">*</span>
          </label>
          <select
            id="workType"
            name="workType"
            required
            value={formData.workType}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white"
          >
            <option value="">Select Work Type</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Sponsorship Visa Requirement - changed to dropdown */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="sponsorshipVisa">
            Would you need a sponsorship visa?<span className="text-red-500">*</span>
          </label>
          <select
            id="sponsorshipVisa"
            name="sponsorshipVisa"
            required
            value={formData.sponsorshipVisa}
            onChange={handleChange}
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Agreement to Processing User Information */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={(e) => setFormData((prev) => ({ ...prev, agreement: e.target.checked }))}
              required
              className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded"
            />
            <label htmlFor="agreement" className="ml-2 text-gray-300">
              I agree to the processing of my personal information.
              <span className="text-red-500">*</span>
            </label>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Next Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Proceeding...' : 'Next'}
            </Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          {/* Resume Link */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="resumeLink">
            Resume Link<span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="resumeLink"
            name="resumeLink"
            required
            value={formData.resumeLink}
            onChange={handleChange}
            placeholder="https://your-resume-link.com"
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Cover Letter */}
          <label className="mb-2 font-medium text-gray-300" htmlFor="coverLetter">
            Cover Letter<span className="text-red-500">*</span>
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            required
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit for this role."
            className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {isSubmitted && <p className="text-green-500 mb-4">Thank you for applying!</p>}

          <div className="flex justify-between">
            <Button type="button" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default JobApplicationForm;