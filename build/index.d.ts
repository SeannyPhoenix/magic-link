import { Request, Response } from 'express';
import { Model, Mongoose } from 'mongoose';
export declare type InitOptions = {
    mongoose: Mongoose;
    accountModel: Model<any>;
    timeout?: number;
    autoCreate?: boolean;
};
declare const magicLink: (options: InitOptions) => (req: Request, res: Response) => Promise<void>;
export default magicLink;
