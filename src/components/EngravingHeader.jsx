'use client'
import Image from 'next/image'

const EngravingHeader = () => {
	return (
		<div className='w-full h-[35vh]'>
			<Image
				src='/img/IMG_0003_2.jpg'
				width={500}
				height={500}
				alt='Arlington National Cemetery'
				className='w-full h-full object-cover brightness-50'
			/>
			<div className='max-w-[1140px] m-auto'>
				<div className='absolute top-[20%] w-full md:-[20%] max-w-[1200px] text-center flex flex-col text-white p-4'>
					<h1 className='font-bold text-4xl'>Sandblast Engraving</h1>
					<p className='pt-8'>In Cemetery Final Dates</p>
				</div>
			</div>
		</div>
	)
}

export default EngravingHeader
