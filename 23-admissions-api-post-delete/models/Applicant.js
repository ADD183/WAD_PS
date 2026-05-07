const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true },
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Applicant", applicantSchema);
