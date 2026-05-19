import mongoose, { Schema, Model, Document } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  role: string;
  fullBio: string;
  image: string;
  imageAlt: string;
  profileUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    fullBio: { type: String, required: true, trim: true, maxlength: 600 },
    image: { type: String, required: true, trim: true },
    imageAlt: { type: String, required: true, trim: true },
    profileUrl: { type: String, default: '', trim: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

TeamMemberSchema.index({ isActive: 1, order: 1, createdAt: -1 });

const TeamMember: Model<ITeamMember> =
  mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);

export default TeamMember;
