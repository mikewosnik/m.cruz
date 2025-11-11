import React from 'react';
import type { InstagramPost } from '../types';

interface InstagramFeedProps {
  posts: InstagramPost[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/item relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-sky-300"
          >
            <img
              src={post.imageUrl}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover"
            />
            {post.tags && (
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5 z-10">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-sky-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-60 transition-all duration-300 flex items-center justify-center backdrop-blur-0 group-hover/item:backdrop-blur-sm">
              <i className="fab fa-instagram text-white text-5xl opacity-0 group-hover/item:opacity-100 transform scale-50 group-hover/item:scale-100 transition-all duration-300"></i>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default InstagramFeed;