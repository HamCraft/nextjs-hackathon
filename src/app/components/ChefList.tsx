import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Food {
  _id: string;
  name: string;
  position: string,
  experience:number,
  specialty: string,
  image: SanityImageSource;
  description: string;
  available: boolean;
}

async function getChef(): Promise<Food[]> {
  return client.fetch(`*[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available,
  }`);
}

export default async function ChefList() {
  const chefs = await getChef();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {chefs.map((chef) => (
        <div key={chef._id} className="bg-white rounded-lg overflow-hidden shadow-lg h-fit">
          {chef.image && (
            <div className="relative h-60">
              <Image
                src={urlFor(chef.image).url() || "/placeholder.svg"}
                alt={chef.name}
                fill
                className=" object-contain"
              />
            </div>
          )}
          <div className="p-4 space-y-2 h-fit">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{chef.name}</h2>
              <p className="text-sm text-gray-600">{chef.position} Years Of Experience</p>
              <p className="text-sm text-gray-700 line-clamp-2">{chef.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                {chef.specialty}
              </span>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                chef.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {chef.available ? 'Available' : 'Not Available'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

