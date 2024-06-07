import Image from 'next/image'
import Link from 'next/link'

const Headstones = () => {
	return (
		<div>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col'>
						<div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
							<h1 className='sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0'>
								Granite Headstones
							</h1>
							<p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
								Granite headstones come in many different shapes and sizes. Some
								cemeteries have certain restrictions and some do not. Granite
								headstones are flush to the ground while some range from a few
								inches to a few feet above ground. ground.
							</p>
						</div>
					</div>
					<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/flat.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Flat Markers
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Flat markers lay flush to the ground. They may memorialize more
								than one person and are available with a telscoping vase as well
								as a portrait. Some common sizes are 24x12, 36x12, 16x24 and
								28x16, while all are 4" thick.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/bevel.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Bevel Markers
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Similar in size to a Flat marker. Bevels lay on a concrete
								foundation above ground. Typical Bevels are 6" high in the front
								and 8" tall in the back. However, they can be cut to any
								dimension you'd like. Also known as pillow tops or hickey.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/slant.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Slant Memorials
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Slants are also placed on a concrete foundation. Slants range
								between 16" and 18" tall and can be any length. They are squatty
								in nature, usually 10" thick are the bottom and slant upwards to
								3" thick at the top.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className='container mx-auto h-1 bg-gray-800 rounded overflow-hidden'>
					<div className='w-24 h-full bg-indigo-500'></div>
				</div>
				<div className='container px-5 py-16 mx-auto'>
					<div className='flex flex-col'></div>
					<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/single_upright.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Single Uprights
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Single uprights refer to the plot. They are usually the
								dimensions of a "single" or "double depth" grave. Typically, a
								24" tall upright contains one name and dates, however, the
								upright can be made taller to accomodate additional names and
								dates. Vases are common additions to uprights.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/double_upright.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Companion Uprights
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Companion or "Double" upright refers to side by side plots.
								These uprights are the most traditional memorials in a cemetery
								and are still extremely popular today. They provide enough room
								for multiple names and dates as well as designs to reflect
								each's interests and hobbies.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
						<div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
							<div className='rounded-lg h-64 overflow-hidden'>
								<Image
									src='/img/bench.JPEG'
									width={500}
									height={500}
									priority={true}
									alt='content'
									className='object-cover object-center h-full w-full'
								/>
							</div>
							<h2 className='text-xl font-medium title-font text-white mt-5'>
								Cemetery Benches
							</h2>
							<p className='text-base leading-relaxed mt-2'>
								Cemetery Benches have gained in popularity over the years. They
								provide a practical solution to visiting the cemetery, a place
								to sit while visiting. These have also become very popular as a
								"memorial" for places other than cemeteries, such as parks and
								homes.
							</p>
							<Link
								href='/'
								className='text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-100'
							>
								Learn More
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Headstones
