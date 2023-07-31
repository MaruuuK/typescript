import './news.css';
import { Article } from '../../interfaces';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp' as string);
        if (newsItemTemp === null) {
            return;
        }

        news.forEach((item: Article, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true as boolean) as HTMLTemplateElement;

            if (idx % 2) newsClone.querySelector('.news__item' as string)?.classList.add('alt' as string);

            const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo' as string);
            const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author' as string);
            const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date' as string);
            const title: HTMLElement | null = newsClone.querySelector('.news__description-title' as string);
            const source: HTMLElement | null = newsClone.querySelector('.news__description-source' as string);
            const readMore: HTMLAnchorElement | null = newsClone.querySelector('.news__read-more a' as string);
            const content: HTMLElement | null = newsClone.querySelector('.news__description-content' as string);

            if (
                metaPhoto === null ||
                metaAuthor === null ||
                metaDate === null ||
                title === null ||
                content === null ||
                source === null ||
                readMore === null
            ) {
                return;
            }
            metaPhoto.style.backgroundImage = `url(${item.urlToImage ?? 'img/news_placeholder.jpg'})`;
            metaAuthor.textContent = item.author ?? item.source.name;
            metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            title.textContent = item.title;
            content.textContent = item.description;
            source.textContent = item.source.name;
            readMore.setAttribute('href' as string, item.url);
            fragment.append(newsClone);
        });

        const newsContainer: HTMLElement | null = document.querySelector('.news' as string);
        if (newsContainer) {
            newsContainer.textContent = '' as string;
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
