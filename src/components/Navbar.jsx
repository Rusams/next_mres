'use client'
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
			{/** Big Screen Menu List Items */}
			<ul className='hidden sm:flex max-w-[1400px] m-auto px-4'>
				<li>
					<Link href='/' className='hover:underline'>
						Home
					</Link>
				</li>
				<li>
					<Link href='/headstones' className='hover:underline'>
						Headstones
					</Link>
				</li>
				<li>
					<Link href='/engraving' className='hover:underline'>
						Engraving
					</Link>
				</li>
				<li>
					<Link href='/restoration' className='hover:underline'>
						Restoration
					</Link>
				</li>
				<li>
					<Link href='/contact' className='hover:underline'>
						Contact
					</Link>
				</li>
			</ul>
			<div className='sm:hidden ml-8'>
				<h1 className='text-xl'>Mobile Menu</h1>
			</div>
			<div onClick={handleNav} className='sm:hidden z-10'>
				<FaBars size={20} className='mr-4 cursor-pointer' />
			</div>
			<div
				onClick={handleNav}
				className={
					nav
						? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
						: 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
				}
			>
				{/*  Mobile Menu List Items */}
				<ul className='h-full w-full text-center pt-12'>
					<li className='text-2xl py-8'>
						<Link href='/' className='hover:underline hover:font-bold'>
							Home
						</Link>
					</li>
					<li className='text-2xl py-8'>
						<Link
							href='/headstones'
							className='hover:underline hover:font-bold'
						>
							Headstones
						</Link>
					</li>
					<li className='text-2xl py-8'>
						<Link href='/engraving' className='hover:underline hover:font-bold'>
							Engraving
						</Link>
					</li>
					<li className='text-2xl py-8'>
						<Link
							href='/restoration'
							className='hover:underline hover:font-bold'
						>
							Restoration
						</Link>
					</li>
					<li className='text-2xl py-8'>
						<Link href='/contact' className='hover:underline hover:font-bold'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
