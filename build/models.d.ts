import { Mongoose, Model } from 'mongoose';
export declare const initTokenModel: (mongoose: Mongoose, modelName: string, expiration: number) => Model<any>;
