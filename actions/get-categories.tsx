import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return [
      {
        id: "1",
        name: "Electronics",
        billboard: {
          id: "1",
          label: "Latest Electronics",
          imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
        }
      },
      {
        id: "2", 
        name: "Fashion",
        billboard: {
          id: "2",
          label: "Fashion Collection",
          imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
        }
      }
    ];
  }
  
  return response.json();
};

export default getCategories;