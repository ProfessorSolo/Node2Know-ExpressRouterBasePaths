"use strict";

const express = require("express");
const router = express.Router(); // A mini-app instance

// OLD (Wrong inside a mounted router)
// router.get('/things', ...)

// NEW (Correct)
// Matches /things/
router.get("/", (req, res) => res.send("List of Things"));

// Matches /things/:id
router.get("/:id", (req, res) =>
  res.send(`Details of Thing ${req.params.id}`)
);

module.exports = router;
