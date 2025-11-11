import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, imageUrl }) => {
  return (
    <header className="relative py-8 text-center md:text-left">
      <div className="relative z-10 flex flex-col items-center md:items-start">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full object-cover shadow-xl mb-6 ring-4 ring-white ring-offset-4 ring-offset-gray-100"
        />
        <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          {name}
        </h1>
        <p className="text-lg lg:text-xl font-light tracking-wider text-gray-500 mt-2">
          {title}
        </p>
      </div>
    </header>
  );
};

export default Header;