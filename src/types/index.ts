export interface Card {
  categories?: string;
  href: string;
	title: string;
}

export type RestaurantFrontmatter = {
  category: string[];
  city: string;
  layout: string;
  slug: string;
  title: string;
};

export type RestaurantPost = {
  frontmatter: RestaurantFrontmatter;
  url: string;
  file: string;
}
