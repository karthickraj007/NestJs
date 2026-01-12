import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppItem, AppStudent, itemSchema, studentSchema } from './app.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/student', { connectionName: 'student' }),
    MongooseModule.forRoot('mongodb://localhost:27017/product', { connectionName: 'product' }),
    MongooseModule.forFeature([
      {name : AppStudent.name, schema : studentSchema},
      {name : AppItem.name, schema : itemSchema}],
      'student'),
    MongooseModule.forFeature([{name : AppItem.name, schema : itemSchema}], 'product')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
