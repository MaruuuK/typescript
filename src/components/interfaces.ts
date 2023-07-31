export interface NewsList {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: NewsSource;
    author: null;
    title: string;
    description: string;
    url: string;
    urlToImage: null;
    publishedAt: string;
    content: string;
}

interface NewsSource {
    id: string;
    name: string;
}

export interface SourcesList {
    status: string;
    sources: SourcesInfo[];
}

export interface SourcesInfo {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
