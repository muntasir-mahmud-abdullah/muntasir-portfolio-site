import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata = {
    title: 'Muntasir Mahmud | Full-Stack Developer',
    description: 'MERN stack developer with Water Resources Engineering background, building scalable web applications for impact.',
    keywords: ['Full-Stack Developer', 'MERN Stack', 'React', 'Node.js', 'Next.js', 'Web Development'],
    authors: [{ name: 'Muntasir Mahmud' }],
    openGraph: {
        title: 'Muntasir Mahmud | Full-Stack Developer',
        description: 'MERN stack developer building scalable web applications',
        url: 'https://yoursite.com',
        siteName: 'Muntasir Mahmud Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Muntasir Mahmud Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muntasir Mahmud | Full-Stack Developer',
        description: 'MERN stack developer building scalable web applications',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`} data-theme="dark">
            <body className="antialiased bg-background text-base-content selection:bg-primary selection:text-black">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
