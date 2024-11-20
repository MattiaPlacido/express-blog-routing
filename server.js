//DICHIARAZIONE VARIABILI / REQUIREMENTS / OGGETTI / FUNZIONI
//importazione moduli
const express = require("express");
const postsRouter = require("./router/posts");

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

//dichiaro una variabile come express e la porta su cui ascolto
const server = express();
const port = 3000;

//associo questo file al file di routing
server.use("posts", postsRouter);

//dichiaro la classe post
class post {
  titolo;
  contenuto;
  immagine;
  tags;
  constructor(titolo, contenuto, immagine, tags) {
    this.titolo = titolo;
    this.contenuto = contenuto;
    this.immagine = immagine;
    this.tags = tags;
  }
}

//creo l'array dei posts
const posts = [];

//ELABORAZIONE DATI
//genero i posts
posts.push(
  new post(
    "Ciambellone",
    lorem.generateSentences(1),
    "images/ciambellone.jpeg",
    ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"]
  )
);

posts.push(
  new post(
    "Pane Fritto Dolce",
    lorem.generateSentences(1),
    "images/pane_fritto_dolce.jpeg",
    ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"]
  )
);

posts.push(
  new post(
    "Cracker Alla Barbabietola",
    lorem.generateSentences(1),
    "images/cracker_barbabietola.jpeg",
    ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"]
  )
);

posts.push(
  new post(
    "Torta Paesana",
    lorem.generateSentences(1),
    "images/torta_paesana.jpeg",
    ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"]
  )
);

posts.push(
  new post(
    "Pasta Alla Barbabietola",
    lorem.generateSentences(1),
    "images/pasta_barbabietola.jpeg",
    ["cibo", "cucina", "hobby", "benessere", "photo", "food porn"]
  )
);

//aggiorno il numero di posts
const counter = posts.length;

//rendo visibili i contenuti statici nella cartella public
server.use(express.static("public"));

//gestisco la route "/"
server.get("/", (request, response) => {
  response.send("Server del mio blog");
});

//gestisco la route "/bacheca"
server.get("/bacheca", (request, response) => {
  //salvo la richiesta in una variabile
  const nameFilter = request.query.term;

  //se è presente la richiesta
  if (nameFilter) {
    //creo un array con solo gli elementi filtrati
    const filteredPosts = posts.filter((post) => {
      return post.titolo.toLowerCase().includes(nameFilter.toLowerCase());
    });

    //rispondo con il json contenente i post
    response.json({ counter, filteredPosts });
  } else response.json({ counter, posts });
});

//esporto il modulo contenenti i post
module.exports = posts;

//ascolto per eventuali richieste
server.listen(port, () => {
  console.log("Il server sta ascoltando sulla porta " + port);
});
