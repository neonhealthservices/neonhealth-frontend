import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  patientName: string;
  title: string;
  content: string;
  service: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    patientName: { type: String, required: true },
    title: { type: String, required: false },
    content: { type: String, required: true },
    service: { type: String, required: false },
    rating: { type: Number, required: true, min: 1, max: 5, default: 5 },
  },
  { timestamps: true }
);

// Delete the model if it exists in development to ensure schema changes are applied
if (process.env.NODE_ENV === 'development') {
  delete mongoose.models.Review;
}

const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
