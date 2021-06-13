// import mongoose from 'mongoose';
// import muuid from 'uuid-mongodb';
// import magicLink from './index.js';

// const test = async () => {
//   try {
//     await mongoose.connect('mongodb://mongo.seannyphoenix.com:27017/magiclink', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const Account = mongoose.model('Account', new mongoose.Schema({
//       _id: {
//         type: 'object',
//         value: {type: 'Buffer'},
//         default: muuid.v4,
//         transform: (uuid: any) => muuid.from(uuid).toString(),
//       },
//       email: String,
//     }));

//     await Account.create({email: 'seannyphoenix@gmail.com'});

//     const test = magicLink(Account, 30);

//     await test({body: {email: 'SeannyPhoenix@gmail.com'}}, {});
//     await test({body: {email: 'amadigan@gmail.com'}}, {});
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await mongoose.disconnect();
//   }
// };

// test();
