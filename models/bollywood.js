const mongoose = require("mongoose");

const bollywoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Bollywood", bollywoodSchema);
