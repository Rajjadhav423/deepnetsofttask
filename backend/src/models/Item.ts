import mongoose, { Schema, Document } from 'mongoose';

interface Item extends Document {
  name: string;
  description: string;
  price: string;
  menu: mongoose.Schema.Types.ObjectId;
}

const itemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
});

export default mongoose.model<Item>('Item', itemSchema);
