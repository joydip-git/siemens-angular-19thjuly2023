export interface IManager<T> {
    add(obj: T): boolean;
    delete(id: number): boolean;
    update(obj: T, id: number): boolean;
    fetchAll(): T[];
    fetch(id: number): T | undefined;
}