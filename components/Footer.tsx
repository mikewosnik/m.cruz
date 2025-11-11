import React from 'react';

interface FooterProps {
  address: string;
  name: string;
}

const Footer: React.FC<FooterProps> = ({ address, name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative pt-16 pb-8 text-center text-gray-500 text-sm mt-16 border-t border-gray-200">
      <div className="relative z-10">
        <p className="whitespace-pre-wrap mb-4">{address}</p>
        <p>© {currentYear} {name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;