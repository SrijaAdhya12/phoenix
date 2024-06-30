import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
	{
		name: { type: String, required: true },
        age: { type: Number, min: 18, max: 65},
        gender: { type: String, enum : ["male" , "female"]
        }
	},
    { timestamps: true },
    
)

export default mongoose.model("users" , userSchema)