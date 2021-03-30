import mongoose from 'mongoose';
import Item from './item';
import List from './list';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
}

const models = { Item, List };

export { connectDb };
export default models;