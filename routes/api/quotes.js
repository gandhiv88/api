import express from "express";

import quotes from "../../data/quotes.json" assert { type: "json" };
import getRandomItem from "../../utils/getRandomItem.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "Please use /api/quotes/random for a random quote or /api/quotes/all for all quotes"
  );
});

router.get("/all", (req, res) => {
  res.send(quotes);
});

router.get("/random", (req, res) => {
  const quotesArray = Object.values(quotes.quotes);
  const randomItem = getRandomItem(quotesArray);
  res.send(randomItem);
});

// TODO: add endpoint needs to be locked to admins only
router.post("/add", async (req, res) => {
});

export default router;
