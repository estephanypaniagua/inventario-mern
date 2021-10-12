import { model, Document, Model, Schema } from "mongoose";

// interface Producto extends Document {
//     name: string;
//     description: string;
//     price: number;
// }

type ProductType = Document & {
    name: string;
    description?: string;
    price: number;
}

const productSchema = new Schema<ProductType>({
    name: {type: Schema.Types.String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true}
});

export const Product: Model<ProductType> = model("products", productSchema);