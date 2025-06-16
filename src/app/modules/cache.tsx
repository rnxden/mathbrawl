const db = new Map();

export function get(key: string): void {
    return db.get(key);
}

export function set(key: string, value: any): any {
    return db.set(key, value);
}