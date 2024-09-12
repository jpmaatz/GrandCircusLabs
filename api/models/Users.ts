import mongoose, { Schema, model } from "mongoose"

const UserSchema = new Schema(
	{
		displayName: {
			type: String,
			required: true
		},
        photoUrl: {
            type: String,
            required: true
        },
        darkTheme: {
            type: Boolean,
            required: true
        }
	},
	{ timestamps: true }
)

const User = model("User", UserSchema)
export default User