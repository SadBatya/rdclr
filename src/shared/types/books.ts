export interface GoogleBooksResponse {
  kind: "books#volumes";
  totalItems: number;
  items: IBook[];
}

export interface IBook {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  imageLinks?: {
    thumbnail?: string;
    smallThumbnail?: string;
  };
  averageRating?: number;
  ratingsCount?: number;
  language?: string;
}

export interface SaleInfo {
  saleability: string;
  isEbook: boolean;
  country: string;
}

export interface AccessInfo {
  embeddable: boolean;
  publicDomain: boolean;
  viewability: string;
  webReaderLink: string;
}

export interface SearchInfo {
  textSnippet: string;
}
