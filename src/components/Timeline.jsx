'use client'

const Timeline = () => {
	return (
		<div>
			<div class='w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20'>
				<h1 class='text-3xl text-center font-bold text-blue-500'>
					Timeline of What to Expect!
				</h1>
				<div class='border-l-2 mt-10'>
					{/* <!-- Card 1 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-blue-300 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 1 - Contact</h1>
							<h1 class='text-xl font-bold'>
								Walk In, Email, Text or Phone Call.
							</h1>
						</div>
						<a href='#' class='text-center text-white hover:text-gray-300'>
							On to Step 2
						</a>
					</div>

					{/* <!-- Card 2 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-pink-300 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 2 - Proof</h1>
							<h1 class='text-xl font-bold'>Proof is made for approval.</h1>
						</div>
						<a href='#' class='text-center text-white hover:text-gray-300'>
							On to Step 3
						</a>
					</div>

					{/* <!-- Card 3 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-green-300 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 3 - Approval</h1>
							<h1 class='text-xl font-bold'>
								Final revisions made. Proof Approved.
							</h1>
						</div>
						<a href='#' class='text-center text-white hover:text-gray-300'>
							On to Step 4
						</a>
					</div>

					{/* <!-- Card 4 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-purple-300 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 4 - Purchase</h1>
							<h1 class='text-xl font-bold'>
								Purchase at the Office or Online. Memorial Ordered.
							</h1>
						</div>
						<a href='#' class='text-center text-white hover:text-gray-300'>
							On to Step 5
						</a>
					</div>

					{/* <!-- Card 5 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-yellow-300 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 5 - Engraving</h1>
							<h1 class='text-xl font-bold'>
								Memorial Engraved and ready for you to come view.
							</h1>
						</div>
						<a href='#' class='text-center text-white hover:text-gray-300'>
							On to Step 6
						</a>
					</div>
					{/* <!-- Card 6 --> */}
					<div class='ml-10 relative flex items-center px-6 py-4 bg-sky-500 text-white rounded mb-10 flex-col md:flex-row'>
						{/* <!-- Dot Follwing the Left Vertical Line --> */}
						<div class='w-5 h-5 bg-sky-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0'></div>

						{/* <!-- Line that connecting the box with the vertical line --> */}
						<div class='w-10 h-1 bg-sky-200 absolute -left-10 z-0'></div>

						{/* <!-- Content that showing in the box --> */}
						<div class='flex-auto'>
							<h1 class='text-lg'>Step 6 - Installation</h1>
							<h1 class='text-xl font-bold'>
								Installation of Memorial in Cemetery
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Timeline
