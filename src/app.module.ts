import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppStudent, studentSchema } from './app.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/student'),
    MongooseModule.forFeature([{name : AppStudent.name, schema : studentSchema, collection : "product"}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
