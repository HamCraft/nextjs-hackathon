'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { client } from '@/sanity/lib/client'

interface FoodItem {
  _id: string
  name: string
  slug: { current: string }
  price: number
  image: string
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<FoodItem[]>([])
  const router = useRouter()

  const handleSearch = async () => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchResults = await client.fetch<FoodItem[]>(
      `*[_type == "food" && name match $searchQuery]{
        _id,
        name,
        slug,
        price,
        "image": image.asset->url
      }[0...5]`,
      { searchQuery: `*${query}*` }
    )

    setResults(searchResults)
  }

  const handleProductClick = (slug: string) => {
    router.push(`/product/${slug}`)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search for food items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {results.length > 0 && (
        <div className="bg-white shadow-md rounded-md">
          {results.map((food) => (
            <div
              key={food._id}
              className="flex items-center gap-4 p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
              onClick={() => handleProductClick(food.slug.current)}
            >
              <Image
                src={food.image || "/placeholder.svg"}
                alt={food.name}
                width={50}
                height={50}
                className="object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{food.name}</h3>
                <p className="text-sm text-gray-600">${food.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

