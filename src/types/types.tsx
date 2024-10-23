// ประกาศประเภทของข้อมูลรูปภาพที่มีฟิลด์ hashtags
export interface CustomPhoto {
    src: string;
    width: number;
    height: number;
    hashtags: string[];
  }
  
  export interface ImageWithTagsProps {
    photo: CustomPhoto;
    layout: { width: number; height: number };
  }