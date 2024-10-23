import React, { useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import generatePlaceholderImages from '../utils/generatePlaceholderImages';
import { CustomPhoto } from '../types/types';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { tags } from '../data/tags';
//import ImageWithTags from './ImageWithTags';
import { Button } from '@nextui-org/react';
import ImageWithTags from './ImageWithTags';


const initialPhotos: CustomPhoto[] = generatePlaceholderImages(40); // ข้อมูลรูปภาพเริ่มต้น 40 รูป
const generateMorePhotos = (): CustomPhoto[] => generatePlaceholderImages(20); // เพิ่มรูปภาพเทีละ 20 รูป

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<CustomPhoto[]>(initialPhotos);
  const [filteredPhotos, setFilteredPhotos] = useState<CustomPhoto[]>(initialPhotos);
  const [hasMore, setHasMore] = useState(true);
  const [selectedTag, setSelectedTag] = useState('');
  const loadMorePhotos = () => {
    const newPhotos = generateMorePhotos();
    if (newPhotos.length > 0) {
      setPhotos(prev => [...prev, ...newPhotos]);
      setFilteredPhotos(prev => [...prev, ...newPhotos]);
    } else {
      setHasMore(false);
    }
  };

  useInfiniteScroll(loadMorePhotos, hasMore);
  const filterByTag = (tag: string) => {
    if (tag === selectedTag) {
      setFilteredPhotos(photos);
      setSelectedTag('');
    } else {
      setFilteredPhotos(photos.filter(photo => photo.hashtags.includes(tag)));
      setSelectedTag(tag);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap rounded-md justify-center gap-2 my-4 md:my-4">
        {tags.map(tag => (
          <Button
            key={tag}
            onClick={() => filterByTag(tag)}
            className={`px-4 py-2 rounded-full ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            <span className='text-xs md:text-sm lg:text-base'>#{tag}</span>
          </Button>
        ))}
      </div>

      <div className="relative my-4 py-5 px-4 md:p-4 md:mx-20 lg:mx-5">
        <MasonryPhotoAlbum
          photos={filteredPhotos}
          render={{
            extras: (_, { photo }) => (
              <ImageWithTags photo={photo} layout={{
                width: photo.width,
                height: photo.height,
              }} />
            ),
          }}
        />

        {!hasMore && <p className="text-center mt-4">ไม่มีรูปภาพเพิ่มเติม</p>}
      </div>
    </div>
  );
};

export default PhotoGallery;
