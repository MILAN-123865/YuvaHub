import mongoose, { Schema, Document } from 'mongoose';

export interface IOpportunity extends Document {
  title: string;
  status: string;
  createdAt?: Date;
}

const OpportunitySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: String, default: 'active' },
  },
  { timestamps: true }
);

export const Opportunity = mongoose.models.Opportunity || mongoose.model<IOpportunity>('Opportunity', OpportunitySchema);
