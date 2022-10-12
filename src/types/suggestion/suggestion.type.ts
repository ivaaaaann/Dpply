export interface Suggestion {
  id: number;
  image: string;
  name: string;
  title: string;
  created_at: string;
  tags: string[];
  content: string;
  like_count: number;
  comments: string[];
  watch_count: number;
}

export type SuggestionPreview = Omit<
  Suggestion,
  "content" | "like_count" | "comments" | "watch_count"
>;
