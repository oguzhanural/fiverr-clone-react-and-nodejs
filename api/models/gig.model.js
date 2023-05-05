import mongoose from "mongoose";
const { Schema } = mongoose; 

const gigSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
    pp: {
        type: String,
        required: false,
    },
    star: {
        type: Number,
        required: false,
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
        required: false,
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