import { Category, Artist } from '@/types';

export const categories: Category[] = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    subcategories: [
      { id: 'traditional', name: 'Traditional Bridal' },
      { id: 'contemporary', name: 'Contemporary Bridal' },
      { id: 'destination', name: 'Destination Wedding Looks' },
    ],
    imageUrl: 'https://i.pinimg.com/736x/02/7e/35/027e35fe1ecf68f5250584f10756ed40.jpg',
  },
  {
    id: 'party',
    name: 'Party & Glam Makeup',
    subcategories: [
      { id: 'cocktail', name: 'Cocktail Party' },
      { id: 'red-carpet', name: 'Red Carpet Glam' },
      { id: 'evening', name: 'Evening Party Looks' },
    ],
    imageUrl: 'https://i.pinimg.com/originals/75/33/85/7533858cbc91a648f2c76bfe4a372372.jpg',
  },
  {
    id: 'casual',
    name: 'Casual / Everyday Makeup',
    subcategories: [
      { id: 'office', name: 'Office Look' },
      { id: 'minimal', name: 'Minimal/Natural' },
      { id: 'day-out', name: 'Day Out/Brunch' },
    ],
    imageUrl: 'https://i.pinimg.com/736x/59/06/d7/5906d75e98b20d7fb1f8b10a8464bcd1.jpg',
  },
  {
    id: 'fashion-editorial',
    name: 'Fashion & Editorial Makeup',
    subcategories: [
      { id: 'runway', name: 'Runway' },
      { id: 'photoshoot', name: 'Photoshoot Makeup' },
      { id: 'creative', name: 'Creative/High Fashion' },
    ],
    imageUrl: 'https://i.pinimg.com/736x/1a/10/9b/1a109bb68867a540c62550cae1f2800b.jpg',
  },
  {
    id: 'festive-cultural',
    name: 'Festive / Cultural Makeup',
    subcategories: [
      { id: 'diwali-eid-christmas', name: 'Diwali/Eid/Christmas Looks' },
      { id: 'navratri-garba', name: 'Navratri/Garba' },
      { id: 'regional-styles', name: 'Regional Styles' },
    ],
    imageUrl: 'https://media.istockphoto.com/id/1174342496/photo/flawlessly-done-makeup-for-a-big-day.jpg?s=612x612&w=0&k=20&c=FshUJO2BoIpvLD2PJBskg-W2iuFAjZwbgk9QvIIzyYA=',
  },
  {
    id: 'specialty',
    name: 'Specialty Makeup',
    subcategories: [
      { id: 'hd', name: 'HD/Camera Ready' },
      { id: 'airbrush', name: 'Airbrush Makeup' },
      { id: 'theatrical', name: 'Theatrical/Stage' },
    ],
    imageUrl: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const artists: Artist[] = [
  // ... (your existing artist data remains the same)
  {
    id: 'artist-1',
    name: 'Priya Sharma',
    profilePicture: 'https://i.pinimg.com/1200x/59/51/8c/59518ce58997ecc6ac7cb62d3943ad6d.jpg', // Placeholder image
    rating: 4.8,
    price: 8000,
    categoryId: 'bridal',
  },
  {
    id: 'artist-2',
    name: 'Anjali Verma',
    profilePicture: 'https://i.pinimg.com/originals/9e/93/66/9e93664eb8f049f04b174660e0fb7977.jpg',
    rating: 5.0,
    price: 12000,
    categoryId: 'bridal',
  },
  {
    id: 'artist-3',
    name: 'Neha Kapoor',
    profilePicture: 'https://i.pinimg.com/736x/b2/6f/d1/b26fd1c73b5a65fc51fd11cee2cffb83.jpg',
    rating: 4.5,
    price: 3500,
    categoryId: 'party',
  },
  {
    id: 'artist-4',
    name: 'Rohit Singh',
    profilePicture: 'https://i.pinimg.com/originals/7b/df/26/7bdf26b8a1583daa5291359e5cc5a90a.jpg',
    rating: 4.9,
    price: 4500,
    categoryId: 'party',
  },
  {
    id: 'artist-5',
    name: 'Sana Khan',
    profilePicture: 'https://i.pinimg.com/736x/70/d5/13/70d513966fc4a75e0535045a6293fdd1.jpg',
    rating: 4.7,
    price: 6000,
    categoryId: 'specialty',
  },
  {
    id: 'artist-6',
    name: 'Alia Bhatt',
    profilePicture: 'https://i.pinimg.com/736x/30/0a/dd/300add7472a50ea69c111f47175bdede.jpg',
    rating: 4.6,
    price: 5000,
    categoryId: 'casual',
  },
  {
    id: 'artist-7',
    name: 'Sunil Patel',
    profilePicture: 'https://i.pinimg.com/736x/2e/20/b9/2e20b95ec8a8238ef2374ddc8d5c0354.jpg',
    rating: 4.9,
    price: 9000,
    categoryId: 'fashion-editorial',
  },
  {
    id: 'artist-8',
    name: 'Kareena Kapoor',
    profilePicture: 'https://i.pinimg.com/736x/dd/35/22/dd352288873d67be0474d1f0c2e96a48.jpg',
    rating: 4.7,
    price: 7000,
    categoryId: 'festive-cultural',
  },
];