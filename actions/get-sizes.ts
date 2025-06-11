import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return [
      { id: "1", name: "Small", value: "S" },
      { id: "2", name: "Medium", value: "M" },
      { id: "3", name: "Large", value: "L" },
      { id: "4", name: "Extra Large", value: "XL" }
    ];
  }
  
  return response.json();
};

export default getSizes;