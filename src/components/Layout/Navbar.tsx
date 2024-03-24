import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon }
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header className='bg-white fixed w-full z-50'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <p className='text-2xl font-bold text-gray-900'>Trip Lot</p>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Link href='/'>
            <span className='text-sm font-semibold leading-6 text-gray-900'>Home</span>
          </Link>
          <Link href='/Contact'>
            <span className='text-sm font-semibold leading-6 text-gray-900'>Contact</span>
          </Link>
          <Link href='/Admin'>
            <span className='text-sm font-semibold leading-6 text-gray-900'>Admin</span>
          </Link>

        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {/* <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a> */}
        </div>
      </nav>
     
    </header>
  )
}

export default Navbar
