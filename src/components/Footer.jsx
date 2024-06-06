'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<div>
			<div className='bg-[var(--primary-dark)]'>
				<footer className=' max-w-[1240px] mx-auto p-4 md:flex md:items-center md:justify-between md:p-6'>
					<span className='text-sm text-white sm:text-center '>
						© 2024
						<Link href='/' className='hover:underline' target='_blank'>
							Memorial Restoration & Engraving Services™
						</Link>
					</span>
					<ul className='flex flex-wrap items-center mt-3 sm:mt-0'>
						<li>
							<Link
								href='/headstones'
								className='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Headstones
							</Link>
						</li>
						<li>
							<Link
								href='/engraving'
								className='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Engraving
							</Link>
						</li>
						<li>
							<Link
								href='/restoration'
								className='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Restoration
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='text-sm text-white hover:underline '
							>
								Contact
							</Link>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	)
}

export default Footer
