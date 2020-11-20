import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";
import TasksSchema from './task';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      trime: true,
      unique: true,
      required: true
    },
    tasks:{
      type: [TasksSchema],
      ref: 'Task'
    }
  },
  {
    collection: 'users'
  }
)

UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1})

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
