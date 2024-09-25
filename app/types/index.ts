export interface Article {
  _id: string;
  mainImage: string;
  title: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  editorial: {
    name: string;
  };
}
