export interface Subcategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  imageUrl: string; // <-- Add this line
}

export interface Artist {
  id: string;
  name: string;
  profilePicture: string;
  rating: number;
  price: number;
  categoryId: string;
  subcategoryId?: string;
  bio?: string;
}