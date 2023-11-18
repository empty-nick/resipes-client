export interface IHeaderItems {
  name: string;
  url: string;
  id: string | number;
}

export const headerItems: IHeaderItems[] = [
  { name: 'Home', url: '/', id: 1 },
  { name: 'News', url: '/news', id: 2 },
  { name: 'Recipes', url: '/recipes', id: 3 },
  { name: 'About project', url: '/about', id: 4 }
]