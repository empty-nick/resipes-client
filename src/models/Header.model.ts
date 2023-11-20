export interface IHeaderItems {
  name: string;
  url: string;
  id: string | number;
}

export const headerItems: IHeaderItems[] = [
  { name: 'Home', url: '/', id: 1 },
  { name: 'News', url: '/news', id: 2 },
  { name: 'Recipes', url: '/recipe', id: 3 },
  { name: 'About project', url: '/about', id: 4 },
]

export const headerItemsForAuthUsers:IHeaderItems[] = [
  { name: 'History', url: '/history', id: 5 },
  { name: 'Favourites', url: '/favourites', id: 6 },
]