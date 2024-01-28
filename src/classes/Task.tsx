export interface TaskInterface {
    getDescription: () => string,
    isDone: () => boolean;
    done: () => void;
    unDone: () => void;
}

export class Task implements TaskInterface {
    description: string;
    status: boolean;

    constructor(description: string) {
        this.description = description;
        this.status = false;
    }
    
    getDescription(): string {
        return this.description;
    }
    
    isDone() : boolean {
        return this.status;
    }

    done() : void {
        this.status = true;
    }

    unDone() : void {
        this.status = false;
    }
}