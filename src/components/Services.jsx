'use client'
import Image from 'next/image'

function Services() {
	return (
		<div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Headstones
				</a>
				<Image
					src='/img/headstone1.png'
					width={500}
					height={500}
					alt='Arlington National Cemetery'
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
				/>
			</div>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Engraving
				</a>
				<Image
					src='/img/headstone2.png'
					width={500}
					height={500}
					alt='Arlington National Cemetery'
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
				/>
			</div>
			<div className='relative p-4'>
				<a
					href='/'
					className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
				>
					Restoration
				</a>
				<Image
					src='/img/headstone3.png'
					width={500}
					height={500}
					alt='Arlington National Cemetery'
					className='w-full h-full object-cover relative border-4 border-white shadow-lg'
				/>
			</div>
		</div>
	)
}

export default Services
