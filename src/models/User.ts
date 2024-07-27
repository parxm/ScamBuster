import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password_hash: string;
  date_joined: Date;
  profile_picture_url?: string;
  bio?: string;
}

const validateImageUrl = (url: string): boolean => {
  return /\.(jpeg|jpg|png)$/.test(url);
};

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  date_joined: { type: Date, default: Date.now },
  profile_picture_url: {
    type: String,
    validate: {
      validator: validateImageUrl,
      message: 'Profile picture must be a URL ending with .png, .jpeg, or .jpg'
    }
  },
  bio: String
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
