import React from 'react';
import { RenderImageProps } from 'react-photo-gallery';
import { CustomPhoto } from '../types/types';

const ImageWithTags: React.FC<RenderImageProps> = ({ photo, margin, top, left }) => {
  const customPhoto = photo as CustomPhoto;

  return (
    <div
      className="absolute rounded-lg"
      style={{
        margin,
        top: top,
        left: left,
        width: photo.width,
        height: photo.height,
      }}
    >
      <img
        src={customPhoto.src}
        alt={`รูปภาพเกี่ยวกับ ${customPhoto.hashtags.join(', ')}`}
        className="w-full h-full object-cover rounded-lg block"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs p-2 flex flex-wrap rounded-b-lg justify-center">
        {customPhoto.hashtags?.map((tag, idx) => (
          <span key={idx} className="mr-1">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageWithTags;
