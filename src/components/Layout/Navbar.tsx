import Link from 'next/link'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className='bg-white'>
    <div className='w-full bg-main h-[70px] flex justify-center'>
      <div className='w-full container flex items-center justify-between space-x-6 px-4'>
        {/* MENU */}

        <div className='flex flex-row items-center space-x-2'>
            <span className='text-black font-bold'>Header</span>
          
        </div>
      </div>
    </div>
    </header>
  )
}

export default Navbar
