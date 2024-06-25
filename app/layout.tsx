import "./base.scss";
import { Fira_Sans, Mulish, IBM_Plex_Mono } from 'next/font/google'
import Header from "@/components/base/header/Header";
import Footer from '@/components/base/footer/Footer';
export const metadata = {
  title: `Kevin Newcombe`,
  description: `Kevin Newcombe, Front-end developer`,
};

const firaSans = Fira_Sans({
  weight: ['500', '600'],
  subsets: ['latin'], 
  variable: '--font-firasans',
});


const mulish = Mulish({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-mulish',
});




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${firaSans.variable} ${mulish.variable}` }>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
