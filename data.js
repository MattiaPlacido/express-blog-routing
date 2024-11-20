//importo lorem per non scrivere manualmente il contenuto
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const posts = [
  {
    id: 2,
    titolo: "Ciambellone",
    contenuto: lorem.generateSentences(1),
    immagine: "images/ciambellone.jpeg",
    tags: ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"],
  },
  {
    id: 7,
    titolo: "Pane Fritto Dolce",
    contenuto: lorem.generateSentences(1),
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"],
  },
  {
    id: 11,
    titolo: "Cracker Alla Barbabietola",
    contenuto: lorem.generateSentences(1),
    immagine: "images/cracker_barbabietola.jpeg",
    tags: ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"],
  },
  {
    id: 6,
    titolo: "Torta Paesana",
    contenuto: lorem.generateSentences(1),
    immagine: "images/torta_paesana.jpeg",
    tags: ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"],
  },
  {
    id: 3,
    titolo: "Pasta Alla Barbabietola",
    contenuto: lorem.generateSentences(1),
    immagine: "images/pasta_barbabietola.jpeg",
    tags: ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"],
  },
];

const counter = posts.length;

module.exports = posts;
posts.unshift(counter);
