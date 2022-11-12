import type { Card, RestaurantPost } from '@types';

export const checkIsHome = (url: string) => {
  const parsedUrl = new URL(url);
  return "/" === parsedUrl.pathname;
};

export const getCityCategories = (restaurants: Record<string, any>) => {
  const allCats = restaurants.map((restaurant: RestaurantPost) => restaurant.frontmatter.category).flat();
  return <string[]>[...new Set(allCats)];
}

export const getRestaurantsAsCards = (restaurants: Record<string, any>) => <Card[]>restaurants.map(
  (restaurant: RestaurantPost) => ({
    categories: restaurant.frontmatter.category.join(', '),
    href: `${restaurant.frontmatter.city}/${restaurant.frontmatter.slug}`,
    title: restaurant.frontmatter.title,
  }));
