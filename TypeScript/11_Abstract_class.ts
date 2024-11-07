abstract class TakePhoto {
    constructor(
        public camera: string,
        public filter: string
    ) {}

    abstract getSepia(): void
}

// object can't be created from abstract class itself rather its subclass

class Instagram extends TakePhoto {
    constructor(
        public camera: string,
        public filter: string,  
    ){super(camera, filter)}

    getSepia(): void {
        console.log('Instagram');
    }
}

const hc = new Instagram('hc', 'Test');

export {}