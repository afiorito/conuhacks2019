import mongoose from 'mongoose';

export default async () => {
    const endpoint = 'mongodb://luna:honeydew@52.22.57.146:27017/greenbeans';

    await mongoose.connect(endpoint, {
        useCreateIndex: true,
        useNewUrlParser: true,
    });
    mongoose.Promise = global.Promise;

    return mongoose.connection;
};
