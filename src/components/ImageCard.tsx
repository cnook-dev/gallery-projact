import React from 'react';
import { Image } from '@nextui-org/react';

interface ImageCardProps {
    id: number;
    src: string;
    hashtags: string[];
    width: number;
    height: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, hashtags }) => {
    return (
        <div className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-md">
            <Image
                src={src}
                alt="Placeholder"
                className="w-full h-auto rounded-lg object-contain"
            />
            <div className='t2'>
                {hashtags.map((tag, idx) => (
                    <p
                        key={idx}
                        className="text-sm cursor-pointer text-blue-500"
                    >
                        #{tag}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
