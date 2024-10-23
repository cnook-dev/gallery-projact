import { tags } from '../data/tags';
import { CustomPhoto } from '../types/types';

const generateUniqueHashtags = (count: number) => {
    const possibleTags = tags;
    const selectedTags = new Set<string>();

    while (selectedTags.size < count) {
        const randomTag = possibleTags[Math.floor(Math.random() * possibleTags.length)];
        selectedTags.add(randomTag);
    }

    return Array.from(selectedTags);
};

const generatePlaceholderImages = (count: number): CustomPhoto[] => {
    return Array.from({ length: count }, (_, index) => {
        const widthPhoto = 350;// ความกว้างคงที่ 350 px
        const heightPhoto = Math.floor(Math.random() * 200) + 200; // ความสูงสุ่มระหว่าง 200 ถึง 400 px
        const numHashtags = Math.floor(Math.random() * 6) + 1; // สุ่มแฮชแท็ก 1 ถึง 6

        return {
            src: `https://placehold.co/${widthPhoto}x${heightPhoto}?text=Image+${index + 1}`,
            width: widthPhoto,
            height: heightPhoto,
            hashtags: generateUniqueHashtags(numHashtags),
        };
    });
};

export default generatePlaceholderImages;
