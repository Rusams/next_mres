'use client'
import { GiTombstone } from 'react-icons/gi'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import Link from 'next/link'

const TopBar = () => {
	return (
		<div className='flex justify-between items-center px-4 py-2 max-w-[1400px] m-auto'>
			<div className='flex items-center'>
				<GiTombstone size={30} className='text-[var(--primary-dark)] mr-2' />
				<Link href='/' className='text-2xl font-bold text-gray-700'>
					MRES
				</Link>
			</div>
			<div className='flex'>
				<div className='hidden md:flex items-center px-6'>
					<AiOutlineClockCircle
						size={20}
						className='mr-2 text-[var(--primary-dark)]'
					/>
					<p className='text-sm text-gray-700'>9AM - 4PM</p>
				</div>
				<div className='hidden md:flex items-center px-6'>
					<AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
					<p className='text-sm text-gray-700'>240-685-1979</p>
				</div>
				<Link href='/contact'>
					<button>Get a Free Quote</button>
				</Link>
			</div>
		</div>
	)
}

export default TopBar
