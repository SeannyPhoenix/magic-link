import {Request, Response} from 'express';
import {Model, Mongoose} from 'mongoose';
import {initTokenModel} from './models.js';

export type InitOptions = {
  mongoose: Mongoose;
  accountModel: Model<any>;
  timeout?: number;
  autoCreate?: boolean
}

const magicLink = (options: InitOptions) => {
  const {
    mongoose,
    accountModel,
    timeout,
    autoCreate = false,
  } = options;

  // If not set, default timeout is 15 minutes

  const Token = initTokenModel(mongoose, accountModel.modelName, timeout || 15);

  const magicLink = async (req: Request, res: Response): Promise<void> => {
    try {
      // Retrieve email address and clean it up
      // If no email address was given,
      let {email} = req.body;
      console.log(email);

      if (!email) {
        res.status(400).json({status: 'no email provided'});
        return;
      }
      email = email.toLowerCase().trim();
      console.log(email);


      // Get the account for this email
      let account = await accountModel.findOne({email});
      console.log(account);

      // If an account does not exist
      if (!account) {
        if (autoCreate) {
          account = await accountModel.create({email});
        } else {
          res.status(404).json({status: 'no account found'});
          return;
        }
      }

      console.log(Token.db);
      const token = await Token.create({account: account._id});
      console.log(JSON.stringify(token, null, 2));
      console.log(token, null, 2);
      res.status(200).json({status: 'email sent'});
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };

  return magicLink;
};

export default magicLink;
