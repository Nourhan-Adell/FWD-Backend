import { resize } from '../src/services/image';
import Jimp = require('jimp/*');
import path = require('path');

// it('Should be async', function (done) {
//   // const result = await Jimp.resize(100, 100);
//   resizeImage('imgaes', 100, 100, 'shyfcae_100_100.png').then((result): void => {
//     expect(result).toBe(true);
//     done();
//   });
// });

// it('test promise with jasmine', async () => {
//   try {
//     await resize(path.join(__dirname, 'images'), 100, 100, 'shyfcae_100_100.png');
//     throw new Error('Promise should  be resolved');
//   } catch (err) {
//     throw new Error('Promise should not be resolved');
//     // return;
//   }

//   // throw new Error('Promise should not be resolved');
// });

// it('does a thing', async function () {
//   const result = await resize(path.join(__dirname, 'images'), 100, 100, 'shyfcae_100_100.png');
//   expect(result).toBeDefined();
// });

// beforeEach(function() {
//   return new Promise(function(resolve, reject) {
//     // do something asynchronous
//     resolve();
//   });
// });

it('does a thing', function () {
  return resize(path.join(__dirname, 'images'), 100, 200, 'shyface_100_00.png').then(function (result) {
    expect(result).toBeUndefined();
  });
});
