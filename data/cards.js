export default () => {
  let cards = [];

  let images = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < 16; i += 2) {
    let r = images[Math.floor(Math.random() * images.length)];
    const index = images.indexOf(r);
    if (index > -1) {
      images.splice(index, 1); // 2nd parameter means remove one item only
    }

    cards.push({
      id: i,
      rel: i + 1,
      flipped: false,
      url: `karafuru/${r}.jpeg`,
      discovered: false,
    });
    cards.push({
      id: i + 1,
      rel: i,
      flipped: false,
      url: `/karafuru/${r}.jpeg`,
      discovered: false,
    });
  }

  return shuffle(cards);
};

function shuffle(array) {
  let currentIndex = array.length,
    temp,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
