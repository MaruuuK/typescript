import AppController from '../controller/controller';
import { NewsList, SourcesList } from '../interfaces';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources: HTMLElement | null = document.querySelector('.sources' as string);
        const windowWidth: number = window.innerWidth;
        if (sources === null) {
            return;
        }
        if (windowWidth <= 768) {
            const closestParent: HTMLElement | null = sources.closest('div');
            const btnMenu: HTMLElement | null = document.getElementById('dropdown-btn');
            if (closestParent === null || btnMenu === null) {
                return;
            }
            closestParent.classList.add('dropdown' as string);
            btnMenu.style.display = 'block' as string;

            sources.classList.add('dropdown-menu' as string);
            sources.classList.add('dropdown-menu-dark' as string);
        } else {
            const mainContainer: HTMLElement | null = document.getElementById('main-container' as string);
            if (mainContainer) {
                mainContainer.classList.add('active' as string);
            }
        }
        sources.addEventListener('click', (e: Event) => {
            this.controller.getNews(e, (data: NewsList) => this.view.drawNews(data));
            window.scrollTo({ top: 0 as number, behavior: 'smooth' });
        });

        this.controller.getSources((data: SourcesList) => this.view.drawSources(data));
    }
}

export default App;
