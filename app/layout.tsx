
import "./base.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { Fira_Sans, Mulish } from 'next/font/google'
import Header from "@/components/organisms/header/Header";
import Footer from '@/components/organisms/footer/Footer';
import Script from "next/script";
import { Providers } from './providers';


import Page from "@/components/templates/page/Page";
import ContactForm from "@/components/organisms/contactform/ContactForm";
import { PostStoryblok } from "@/components/templates/post/Post";
import { PageIntroStoryblok } from "@/components/organisms/pageintro/PageIntro";
import { RichTextStoryblok } from "@/components/atoms/richtext/RichText";
import { ProjectCardsStoryblok } from "@/components/organisms/projectcard/ProjectCards";
import { HtmlEmbedStoryblok } from "@/components/atoms/htmlembed/HtmlEmbed";
import { SizeContainerStoryblok } from "@/components/atoms/sizecontainer/SizeContainer";
import { PageSectionStoryblok } from "@/components/atoms/pagesection/PageSection";


storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: {
    page: Page,
    post: PostStoryblok,
    pageIntro: PageIntroStoryblok,
    richText: RichTextStoryblok,
    projectCards: ProjectCardsStoryblok,
    htmlEmbed: HtmlEmbedStoryblok,
    sizeContainer: SizeContainerStoryblok,
    PageSection: PageSectionStoryblok,
    ContactForm: ContactForm
  }
});

export const metadata = {
  title: `Kevin Newcombe | Front-end Developer`,
  description: `The portfolio of Kevin Newcombe, front-end developer.`,
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    images: [
      { 
        url: '/images/logo-open-graph.jpg',
        width: 1200,
        height: 630,
      }
    ],
    description: 'The portfolio of Kevin Newcombe, front-end developer',
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaSans.variable} ${mulish.variable}`}>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Script
            src="/scripts/console.js"
            strategy="afterInteractive" // lazyOnload, afterInteractive
          />
          <Script
            strategy="beforeInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
