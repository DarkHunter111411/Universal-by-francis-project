
export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  featuredTrack: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
}

export enum PaymentMethod {
  VISA = 'VISA',
  MOBILE_MONEY = 'MOBILE_MONEY',
  ORANGE_MONEY = 'ORANGE_MONEY'
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
}
