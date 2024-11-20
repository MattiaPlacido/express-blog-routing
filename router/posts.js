//impostazione router
const express = require("express");
const router = express.Router();

const posts = require("../data.js");

//gestisco la route "/bacheca"
router.get("/bacheca", (request, response) => {
  //salvo la richiesta in una variabile
  const nameFilter = request.query.term;

  //se è presente la richiesta
  if (nameFilter) {
    //rimuovo il contatore che altrimenti causa problemi con includes e toLowerCase nel filter sotto
    posts.shift();

    //creo un array con solo gli elementi filtrati
    const filteredPosts = posts.filter((post) => {
      return post.titolo.toLowerCase().includes(nameFilter.toLowerCase());
    });

    //rispondo con il json contenente i post
    response.json(filteredPosts);
  } else response.json(posts);
});

//index
router.get("/posts", (req, res) => {
  res.json(posts);
});

//show
router.get("/posts/:id", (req, res) => {
  const id = req.params.id;

  if (id && !isNaN(id)) {
    const targetedPost = posts.find((post) => post.id == id);
    res.json(targetedPost);
  } else {
    res.status(404).json({
      error: "Id not found",
    });
  }
});

//store
router.post("/", (req, res) => {
  res.send(posts);
});

//update
router.put("/:id", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
});

//modify
router.patch("/:id", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
});

//destroy
router.delete("/:id", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
});

//esporto il modulo
module.exports = router;
