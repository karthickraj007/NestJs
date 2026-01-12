import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose';

@Schema({ collection: "student", timestamps: true })
export class AppStudent extends Document {

    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: Number })
    age: number

    @Prop({ type: String, unique: true })
    city: string

    @Prop({
        type : mongoose.Schema.Types.ObjectId,
        ref : 'AppItem',
        required : true
    })
    productId : mongoose.Types.ObjectId

}

export const studentSchema = SchemaFactory.createForClass(AppStudent)

@Schema({ collection: "item", timestamps: true })
export class AppItem extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ default: true })
    isActive: boolean;

}

export const itemSchema = SchemaFactory.createForClass(AppItem)