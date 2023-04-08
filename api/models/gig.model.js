import mongoose from "mongoose";
const { Schema } = mongoose; 

const gigSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    pp: {
        type: String,
        required: true,
    },
    star: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: Number,
        default: 0,
    },
    cat: {
        type: String,
        required: true,
    },
    coverImg: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    shortTitle: { 
        type: String,
        required: true,
    },
    shortDesc: { 
        type: String, 
        required: true,
    },
    deliveryTime: { 
        type: Number, 
        required: true,
    },
    revisionNumber: { 
        type: Number, 
        required: true,
    },
    price: { 
        type: Number, 
        required: true,
    },
    features: {
        type: [String],
        required: false,
    },
    sales: {
        type: Number,
        default: 0,
    },
    
},{
    timestamps: true
});

export default mongoose.model("Gig", gigSchema);