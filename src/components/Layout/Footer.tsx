import Link from 'next/link'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='bg-white'>
    <div className="w-full bg-main h-[88px] flex justify-center">
      <div className="w-full container flex items-center justify-between space-x-6 px-4 text-white">
        <div>© Copyright TripLot 2023 All rights reserved.</div>
        <div className="space-x-2">
            <span className="text-black font-bold">Footer</span>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
