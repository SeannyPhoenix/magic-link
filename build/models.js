import muuid from 'uuid-mongodb';
import { setExpiration } from './expiration.js';
export const initTokenModel = (mongoose, modelName, expiration) => {
    const { Schema, model } = mongoose;
    const TokenSchema = new Schema({
        _id: {
            type: 'object',
            value: { type: 'Buffer' },
            default: muuid.v4,
            transform: (uuid) => muuid.from(uuid).toString(),
        },
        account: {
            type: 'object',
            value: { type: 'Buffer' },
            ref: modelName,
            required: true,
            transform: (uuid) => muuid.from(uuid).toString(),
        },
        expiration: {
            type: Number,
            default: setExpiration(expiration),
        },
    });
    return model('Token', TokenSchema);
};
