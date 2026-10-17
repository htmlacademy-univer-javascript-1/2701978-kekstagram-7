import { DESCRIPTIONS } from './data.js';
import { getRandomInt } from './util.js';
import { createComments } from './comments.js';

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id - 1],
  likes: getRandomInt(15, 200),
  comments: createComments()
});

const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

export { createPhoto, createPhotos };
