import { MongoClient } from 'mongodb';



const dbName = 'clean';
const collectionName = 'city';
const usersCollectionName = 'users';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

export const connection = async () => {
    const c = await client.connect();
    return c.db(dbName);
};