import mongoose from "mongoose";

const Box = new mongoose.Schema({
  name: { type: String, required: true },
  items: { type: Array },
});

export default mongoose.model("Box", Box);
