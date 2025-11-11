import React from 'react';
import type { Contact } from '../types';

interface ContactInfoProps {
  contact: Contact;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
  const whatsappNumber = contact.phone.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${whatsappNumber}`;
  const emailLink = `mailto:${contact.email}`;

  const buttonClasses = "group flex items-center justify-center w-full px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg";
  const iconClasses = "mr-2 text-base";

  return (
    <div className="space-y-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClasses} bg-green-500 text-white hover:bg-green-600`}
      >
        <i className={`fab fa-whatsapp ${iconClasses}`}></i>
        <span>Chame no WhatsApp</span>
      </a>
      <a
        href={emailLink}
        className={`${buttonClasses} bg-gray-700 text-white hover:bg-gray-800`}
      >
        <i className={`fas fa-envelope ${iconClasses}`}></i>
        <span>Mande um E-mail</span>
      </a>
      {contact.linkedin && (
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses} bg-blue-600 text-white hover:bg-blue-700`}
        >
          <i className={`fab fa-linkedin ${iconClasses}`}></i>
          <span>Acesse o LinkedIn</span>
        </a>
      )}
    </div>
  );
};

export default ContactInfo;