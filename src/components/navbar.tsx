import { navItems } from '@/constants/data'
import { appleImg, bagImg, searchImg } from '@/utils/data'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <Image src={appleImg} alt="Apple logo" width={18} height={18} />

        <ul className='flex flex-1 justify-center max-sm:hidden'>
          {
            navItems.map((item) => (
              <li
                key={item.name}
                className='px-5 text-sm cursor-pointer text-gray hover:text-white transition'
              >
                {item.name}
              </li>
            ))
          }
        </ul>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Image src={searchImg} alt='Search logo' width={18} height={18} />
          <Image src={bagImg} alt='Bag image' width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}
