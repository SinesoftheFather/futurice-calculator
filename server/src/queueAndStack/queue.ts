export default class Queue<T> {

    private queue: Array<T>;

    constructor() {
        this.queue = [];
    }

    enqueue(element: T) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.queue.length == 0)
            throw new Error("Queue is currently empty");
        return this.queue.shift();
    }

    front() {
        if (this.queue.length == 0)
            throw new Error("Queue is currently empty");
        return this.queue[0];
    }

    isEmpty() {

        return this.queue.length == 0;
    }

    length() {
        return this.queue.length;
    }
}
