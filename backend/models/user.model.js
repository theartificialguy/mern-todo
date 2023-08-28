import mongoose from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {
    timestamps: true, // adds created_at, updated_at automatically
});

userSchema.pre("save", async function (next) {
    // this => current User context
    if (!this.isModified("password")) {
        next();
    };
    // otherwise we are creating password now
    const salt = await bycrypt.genSalt(10); // a key
    // hash the password before saving it to the database
    this.password = await bycrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    // this.password = hashed password in db
    return await bycrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;