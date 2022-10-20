import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
    {
        added_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Please enter an email"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

        },
        phone: {
            type: Number,
            required: [true, "Please enter a phone No."],
            min: [6, "phone number must be at least 6 digit"],

        },
        address: {
            type: String,
            required: [true, "Please enter an address"],
            minlength: [10, "address must be at least 10 character"],

        },
    },
    { timestamps: true }
)
export const Contact = mongoose.model("Contact", contactSchema);