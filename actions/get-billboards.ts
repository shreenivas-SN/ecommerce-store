import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return {
      id: id,
      label: "Welcome to Modern Store",
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
    };
  }
  
  return response.json();
};

export default getBillboards;