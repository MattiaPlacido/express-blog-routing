//impostazione router
const express = require("express");
// const posts = require("../server");
const router = express.Router();

// console.log(posts);

//index
router.get("/", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
});

//show
router.get("/:id", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
});

//store
router.post("/", (req, res) => {
  const text = "Il post è stato aggiunto";
  res.send(text);
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
