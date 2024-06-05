import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import HeadstoneHeader from '@/components/HeadstoneHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MRES',
	description: 'Memorial Restoration and Engraving Services, Southern Maryland',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{<TopBar />}
				{<Navbar />}
				{<HeadstoneHeader />}
				{children}
				{<Footer />}
			</body>
		</html>
	)
}
