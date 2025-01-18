import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Search, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    product: string;
  };
}

async function getProduct(slug: string) {
  const query = `*[_type == "food" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.product);

  if (!product) {
    notFound();
  }

  return (
    <div className='min-h-screen'>
        {/* navbar */}
        <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
            Food<span className="text-orange-500">tuck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            
            <Link href="/" className="text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-500">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-500">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-orange-500">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            
            <button className="text-white hover:text-orange-500">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link
            href="/account">
            <button className="text-white hover:text-orange-500">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            </Link>
            <Link href="/cart">
            <button className="text-white hover:text-orange-500">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            </Link>
            </div>
          </div>
      </nav>
       {/* Hero Section */}
       <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/hero-section.png')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Product Details</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Product Detail</span>
          </div>
        </div>
      </div>
        </header>
        {/* navbar end */}
        
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src={urlFor(product.image).url() || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice > product.price && (
                  <p className="text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            <p className="text-gray-700">{product.description}</p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {product.tags}
              </span>
              <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                product.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {product.available ? 'Available' : 'Not Available'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

