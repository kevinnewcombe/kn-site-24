import "./base.scss";
import { Fira_Sans, Mulish } from 'next/font/google'
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
  weight: ['400', '500'],
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
          <main>{children}</main>
      </body>
    </html>
  );
}
