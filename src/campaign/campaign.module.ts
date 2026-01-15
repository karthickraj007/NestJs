import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './campaign.schema';


@Module({
  imports : [MongooseModule.forFeature([
    {name : Campaign.name, schema : CampaignSchema}
  ],'student')
],
  controllers: [CampaignController],
  providers: [CampaignService]
})
export class CampaignModule {}
