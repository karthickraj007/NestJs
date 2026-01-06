import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose';

@Schema()
export class AppStudent extends Document{

    @Prop({type : String, required : true})
    name : string

    @Prop({type : Number})
    age : number

    @Prop({type : String, unique:true})
    city : string

}

export const studentSchema = SchemaFactory.createForClass(AppStudent)