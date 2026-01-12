import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppItem, AppStudent } from './app.schema';
import { Model } from 'mongoose'
import {student1} from './app.controller'
import jwt from "jsonwebtoken"

export interface student {
   statusCode : number,
   message : string
}

export interface updateStudent{
  name? : string,
  age? : number,
  city? : string
}


@Injectable()
export class AppService {

  constructor(
    @InjectModel(AppStudent.name, 'student') private studentModel: Model<AppStudent>,
    @InjectModel(AppItem.name, 'product') private productModel: Model<AppItem>,
    @InjectModel(AppItem.name, 'student') private itemModel: Model<AppItem>,

    )
  {

  }

  async getHello(data: student1): Promise<student> {
    try {
      const student:AppStudent = new this.studentModel(data)
      const save = await student.save()
      return {
        statusCode : 200,
        message : "created sucessfully"
      }
    }
    catch (err) {
      console.log(err, "error")
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

  async getStudent(){
    try{
      const data:student1 | null = await this.studentModel.findOne().populate('productId').lean()
      if(!data){
        const err = new NotFoundException("data is not found")
        throw err
      }
      return data
    }
    catch(err){
      throw err
    }
   
  }

  async updateStudent(obj : updateStudent){
    const updateData = this.studentModel.updateOne({_id : "69563f420bfc2f8083648191"}, {$set : obj})
    return updateData
  }

  async loginUser(data:any){
    const user:any = await this.studentModel.findOne({_id : data?.id}).lean()
    if(!user){
      const res = new NotFoundException('user not found')
      console.log(res)
      throw res
    }
    const token = jwt.sign(user, "abcdefh", { expiresIn: '1h' })


    return {
      status : 200,
      message : "log in success",
      token : token
    }
    
  }

   async addProduct(data: any): Promise<student> {
    try {
      const student = await this.itemModel.create(data)
      const product = await this.productModel.create(data)
      console.log(product, "product")
      return {
        statusCode : 200,
        message : "created sucessfully"
      }
    }
    catch (err) {
      console.log(err, "error")
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

}
