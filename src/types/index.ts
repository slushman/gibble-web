export interface Card {
  allergens?: string[];
  categories?: string[];
  href: string;
	title: string;
  website?: string;
}

export type RestaurantFrontmatterKey = keyof RestaurantFrontmatter;

export type Video = {
  name: string;
  url: string;
};

export type RestaurantFrontmatter = {
  allergens: string[];
  categories: string[];
  city: string;
  draft: boolean;
  layout: string;
  pubDate: string;
  slug: string;
  title: string;
  videos: Video[];
  website: string;
};

export type RestaurantPost = {
  frontmatter: RestaurantFrontmatter;
  url: string;
  file: string;
}

export type Params = Record<string, string | undefined>;
export type Props = Record<string, unknown>;
export type GetStaticPathsItem = {
	params: { [K in keyof Params]: Params[K] | number };
	props?: Props;
};
