import mongoose, {Document, Model } from "mongoose";

export interface IProduct extends Document{
    name:string;
    image:string;
    originalPrice:number;
    discountedPrice:number;
    rating:number;
    reviews:number;
}


const productSchema=new mongoose.Schema<IProduct>({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    originalPrice:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    reviews:{
        type:Number,
        required:true
    },

})

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;