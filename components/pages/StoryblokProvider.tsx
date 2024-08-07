/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/organisms/page/Page";
import Teaser from "@/components/organisms/teaser/Teaser";
import Feature from "@/components/organisms/feature/Feature";
import Grid from "@/components/organisms/grid/Grid";
import PageIntro from "@/components/organisms/pageintro/PageIntro";

const components = {

  PageIntro: PageIntro
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components
});

 
import { ReactNode } from 'react';

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return children;
}
