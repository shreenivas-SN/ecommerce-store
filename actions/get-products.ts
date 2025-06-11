import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url, {
    next: { revalidate: 0 }
  });
  
  if (!response.ok) {
    // Return mock data for development
    return [
      {
        id: "1",
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
          { id: "1", url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg" }
        ]
      },
      {
        id: "2",
        name: "Wireless Speaker",
        price: "199.99",
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
        size: { id: "1", name: "Medium", value: "M" },
        color: { id: "2", name: "White", value: "#FFFFFF" },
        images: [
          { id: "2", url: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" }
        ]
      }
    ];
  }
  
  return response.json();
};

export default getProducts;