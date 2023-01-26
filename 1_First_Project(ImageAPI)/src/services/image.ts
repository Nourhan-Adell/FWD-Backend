import Jimp from 'jimp/es';
import path = require('path');

/**
 * Resizing function that takes the image parameter and resize the main name for that image,
 * And save it in the same directory.
 * @param {string} mainImage
 * @param {number} width
 * @param {number} height
 * @param {string} name
 * @returns {Promise<any>}
 */
export const resize = async (mainImage: string, width: number, height: number, name: string): Promise<any> => {
  try {
    const jimp = await Jimp.read(mainImage);
    const resized = await jimp.resize(width, height).quality(90).writeAsync(path.join('images/thumb', name));
    return resized;
  } catch (error: any) {
    console.log(`something went wrong! error: ${error.message}`);
  }
};
