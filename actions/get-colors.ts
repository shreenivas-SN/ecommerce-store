import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return [
      { id: "1", name: "Black", value: "#000000" },
      { id: "2", name: "White", value: "#FFFFFF" },
      { id: "3", name: "Red", value: "#FF0000" },
      { id: "4", name: "Blue", value: "#0000FF" }
    ];
  }
  
  return response.json();
};

export default getColors;