import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
export { itemSchema };
const Item = mongoose.model("Item", itemSchema);
export default Item;
