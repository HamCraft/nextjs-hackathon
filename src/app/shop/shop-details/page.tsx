
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
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
            
            <Link href="/" className="text-white hover:text-orange-500">
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
            <Link href="/shop" className="text-orange-500">
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
          <h1 className="mb-4 text-5xl font-bold text-white">Shop Details</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Shop details</span>
          </div>
        </div>
      </div>
    </header>
    {/* navbar end */}

    <div className='lg:flex justify-center mt-7 mb-7 p-3'>
    <Image
    src="/details-1.1.png"
    alt='shop'
    height={500}
    width={500}
    className=''/>
    <Image
    src="/details-1.2.png"
    alt='shop'
    height={500}
    width={500}
    className=''/>
</div>

<div className='flex justify-center mt-7 mb-7 p-2 pr-12'>
    <Image
    src="/details-2.png"
    alt='shop'
    height={458}
    width={1320}
    className=''/>
</div>

<div className='flex justify-center mt-7 p-2 '>
    <Image
    src="/details-31.png"
    alt='shop'
    height={401}
    width={1320}
    className=''/>
</div>

<div className='lg:flex justify-center mt-7 mb-7 p-14 mx-auto'>
    <Image
    src="/details-32.png"
    alt='shop'
    height={401}
    width={500}
    className=''/>
     <Image
    src="/details-33.png"
    alt='shop'
    height={401}
    width={500}
    className=''/>
     <Image
    src="/details-34.png"
    alt='shop'
    height={401}
    width={500}
    className=''/>
    <Image
    src="/details-35.png"
    alt='shop'
    height={401}
    width={500}
    className=''/>
</div>


























    </div>
  )
}
