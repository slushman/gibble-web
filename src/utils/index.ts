import type * as types from '@types';

export const capitalizeFirst = (stringToCapitalize: string) => stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);

export const unique = (data: any[]) => Array.from(new Set(data));

export const allergenSlugs = (allergens: string[], city?: string, restaurants?: Record<string, any>[]) => {
  return allergens.map((allergen) => ({
    allergen,
    city,
    restaurants,
    slug: slugify(allergen),
  }));
};

export const categorySlugs = (categories: string[]) => {
  return categories.map((category) => ({
    category,
    slug: slugify(category),
  }));
};

export const citySlugs = (cities: string[]) => {
  return cities.map((city) => ({
    city,
    slug: slugify(city),
  }));
};

export const checkIsHome = (url: string) => {
  const parsedUrl = new URL(url);
  return "/" === parsedUrl.pathname;
};

export const excludeDrafts = (posts: Record<string, any>) => {
  return posts.filter((post: types.RestaurantPost) => post.frontmatter?.draft !== true);
};

export const filterRestaurantsByAllergen = (restaurants: Record<string, any>, allergen: string) => restaurants.filter(
  (restaurant: types.RestaurantPost) => restaurant.frontmatter.allergens.includes(allergen)
);

export const getUniqueFrontmatterFromPosts = (posts: Record<string, any>, frontmatter: types.RestaurantFrontmatterKey) => {
  const published = excludeDrafts(posts);
  return unique(published.map((post: types.RestaurantPost) => post.frontmatter[frontmatter]).flat());
};

export const getAllergens = (posts: Record<string, any>) => {
  const uniqueCities = getUniqueFrontmatterFromPosts(posts, 'city');
  const uniqueFullCities = citySlugs(uniqueCities);

  const uniqueAllergens = getUniqueFrontmatterFromPosts(posts, 'allergens');
  const uniqueFullAllergens = allergenSlugs(uniqueAllergens);

  return uniqueFullCities.map(({ city, slug: citySlug }) => uniqueFullAllergens.map(({ allergen, slug: allergenSlug }) => ({
    params: {
      city: citySlug,
      allergen: allergenSlug,
    },
    props: { allergen, allergenSlug, city, citySlug, posts },
  })));
};

export const getAllergenPostsByCity = (posts: Record<string, any>, allergen: string) => {
  const published = excludeDrafts(posts);
  const allergenPosts = published.filter(({ frontmatter }: types.RestaurantPost) =>
    frontmatter.allergens.includes(allergen)
  );
  return sortPostsByName(allergenPosts);
};

export const getAllergensFromCityRestaurants = (restaurants: Record<string, any>) => {
  const allRestaurantAllergens = restaurants.map((restaurant: types.RestaurantPost) => restaurant.frontmatter.allergens);
  return sortAlpha(unique(allRestaurantAllergens.flat()));
};

export const getCategories = (posts: Record<string, any>) => {
  const published = excludeDrafts(posts);
  const allCats: string[] = published.map((post: types.RestaurantPost) => post.frontmatter.categories).flat();
  const uniqueFullCats = categorySlugs(unique(allCats));

  return uniqueFullCats.map(({ category, slug }) => ({
    params: { category: slug },
    props: { category, slug },
  }));
};

export const getCategoriesFromPosts = (posts: Record<string, any>): string[] => {
  const published = excludeDrafts(posts);
  return unique(published.map((post: types.RestaurantPost) => post.frontmatter.categories).flat());
};

export const getCategoryPosts = (posts: Record<string, any>, category: string) => {
  const published = excludeDrafts(posts);
  const categoryPosts = published.filter(({ frontmatter }: types.RestaurantPost) =>
    frontmatter.categories.includes(category)
  );
  return sortPostsByName(categoryPosts);
};

export const getCitiesFromPosts = (posts: Record<string, any>): string[] => {
  const published = excludeDrafts(posts);
  return unique(published.map((post: types.RestaurantPost) => post.frontmatter.city).flat());
};

export const getCityCategories = (restaurants: Record<string, any>) => {
  const allCats = restaurants.map((restaurant: types.RestaurantPost) => restaurant.frontmatter.categories).flat();
  return sortAlpha(unique(allCats));
}

export const getRestaurantsAsCards = (restaurants: Record<string, any>) => <types.Card[]>restaurants.map(
  (restaurant: types.RestaurantPost) => ({
    allergens: restaurant.frontmatter.allergens,
    categories: restaurant.frontmatter.categories,
    href: `${restaurant.url}`,
    title: restaurant.frontmatter.title,
    website: restaurant.frontmatter.website,
  })
);

export const slugify = (string: string) => string.toLowerCase().replace(" ", "-");

export const sortAlpha = (arrayToSort: string[]) => arrayToSort.sort((a: string, b: string) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

export const sortPostsByDate = (posts: Record<string, any>) => {
  return posts.sort(
    (a: types.RestaurantPost, b: types.RestaurantPost) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf(),
  );
};

export const sortPostsByName = (posts: Record<string, any>) => {
  return posts.sort(
    (a: types.RestaurantPost, b: types.RestaurantPost) => {
      if (a.frontmatter.title < b.frontmatter.title) return -1;
      if (a.frontmatter.title > b.frontmatter.title) return 1;
      return 0;
    }
  );
};
