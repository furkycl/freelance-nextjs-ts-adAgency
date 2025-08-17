export interface Project {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  gallery: string[];
  slug: {
    current: string;
  };
}
