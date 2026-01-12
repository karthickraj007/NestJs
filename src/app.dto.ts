import { IsString, IsNotEmpty, IsNumber, IsMongoId } from "class-validator"

export class AppDto{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    age:number

    @IsNotEmpty()
    @IsString()
    city:string

    @IsNotEmpty()
    @IsMongoId()
    productId:string
}