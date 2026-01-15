import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

@Schema({timestamps : true, collection : 'campaign'})
export class Campaign extends Document{

@Prop({required : true, unique : true})
name: string;

@Prop({required : true})
offerMessage: string;

@Prop({required : true})
cronTime: string;

@Prop({required : true})
    status : string;

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);