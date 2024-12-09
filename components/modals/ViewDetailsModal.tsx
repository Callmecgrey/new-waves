// components/modals/ViewDetailsModal.tsx

import React from 'react';
import Modal from './Modal';
import { Button } from '../ui/Button';

interface EventDetails {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  detailsLink?: string;
  zoomLink?: string;
  nextEventTime?: string;
}

interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventDetails;
}

const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({ isOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">{event.title} - Details</h2>
      <p className="mb-2">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="mb-2">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="mb-4">{event.description}</p>
      {event.zoomLink && (
        <p className="mb-2">
          <strong>Zoom Link:</strong>{' '}
          <a
            href={event.zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Join Meeting
          </a>
        </p>
      )}
      {event.nextEventTime && (
        <p className="mb-2">
          <strong>Next Event Time:</strong> {event.nextEventTime}
        </p>
      )}
      {event.detailsLink && (
        <p className="mb-4">
          <strong>More Details:</strong>{' '}
          <a
            href={event.detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Event Page
          </a>
        </p>
      )}
      <Button onClick={onClose} className="mt-4 bg-red-600 hover:bg-red-700">
        Close
      </Button>
    </Modal>
  );
};

export default ViewDetailsModal;
