import News from './news/news';
import Sources from './sources/sources';
import { NewsList, SourcesList, SourcesInfo, Article } from '../interfaces';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsList) {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesList) {
        const values: SourcesInfo[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
