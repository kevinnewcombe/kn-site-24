/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/organisms/page/Page";
import Teaser from "../organisms/teaser/Teaser";
import Feature from "../organisms/feature/Feature";
import Grid from "../organisms/grid/Grid";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
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
