import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='bg-black'>
      <div className='w-full h-[300px] flex flex-col justify-center items-center relative'>
        <div className='w-full container flex flex-col justify-center items-center text-white px-4'>
          {/* First Row */}
          <h1 className='text-4xl font-bold mb-8'>Triplot</h1>

          {/* Second Row */}
          <div className='flex space-x-8 mb-8'>
            <Link href='/' className='text-white hover:text-gray-400 transition-colors duration-300'>
              Home
            </Link>
            <Link href='/contact' className='text-white hover:text-gray-400 transition-colors duration-300'>
              Contact
            </Link>
            <Link href='/blog' className='text-white hover:text-gray-400 transition-colors duration-300'>
              Blog
            </Link>
            <Link href='/about' className='text-white hover:text-gray-400 transition-colors duration-300'>
              About
            </Link>
          </div>

          {/* Third Row */}
          <div className='flex space-x-6'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-gray-400 transition-colors duration-300'
            >
              <InstagramIcon fontSize='large' />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-gray-400 transition-colors duration-300'
            >
              <FacebookIcon fontSize='large' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-gray-400 transition-colors duration-300'
            >
              <TwitterIcon fontSize='large' />
            </a>
          </div>
        </div>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-25'
          style={{ backgroundImage: "url('/phuket-beach.jpg')" }}
        ></div>
      </div>
    </footer>
  )
}

export default Footer
