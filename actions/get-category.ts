import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return {
      id: id,
      name: "Electronics",
      billboard: {
        id: "1",
        label: "Latest Electronics",
        imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
      }
    };
  }
  
  return response.json();
};

export default getCategory;