import { isImageFile } from '../utils';

test('isImageFile', () => {
  expect(isImageFile({ url: 'https://a.jpg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.jpeg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.png' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.svg' })).toBeTruthy();
  expect(isImageFile({ url: 'https://a.gif' })).toBeTruthy();
  expect(isImageFile({ file: { type: 'image/jpg' } })).toBeTruthy();
  expect(isImageFile({ file: { type: 'application/pdf' } })).toBeFalsy();
  expect(isImageFile({ content: 'data:image/xxx' })).toBeTruthy();
  expect(isImageFile({ content: 'data:application/xxx' })).toBeFalsy();
  expect(isImageFile({})).toBeFalsy();
});
