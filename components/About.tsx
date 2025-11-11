import React from 'react';

interface AboutProps {
  text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
  return <p className="text-gray-600 leading-relaxed text-base">{text}</p>;
};

export default About;