const express = require("express");
const Applicant = require("../models/Applicant");

const router = express.Router();

// POST create applicant
router.post("/", async (req, res) => {
  const applicant = await Applicant.create(req.body);
  res.status(201).json(applicant);
});

// DELETE applicant
router.delete("/:id", async (req, res) => {
  const removed = await Applicant.findByIdAndDelete(req.params.id);
  if (!removed) {
    return res.status(404).json({ message: "Applicant not found" });
  }
  res.json({ message: "Applicant deleted" });
});

module.exports = router;
