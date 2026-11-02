import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'The Forge & Fade Co. | A cut above the ordinary', description: 'Precision cuts. Honest craft. Explore the cut menu, meet the craftsmen, and book your next chair in Setiabudi, Jakarta.' };
export const viewport: Viewport = { themeColor: '#0A0A0C', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
