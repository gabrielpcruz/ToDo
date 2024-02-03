import uuid from 'react-native-uuid';
export interface TaskInterface {
    getId: () => string,
    getDescription: () => string,
    isDone: () => boolean;
    toggleStatus: () => void;
    unDone: () => void;
}

export class Task implements TaskInterface {
    id: string;
    description: string;
    status: boolean;

    constructor(description: string) {
        this.id = uuid.v4().toString();
        this.description = description;
        this.status = false;
    }
    
    getId(): string {
        return this.id;
    }

    getDescription(): string {
        return this.description;
    }
    
    isDone() : boolean {
        return this.status;
    }

    toggleStatus() : void {
        this.status = (!this.status);
    }

    unDone() : void {
        this.status = false;
    }
}