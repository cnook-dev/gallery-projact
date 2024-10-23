import React from 'react';
import { CustomPhoto, ImageWithTagsProps } from '../types/types';



const ImageWithTags: React.FC<ImageWithTagsProps> = ({ photo, layout }) => {
  const customPhoto = photo as CustomPhoto;

  return (
    <div
      className="bottom-0 h-auto absolute w-full lg:gap-0 bg-black bg-opacity-50 text-white text-[10px] md:text-xs p-2 flex flex-wrap items-center justify-center"
    >
      {customPhoto.hashtags?.map((tag, idx) => (
        <span key={idx} className="mr-1">
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default ImageWithTags;
