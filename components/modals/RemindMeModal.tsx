// components/modals/RemindMeModal.tsx

import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from '../ui/Button';

interface RemindMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string | null;
}

const RemindMeModal: React.FC<RemindMeModalProps> = ({ isOpen, onClose, eventTitle }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here (e.g., API call)
    alert(`Thank you! We'll remind you about "${eventTitle}" at ${email}.`);
    setEmail('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">Remind Me</h2>
      <p className="mb-4">Enter your email to receive a reminder for &quot;{eventTitle}&quot;.</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default RemindMeModal;
