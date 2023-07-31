import './sources.css';
import { SourcesInfo } from '../../interfaces';

class Sources {
    draw(data: SourcesInfo[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp' as string);
        if (sourceItemTemp === null) {
            return;
        }

        data.forEach((item: SourcesInfo) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true as boolean) as HTMLTemplateElement;
            const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name' as string);
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }
            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id' as string, item.id);
            }

            fragment.append(sourceClone);
        });

        const sources: HTMLElement | null = document.querySelector('.sources' as string);
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
