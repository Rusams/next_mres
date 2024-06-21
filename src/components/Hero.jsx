'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='w-full h-[90vh]'>
			<Image
				src='/img/IMG_0018_2.jpg'
				width={500}
				height={500}
				priority={true}
				alt='Arlington National Cemetery'
				className='w-full h-full object-cover brightness-50'
			/>
			<div className='max-w-[1140px] m-auto'>
				<div className='absolute top-[30%] w-full md:-[40%] max-w-[600px] h-full flex flex-col text-white p-4'>
					<h1 className='font-bold text-4xl'>Memorial Restoration</h1>
					<h2 className='text-3xl pb-4 italic'>& Engraving Services</h2>
					<p>
						Located in Southern Maryland, MRES services MD, DC, VA and
						surrounding areas. MRES provides affordable Granite Headstones,
						Bronze Memorials, In-Cemetery Engraving as well as Memorial
						Restoration, Cleaning and Re-Coloring services.
					</p>
					<Link
						href='/contact'
						className='py-2 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] mt-8 relative h-12 w-60 overflow-hidden border border-indigo-600 text-white shadow-2xl rounded text-center hover:text-[var(--primary-light)]'
					>
						Contact us today!
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
