"use client";

import Image from "next/image";
import { useState } from "react";

interface TestimonialCardProps {
  name: string;  
  title: string;
  rating: number;
  content: string;
}

const TestimonialCard = ({
  name,
  title,
  rating,
  content,
}: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-[400px] w-full">
      <div className="flex flex-col gap-4">
        {/* Rating Display */}
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        </div>
        {/* Content Display */}
        <p className={`text-sm text-gray-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
          {content}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-blue-500 mt-2 inline-block"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      {/* User Info */}
      <div className="mt-6 flex items-center gap-4">
        <Image
          src="/img/avatar.jpeg"
          alt="User avatar"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
