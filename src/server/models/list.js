import mongoose from "mongoose";
import { itemSchema } from "./item";

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: [itemSchema],
  },
  {
    timestamps: true,
  }
);

// listSchema.pre('remove', function(next){
//     this.model('Item').deleteMany({user: this._id}, next);
// });

const List = mongoose.model("List", listSchema);
export default List;
