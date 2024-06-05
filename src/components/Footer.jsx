'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<div>
			<div class='bg-[var(--primary-dark)]'>
				<footer class=' max-w-[1240px] mx-auto p-4 md:flex md:items-center md:justify-between md:p-6'>
					<span class='text-sm text-white sm:text-center '>
						© 2024{' '}
						<Link href='/' class='hover:underline' target='_blank'>
							Memorial Restoration & Engraving Services™
						</Link>
					</span>
					<ul class='flex flex-wrap items-center mt-3 sm:mt-0'>
						<li>
							<Link
								href='/headstones'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Headstones
							</Link>
						</li>
						<li>
							<Link
								href='/engraving'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Engraving
							</Link>
						</li>
						<li>
							<Link
								href='/restoration'
								class='mr-4 text-sm text-white hover:underline md:mr-6 '
							>
								Restoration
							</Link>
						</li>
						<li>
							<Link href='/contact' class='text-sm text-white hover:underline '>
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
