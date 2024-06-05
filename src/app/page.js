import Image from 'next/image'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<div>
			{<TopBar />}
			{<Navbar />}
			<div className='w-full h-[90vh]'>
				<Image
					src='/img/IMG_0018_2.jpg'
					width={500}
					height={500}
					alt='Arlington National Cemetery'
					className='w-full h-full object-cover brightness-50'
				/>
				<div className='max-w-[1140px] m-auto'>
					<div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
						<h1 className='font-bold text-4xl'>Memorial Restoration</h1>
						<h2 className='text-3xl pb-4 italic'>& Engraving Services</h2>
						<p>
							Located in Southern Maryland, MRES services MD, DC, VA and
							surrounding areas. MRES provides affordable Granite Headstones,
							Bronze Memorials, In-Cemetery Engraving as well as Memorial
							Restoration, Cleaning and Re-Coloring services.
						</p>
						<button className='mt-8 relative h-12 w-60 overflow-hidden border border-indigo-600 text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:underline hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-60 hover:before:opacity-80'>
							Contact us today!
						</button>
					</div>
				</div>
			</div>

			{/* Services */}

			<div className='bg-slate-200 max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
				<div className='relative p-4'>
					<a
						href='/'
						className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold hover:underline cursor-pointer hover:text-[var(--primary-dark)]'
					>
						Headstones
					</a>

					<Image
						src='img/headstone1.png'
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
						src='img/headstone2.png'
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
						src='img/headstone2.pnimg/headstone3.pngg'
						width={500}
						height={500}
						alt='Arlington National Cemetery'
						className='w-full h-full object-cover relative border-4 border-white shadow-lg'
					/>
				</div>
			</div>

			{/* Subsection */}

			<div class='bg-white py-24 sm:py-16'>
				<div class='mx-auto max-w-7xl px-6 lg:px-8'>
					<div class='mx-auto max-w-2xl sm:text-center'>
						<h2 class='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Simple and Straight to the Point!
						</h2>
						<p class='mt-6 text-lg leading-8 text-gray-600'>
							Not sure where to start, contact us below or choice from the
							images above. They will help in guiding you where you need to go!
						</p>
					</div>
					<div class='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
						<div class='p-8 sm:p-10 lg:flex-auto'>
							<h3 class='text-2xl font-bold tracking-tight text-gray-900'>
								Questions? No pressure, just answers!
							</h3>
							<p class='mt-6 text-base leading-7 text-gray-600'>
								We've all suffered lose but not everyone has experience in how
								or where to start. Here at MRES, we'll answer any and all
								questions to help this process be as painless as posssible.
								Simple start with a phone call, text or email.
							</p>
							<div class='mt-10 flex items-center gap-x-4'>
								<h4 class='flex-none text-sm font-semibold leading-6 text-indigo-600'>
									Here are a few suggestions on what to include
								</h4>
								<div class='h-px flex-auto bg-gray-100'></div>
							</div>
							<ul class='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
								<li class='flex gap-x-3'>
									<svg
										class='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fill-rule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clip-rule='evenodd'
										/>
									</svg>
									Name of Cemetery
								</li>
								<li class='flex gap-x-3'>
									<svg
										class='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fill-rule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clip-rule='evenodd'
										/>
									</svg>
									Granite Color? Gray is most common but not only choice
									available.
								</li>
								<li class='flex gap-x-3'>
									<svg
										class='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fill-rule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clip-rule='evenodd'
										/>
									</svg>
									Upright Monument or Flat Marker?
								</li>
								<li class='flex gap-x-3'>
									<svg
										class='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fill-rule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clip-rule='evenodd'
										/>
									</svg>
									Designs? We can engrave just about any design you can think
									of.
								</li>
							</ul>
						</div>
						<div class='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
							<div class='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
								<div class='mx-auto max-w-xs px-8'>
									<p class='text-base font-semibold text-gray-600'>
										Your Questions.....answered!
									</p>
									<p class='mt-6 flex items-baseline justify-center gap-x-2'>
										<span class='text-4xl font-bold tracking-tight text-gray-900'>
											Contact Us
										</span>
									</p>
									<a
										href='/'
										class='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										Email Us Here
									</a>
									<p class='mt-6 text-xs leading-5 text-gray-600'>
										You can also call or text us at <br />{' '}
										<span className='font-semibold text-md'>240-685-1979</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{<Footer />}
		</div>
	)
}
