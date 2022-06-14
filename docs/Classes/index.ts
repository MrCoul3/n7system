export {};


// ООП


// CRUD - create, read, update, delete

class User {
    name: string | undefined;
    age: number | undefined;
}

interface Repo<T> {
    crate: (obj: T) => T
}

class UserRepo implements Repo<User> {
    crate(obj: User) {
        return obj;
    }
}
interface Reader {
    read(url: string): void;
}

interface Writer {
    write(data: string): unknown;
}

class FileClients implements Reader, Writer {
    read(url: string) {
        console.log(url)
    }

    write(data: string): unknown {
        console.log(data)
        return data;
    }
}