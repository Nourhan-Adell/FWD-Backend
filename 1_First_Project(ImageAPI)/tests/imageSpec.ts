import { resize } from '../src/services/image';
import path from 'path';

it('does a thing', function () {
  return resize(path.join(__dirname, 'images'), 100, 200, 'shyface_100_00.png').then(function (result) {
    expect(result).toBeUndefined();
  });
});
