import Link from 'next/link'

interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = () => {
  return (
    <footer className='bg-black from-indigo-500 via-purple-500 to-pink-500'>
      <div className='w-full h-[120px] flex justify-center items-center relative'>
        <div className='w-full container flex flex-col justify-center items-center text-white px-4'>
          <div className='text-center mb-2'>
            <span className='text-lg font-bold'>© Copyright Triplot 2023</span>
            <span className='text-sm ml-2'>All rights reserved.</span>
          </div>
          <div className='flex space-x-4'>
            <Link href='/about' className='text-white hover:text-indigo-200 transition-colors duration-300'>
              About
            </Link>
            <Link href='/destinations' className='text-white hover:text-indigo-200 transition-colors duration-300'>
              Destinations
            </Link>
            <Link href='/contact' className='text-white hover:text-indigo-200 transition-colors duration-300'>
              Contact
            </Link>
          </div>
        </div>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-25'
          style={{ backgroundImage: "url('/travel-background.jpg')" }}
        ></div>
      </div>
    </footer>
  )
}

export default Copyright
