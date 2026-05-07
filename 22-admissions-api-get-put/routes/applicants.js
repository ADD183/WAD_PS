const express = require("express");
const Applicant = require("../models/Applicant");

const router = express.Router();

// GET all applicants
router.get("/", async (req, res) => {
  const applicants = await Applicant.find().sort({ createdAt: -1 });
  res.json(applicants);
});

// GET applicant by id
router.get("/:id", async (req, res) => {
  const applicant = await Applicant.findById(req.params.id);
  if (!applicant) {
    return res.status(404).json({ message: "Applicant not found" });
  }
  res.json(applicant);
});

// PUT update applicant
router.put("/:id", async (req, res) => {
  const updated = await Applicant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!updated) {
    return res.status(404).json({ message: "Applicant not found" });
  }

  res.json(updated);
});

module.exports = router;
