import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {AppDto} from './app.dto'
import {student} from './app.service'

export interface student1{
  name : string,
  age : number,
  city : string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/addstudent')
  async getHello(@Body() data : AppDto): Promise<student> {
    return await this.appService.getHello(data)
  }

  @Get('/getstudent')
  async getStudent(): Promise<any> {
    return await this.appService.getStudent()
  }

  @Put('/updateStudent')
  async updateStudent(@Body() data : AppDto ): Promise<any> {
    return await this.appService.updateStudent(data)
  }

  @Post('/login')
  async loginUser(@Body() user:any ){
    return await this.appService.loginUser(user)
  }
}
