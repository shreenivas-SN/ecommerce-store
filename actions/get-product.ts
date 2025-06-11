import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return {
      id: id,
      name: "Premium Headphones",
      price: "299.99",
      isFeatured: true,
      category: {
        id: "1",
        name: "Electronics",
        billboard: {
          id: "1",
          label: "Latest Electronics",
          imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
        }
      },
      size: { id: "1", name: "One Size", value: "OS" },
      color: { id: "1", name: "Black", value: "#000000" },
      images: [
        { id: "1", url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg" },
        { id: "2", url: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" }
      ]
    };
  }
  
  return response.json();
};

export default getProduct;