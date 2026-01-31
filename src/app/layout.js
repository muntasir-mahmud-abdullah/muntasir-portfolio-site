import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '[Your Name] | Full-Stack Developer',
    description: 'MERN stack developer with Water Resources Engineering background, building scalable web applications for impact.',
    keywords: ['Full-Stack Developer', 'MERN Stack', 'React', 'Node.js', 'Next.js', 'Web Development'],
    authors: [{ name: '[Your Name]' }],
    openGraph: {
        title: '[Your Name] | Full-Stack Developer',
        description: 'MERN stack developer building scalable web applications',
        url: 'https://yoursite.com',
        siteName: '[Your Name] Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: '[Your Name] Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '[Your Name] | Full-Stack Developer',
        description: 'MERN stack developer building scalable web applications',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
