import React from 'react';

interface HashtagFilterProps {
  hashtags: string[];
  selected: string[];
  onClick: (hashtag: string) => void;
}

const HashtagFilter: React.FC<HashtagFilterProps> = ({ hashtags, selected, onClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {hashtags.map(tag => (
        <span
          key={tag}
          className={`px-3 py-1 rounded-full cursor-pointer ${
            selected.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => onClick(tag)}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default HashtagFilter;
