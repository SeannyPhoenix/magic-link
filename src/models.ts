import {Mongoose, Model} from 'mongoose';
import muuid from 'uuid-mongodb';
import {setExpiration} from './expiration.js';

export const initTokenModel = (
    mongoose: Mongoose,
    modelName: string,
    expiration: number,
): Model<any> => {
  const {Schema, model} = mongoose;
  const TokenSchema = new Schema({
    _id: {
      type: 'object',
      value: {type: 'Buffer'},
      default: muuid.v4,
      transform: (uuid) => muuid.from(uuid).toString(),
    },
    account: {
      type: 'object',
      value: {type: 'Buffer'},
      ref: modelName,
      required: true,
      transform: (uuid:any) => muuid.from(uuid).toString(),
    },
    expiration: {
      type: Number,
      default: setExpiration(expiration),
    },
  });

  return model('Token', TokenSchema);
};
