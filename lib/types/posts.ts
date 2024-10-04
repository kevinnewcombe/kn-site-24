export interface PostStoryPreviewProps {
  name: string;
  uuid: string;
  published_at: string | null;
  created_at: string;
  full_slug: string;
  content: {
    description: string;
  }
}
