import { MongoClient } from 'mongodb';

const dbName = 'clean';

const client = new MongoClient(process.env.MONGODB_URL);

export const connection = async () => {
    const c = await client.connect();
    return c.db(dbName);
};
