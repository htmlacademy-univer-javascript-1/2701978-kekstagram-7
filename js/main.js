const DESCRIPTIONS = [
  'Отличный кадр!',
  'Красивый закат на море',
  'Мой кот снова спит',
  'Прогулка по парку',
  'Вкусный завтрак',
  'Новый проект готов',
  'Вечерний город'
];

const NAMES = [
  'Артём', 'Мария', 'Иван', 'Анна', 'Дмитрий'
];

const MESSAGES = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let commentIdCounter = 1;

function createComment() {
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
}

function createComments() {
  const count = getRandomInt(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
}

function createPhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomInt(15, 200),
    comments: createComments()
  };
}

const photos = [];
for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto(i));
}

// eslint-disable-next-line no-console
console.log(photos);
