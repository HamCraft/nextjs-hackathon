import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Food {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  category: string;
  price: number;
  originalPrice: number;
  tags: string;
  image: SanityImageSource;
  description: string;
  available: boolean;
}

async function getFoods(): Promise<Food[]> {
  return client.fetch(`*[_type == "food"] {
    _id,
    name,
    slug,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available
  }`);
}

export default async function FoodList() {
  const foods = await getFoods();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {foods.map((food) => (
        <Link 
          href={`/product/${food.slug.current}`} 
          key={food._id}
          className="bg-white rounded-lg overflow-hidden shadow-lg h-fit hover:shadow-xl transition-shadow"
        >
          {food.image && (
            <div className="relative h-60">
              <Image
                src={urlFor(food.image).url() || "/placeholder.svg"}
                alt={food.name}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-4 space-y-2 h-fit">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{food.name}</h2>
              <p className="text-sm text-gray-600">{food.category}</p>
              <p className="text-sm text-gray-700 line-clamp-2">{food.description}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-lg text-gray-800">
                  ${food.price.toFixed(2)}
                </span>
                {food.originalPrice > food.price && (
                  <span className="text-sm text-gray-500 line-through">
                    ${food.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                {food.tags}
              </span>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                food.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {food.available ? 'Available' : 'Not Available'}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

