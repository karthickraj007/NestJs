import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { campaign } from './campaign.controller'
import { Campaign } from './campaign.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { SchedulerRegistry} from '@nestjs/schedule';
import { CronJob } from 'cron';


@Injectable()
export class CampaignService {

    constructor(
        @InjectModel(Campaign.name, 'student') private campaignModel: Model<Campaign>,
        private schedulerRegistry: SchedulerRegistry
    ) 
    {

    }

    async onModuleInit(){
        const campaigns = await this.campaignModel.find({status : "active"})
        for(let campaign of campaigns){
            const cronJob = new CronJob(campaign.cronTime, async()=>{
                await this.sendOffer(campaign)
            })
            this.schedulerRegistry.addCronJob(campaign._id.toString(), cronJob)
            cronJob.start();
        }
    }

    async createCampaign(data: campaign) {
        try {
            console.log(data, "bodydata")
            const campaign = await this.campaignModel.create(data)
            console.log(campaign, "campaignresposne")
            const cronJob = new CronJob(campaign.cronTime, async()=>{
                await this.sendOffer(campaign)
            })
            this.schedulerRegistry.addCronJob(campaign._id.toString(), cronJob)
            cronJob.start();

            return { 
                status : 200,
                message : "Campaign created and scheduled successfully",
            }
        }
        catch (err) {
            console.log(err, "error in campaign")
            throw this.errorHandler(err)
        }

    }

    async sendOffer(campaign : campaign){
       console.log('📧 Offer sent:', campaign.offerMessage);
    }

    errorHandler(err: any) {
        if (err.name == "castError" || err.name == "ValidationError") {
            throw new BadRequestException(err.message)
        }
        if (err.code == 11000) {
            throw new ConflictException(err.message);
        }
        else {
            throw err

        }
    }

}
