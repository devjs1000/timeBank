import rnfs from 'react-native-fs';

const dbPath = `${rnfs.DocumentDirectoryPath}/db.json`;

export const dbExists = async () => {
    try {
        const exists = await rnfs.exists(dbPath);
        return exists;
    } catch (error) {
        console.error('error', error);
        return false;
    }
}

const initialState = {
    process: {},
    history: []
}

export const initializedb = async () => {
    try {
        const exists = await dbExists();
        if (!exists) {
            rnfs.writeFile(dbPath, JSON.stringify(initialState), 'utf8');
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getDb = async (collection?: string) => {
    try {
        const db = await rnfs.readFile(dbPath);
        const parsed = JSON.parse(db);
        if (collection) {
            return parsed[collection];
        }
        return parsed;
    } catch (error) {
        console.error(error);
        return initialState;
    }
}

type UpdatesType = 'push' | 'unshift' | 'splice' | 'pop' | 'shift' | 'sort' | 'reverse' | 'fill' | 'copyWithin' | 'set' | 'delete' | 'clear' | 'update';

export const updateDb = async (collection: string, data: any, updateMethod?: UpdatesType) => {
    try {
        const db = await getDb();
        switch (updateMethod) {
            case "push":
                db[collection].push(data);
                break;
            case "unshift":
                db[collection].unshift(data);
                break;
            case "splice":
                db[collection].splice(data);
                break;
            case "pop":
                db[collection].pop();
                break;
            case "shift":
                db[collection].shift();
                break;
            case "sort":
                db[collection].sort(data);
                break;
            case "reverse":
                db[collection].reverse();
                break;
            case "fill":
                db[collection].fill(data);
                break;
            case "copyWithin":
                db[collection].copyWithin(data);
                break;
            case "set":
                db[collection].set(data);
                break;
            case "delete":
                db[collection].delete(data);
                break;
            case "clear":
                db[collection].clear();
                break;
            case "update":
                db[collection] = data;
                break;
            default:
                db[collection] = data;
                break;
        }
        await rnfs.writeFile(dbPath, JSON.stringify(db), 'utf8');
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}

export const deleteDb = async () => {
    try {
        await rnfs.unlink(dbPath);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const deleteCollection = async (collection: string) => {
    try {
        const db = await getDb();
        delete db[collection];
        await rnfs.writeFile(dbPath, JSON.stringify(db), 'utf8');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const deleteItemById = async (collection: string, id: string) => {
    const db = await getDb();
    try {
        db[collection] = db[collection].filter((item: any) => item.id !== id);
        await rnfs.writeFile(dbPath, JSON.stringify(db), 'utf8');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateItemById = async (collection: string, id: string, data: any) => {
    const db = await getDb();
    try {
        db[collection] = db[collection].map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    ...data
                }
            }
            return item;
        });
        await rnfs.writeFile(dbPath, JSON.stringify(db), 'utf8');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export const multiUpdateDb = async (updates: MultiUpdatesType[]) => {
    try {
        const db = await getDb();
        updates.forEach((update) => {
            switch (update.updateMethod) {
                case "push":
                    db[update.collection].push(update.data);
                    break;
                case "unshift":
                    db[update.collection].unshift(update.data);
                    break;
                case "splice":
                    db[update.collection].splice(update.data);
                    break;
                case "pop":
                    db[update.collection].pop();
                    break;
                case "shift":
                    db[update.collection].shift();
                    break;
                case "sort":
                    db[update.collection].sort(update.data);
                    break;
                case "reverse":
                    db[update.collection].reverse();
                    break;
                case "fill":
                    db[update.collection].fill(update.data);
                    break;
                case "copyWithin":
                    db[update.collection].copyWithin(update.data);
                    break;
                case "set":
                    db[update.collection].set(update.data);
                    break;
                case "delete":
                    db[update.collection].delete(update.data);
                    break;
                case "clear":
                    db[update.collection].clear();
                    break;
                case "update":
                    db[update.collection] = update.data;
                    break;
                default:
                    db[update.collection] = update.data;
                    break;
            }
        });

        await rnfs.writeFile(dbPath, JSON.stringify(db), 'utf8');
    } catch (error) {
        console.error(error);
    }
}


interface MultiUpdatesType {
    collection: string;
    data: any;
    updateMethod?: UpdatesType;
}