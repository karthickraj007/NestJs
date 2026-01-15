import { Body, Controller, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';

export interface campaign {
    name: string;
    offerMessage: string;
    cronTime: string;
}

@Controller('campaign')
export class CampaignController {

constructor(private CampaignService : CampaignService){

}

@Post('addCampaign')
async addCampaign(@Body() data:campaign){
    return this.CampaignService.createCampaign(data)
}


}
