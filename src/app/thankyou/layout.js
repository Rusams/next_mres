import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import ContactHeader from '@/components/ContactHeader'
import Timeline from '@/components/Timeline'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MRES',
	description:
		'Thank you for contacting MRES, Headstone, Engraving, Death Date, Sandblasting',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{<TopBar />}
				{<Navbar />}
				{<ContactHeader />}
				{children}
				{<Timeline />}
				{<Footer />}
			</body>
		</html>
	)
}
