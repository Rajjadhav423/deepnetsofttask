import mongoose, { Schema, Document } from 'mongoose';

interface Menu extends Document {
  name: string;
  description: string;
}

const menuSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<Menu>('Menu', menuSchema);
