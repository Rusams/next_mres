'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm('service_ikkt2m3', 'template_8epzsl6', form.current, {
				publicKey: 'SzP7OS3wFH-NKC2t4',
			})
			.then(
				() => {
					console.log('SUCCESS!')
					e.target.reset()
					window.location.href = '/thankyou'
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}
	return (
		<div className='bg-slate-200'>
			<div className='flex items-center justify-center p-12'>
				<div className='mx-auto w-full max-w-[550px]'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='mb-5'>
							<label
								htmlFor='name'
								className='mb-3 block text-base font-medium text-[#07074D]'
							>
								Your Name
							</label>
							<input
								type='text'
								name='user_name'
								id='name'
								placeholder='Your Name'
								className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
							/>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='email'
								className='mb-3 block text-base font-medium text-[#07074D]'
							>
								Email Address
							</label>
							<input
								type='email'
								name='user_email'
								id='email'
								placeholder='example@domain.com'
								className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
							/>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='subject'
								className='mb-3 block text-base font-medium text-[#07074D]'
							>
								Subject
							</label>
							<input
								type='text'
								name='subject'
								id='subject'
								placeholder='Enter your subject'
								className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
							/>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='message'
								className='mb-3 block text-base font-medium text-[#07074D]'
							>
								Message
							</label>
							<textarea
								rows='4'
								name='message'
								id='message'
								placeholder='Type your message'
								className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
							></textarea>
						</div>
						<div>
							<button
								type='submit'
								className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
