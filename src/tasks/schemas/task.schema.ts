import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Project } from "../../projects/schemas/project.schema";

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Date })
  dueDate: Date;

  @Prop({
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  })
  status: string;

  @Prop({ type: String, enum: ["low", "medium", "high"], default: "medium" })
  priority: string;

  @Prop({ type: Types.ObjectId, ref: Project.name })
  projectId: Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
