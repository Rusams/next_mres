import { Inter } from 'next/font/google'
import ContactHeader from '@/components/ContactHeader'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MRES-Contact',
	description:
		'Contact Memorial Restoration and Engraving Services, Headstones, Southern Maryland',
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
