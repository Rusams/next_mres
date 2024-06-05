import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Subsection from '@/components/Subsection'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import RestorationHeader from '@/components/RestorationHeader'

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
				{<RestorationHeader />}
				{children}
				{<Footer />}
			</body>
		</html>
	)
}
