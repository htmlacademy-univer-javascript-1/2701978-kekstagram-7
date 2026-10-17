import { NAMES, MESSAGES } from './data.js';
import { getRandomInt, getRandomElement } from './util.js';

let commentIdCounter = 1;

const createComment = () => {
  const messageCount = getRandomInt(1, 2);
  const messages = [];
  for (let i = 0; i < messageCount; i++) {
    messages.push(getRandomElement(MESSAGES));
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomElement(NAMES)
  };
};

const createComments = () => {
  const count = getRandomInt(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};

export { createComment, createComments };
