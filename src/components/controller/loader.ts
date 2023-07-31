class Loader {
    baseLink: string;
    options: Record<string, string | number>;

    constructor(baseLink: string, options: Record<string, string | number>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<Type>(
        { endpoint, options = {} }: { endpoint: string; options?: Record<string, string | number> },
        callback: (data: Type) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Record<string, string | number>, endpoint: string): string {
        const urlOptions: Record<string, string | number> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<Type>(
        method: string,
        endpoint: string,
        callback: (data: Type) => void,
        options: Record<string, string | number> = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler.bind(this))
            .then((res: Response) => res.json())
            .then((data: Type) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
