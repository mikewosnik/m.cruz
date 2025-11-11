
import React from 'react';
import type { ReferenceItem } from '../types';

interface ReferencesProps {
  items: ReferenceItem[];
}

const References: React.FC<ReferencesProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 text-sm">{item.title}</p>
          <p className="text-gray-600 text-sm">{item.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default References;