import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/' as string, {
            apiKey: '182b23fb19c64983b891c5b7063eabfa' as string,
        });
    }
}

export default AppLoader;
